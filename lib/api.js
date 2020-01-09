'use strict';
const crypto = require('./crypto');
const superagent = require('superagent');
const Cookie = require('cookie');
const WebSocket = require('ws');
const os = require('os');
const { Transform } = require('stream');
const readlineTransform = require('readline-transform');

const interactive = require('./interactive');
const logger = require('./logger');
const config = require('./config');

const API_HOSTNAME = process.env.API_HOSTNAME;
const API_SECURE = JSON.parse(process.env.API_SECURE || 'true');
const API_SSH_PORT = process.env.API_SSH_PORT || 22;

const API_URL = API_SECURE ? `https://${API_HOSTNAME}/v1` : `http://${API_HOSTNAME}/v1`;
const WS_URL = API_SECURE ? `wss://${API_HOSTNAME}/ws` : `ws://${API_HOSTNAME}/ws`;
const RETRY_IDEMPOTENT_COUNT = 3;

const SSH_SERVER_HOST_KEY = '3e2aa423d42d7e8b14d50625512c8ac19db767ed';

const info = require('../package.json');

const userAgent = `${info.name}/${info.version} for ${config.scope()} (${os.type()} ${os.release()}; ${process.platform}; ${process.arch}) node/${process.versions.node}`;

let args = {};
let verbose = false;
let project = undefined;
let token = undefined;

exports.setArgs = (value) => {
    args = value;
};

exports.setVerbose = (value) => {
    verbose = value;
};

exports.setProject = (value) => {
    project = value;
};

exports.setToken = (value) => {
    token = value;
};

exports.getApiKey = (user, body) => {
    return api('post', `user/${user}/session`)
        .send(body)
        .then(rsp => {
            const token = rsp.body;
            config.set('profile.apiKey', token.id);
            exports.setToken(token.id);
            config.set('profile.expires', new Date(token.expiry));
            config.set('profile.user', user);
            return Promise.resolve(user);
        })
        .catch(async err => {
            if (err.status === 403 && err.response.body.code === 'CHALLENGE_REQUEST') {
                const type = await interactive.select('2FA Challenge', err.response.body.value);

                const token = await interactive.prompt(`2FA ${type.value} token`);

                return exports.getApiKey(user, Object.assign({}, body, {
                    challenge: {
                        [type.value]: token.value,
                    },
                }));
            }

            return Promise.reject(err);
        });
};

exports.getApiKeySSH = (user) => {
    logger('info', `Trying to login using ssh-agent "${user}"`);
    return new Promise((resolve, reject) => {
        const Client = require('ssh2').Client;

        const conn = new Client();

        conn.on('ready', () => {
            conn.subsys(`${config.scope().toLowerCase()}-auth`, (err, stream) => {
                if (err) {
                    return reject(err);
                }

                let token = '';

                stream.on('close', code => {
                    if (code !== 0) {
                        return reject();
                    }

                    conn.end();
                    resolve(JSON.parse(token));
                });

                stream.on('data', data => {
                    token += data.toString();
                });

            });
        });

        conn.on('error', reject);

        const options = {
            host: API_HOSTNAME.split(':')[0],
            port: API_SSH_PORT,
            username: user,
            // , debug: console.log
            readyTimeout: 5000,
            hostHash: 'sha1',
            hostVerifier: (hostkey, callback) => {
                if (hostkey === SSH_SERVER_HOST_KEY) {
                    return callback(true);
                }
                logger('error', 'Unable to obtain authotken using SSH.');
                logger('error', `Wrong RSA host key received from: ${API_HOSTNAME}`);
                logger('error', `RSA host key expected: ${SSH_SERVER_HOST_KEY}`);
                logger('error', `RSA host key received: ${hostkey}`);
                return callback(false);
            },
            // Depends on PR: https://github.com/mscdex/ssh2/pull/837/files
            ident: userAgent,
        };

        if (process.env.SSH_AUTH_SOCK) {
            options.agent = process.env.SSH_AUTH_SOCK;
        } else if (process.platform === 'win32' && !process.pkg) {
            options.agent = 'pageant';
        }

        conn.connect(options);
    })
        .then(authToken => {
            logger('info', `Successfully authenticated via SSH to user "${user}".`);
            exports.setToken(authToken.id);
            config.set('profile.apiKey', authToken.id);
            config.set('profile.expires', new Date(authToken.expiry));
            config.set('profile.user', user);
            return config.get('profile');
        });
};

const saveCookie = rsp => {
    const setCookie = rsp.headers['set-cookie'];
    if (setCookie) {
        const cookie = setCookie
            .map(item => Cookie.parse(item))
            .find(cookie => cookie['x-auth-token']);
        exports.setToken(cookie['x-auth-token']);
        config.set('profile.apiKey', cookie['x-auth-token']);
        config.set('profile.expires', new Date(cookie.Expires));

        return rsp;
    }
    return rsp;
};

const getHeaders = () => {
    const headers = {};

    if (token) {
        headers['x-auth-token'] = token;
    }

    if (project) {
        headers['x-project'] = project;
    }

    return headers;
};

const raw = (method, url) => {
    const headers = getHeaders();

    if (args['dry-run']) {
        headers['x-dry-run'] = true;
    }

    if (verbose) {
        logger('verbose', `${method.toUpperCase()} ${url}`);
        if (process.env.NODE_ENV !== 'production') {
            logger('verbose', 'headers', JSON.stringify(headers, null, 2));
        }
    }

    return superagent(method, url)
        .set(headers)
        .set('User-Agent', userAgent);
};

const api = (method, uri, apiUrl = API_URL) => {
    return raw(method, `${apiUrl}/${uri}`);
};

exports.get = async (uri, query = {}) => {
    const res = await api('get', uri).query(query);
    saveCookie(res);
    if (verbose) {
        logger('verbose', `query ${JSON.stringify(query)}`);
        logger('verbose', `${res.status} ${res.res.statusMessage}`);
    }

    if (res.type === 'text/plain') {
        return res.text;
    }

    return res.body;
};


exports.stream = async (uri, query = {}) => api('get', uri)
    .query(query)
    .buffer(false)
    .pipe(new readlineTransform())
    .pipe(new Transform({
        objectMode: true,
        transform(line, encoding, callback) {
            try {
                return callback(null, JSON.parse(line.toString('utf-8')));
            } catch (err) {
                return callback(err);
            }
        },
    }));

exports.delete = (uri, body) => update('delete', uri, body);
exports.patch = (uri, body) => update('patch', uri, body);
exports.post = (uri, body) => update('post', uri, body);
exports.put = (uri, body) => update('put', uri, body);
exports.head = (uri, body) => api('head', uri).send(body);
exports.download = url => api('get', url);
exports.redirect_url = (uri, query) => exports
    .api('get', uri)
    .query(query)
    .redirects(0)
    .ok(res => res.status < 400)
    .then(resp => resp.headers.location);

const update = async (method, uri, body) => {

    if (verbose && !!body) {
        logger('verbose', 'body', JSON.stringify(body, null, 2));
    }
    const prefer_async = 'no-wait' in args && args['no-wait'];
    const prefer_value = prefer_async ? 'respond-async,wait=0' : `respond-async,wait=${60 * 60 * 24}`;

    const res = await api(method, uri)
        .send(body)
        .set({ Prefer: prefer_value })
        .set({ 'x-idempotency-key': await crypto.randomPassword()})
        .retry(RETRY_IDEMPOTENT_COUNT);
    saveCookie(res);
    if (verbose) {
        logger('verbose', 'status', res.status);
        logger('verbose', 'headers', JSON.stringify(res.headers, null, 2));
    }

    return res.body;
};

const getWS = (urn = '', wsUrl = WS_URL, options = {}) => new Promise((resolve, reject) => {
    const url = `${wsUrl}/${urn}`;
    const headers = getHeaders();

    if (verbose) {
        logger('verbose', `ws ${url}`);
    }

    if (verbose) {
        logger('verbose', 'headers', JSON.stringify(headers, null, 2));
    }

    const ws = new WebSocket(url, Object.assign({
        headers,
    }, options));

    if (!ws) {
        logger('error', 'did not managed to create websocket');
    }

    ws.on('open', () => {
        if (verbose) {
            logger('verbose', 'websocket opened');
        }
        resolve(ws);
    });

    ws.on('close', () => {
        if (verbose) {
            logger('verbose', 'websocket closed');
        }
    });

    ws.on('error', reject);
});

exports.wsUpload = urn => getWS(`${urn}`, WS_URL.replace('//api.', '//download.'));
// exports.wsUpload = urn => getWS(`${urn}`, 'ws://localhost:4003/ws');
exports.wsMetrics = urn => getWS(`v1/${urn}`, WS_URL.replace('/ws', ''));
exports.wsLogs = urn => getWS(`v1/${urn}`, WS_URL.replace('/ws', ''), {
    followRedirects: true,
});
exports.getWS = getWS;
exports.api = api;
