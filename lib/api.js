'use strict';

const superagent = require('superagent');
const request = require('request');
const Cookie = require('cookie');
const WebSocket = require('ws');
const os = require('os');

const interactive = require('./interactive');
const logger = require('./logger');
const config = require('./config');

const API_HOSTNAME = process.env.API_HOSTNAME;
const API_SECURE = JSON.parse(process.env.API_SECURE || 'true');
const API_SSH_PORT = process.env.API_SSH_PORT || 22;

const API_URL = API_SECURE ? `https://${API_HOSTNAME}/v1` : `http://${API_HOSTNAME}/v1`;
const WS_URL = API_SECURE ? `wss://${API_HOSTNAME}/ws` : `ws://${API_HOSTNAME}/ws`;

const SSH_SERVER_HOST_KEY = '3e2aa423d42d7e8b14d50625512c8ac19db767ed';

const info = require('../package.json');
const userAgent = `${info.name}/${info.version} (${os.type()} ${os.release()}; ${process.platform}; ${process.arch}) node/${process.versions.node}`;

let args = {};
let verbose = false;

exports.setArgs = function(value) {
    args = value;
};

exports.setVerbose = function(value) {
    verbose = value;
};

exports.getApiKey = function(user, body) {
    return api('post', `user/${user}/session`)
        .send(body)
        .then(rsp => {
            const token = rsp.body;
            config.set('profile.apiKey', token._id);
            config.set('profile.expires', new Date(token.expiry));
            config.set('profile.user', user);
            return Promise.resolve(user);
        })
        .catch(async err => {
            if (err.status === 403 && err.response.body.code === 'CHALLENGE_REQUEST') {
                const type = await interactive.select('2FA Challenge', err.response.body.value);

                const token = await interactive.prompt(`2FA ${type.value} token`);

                return exports.getApiKey(user, Object.assign({}, body, { challenge: { [type.value]: token.value } }));
            }

            return Promise.reject(err);
        })
    ;
};

exports.getApiKeySSH = function(user) {
    logger('info', `Trying to login using ssh-agent "${user}"`);
    return new Promise((resolve, reject) => {
        const Client = require('ssh2').Client;

        const conn = new Client();

        conn.on('ready', () => {
            conn.subsys('rbx-auth', (err, stream) => {
                if (err) { return reject(err); }

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
        };

        if (process.env.SSH_AUTH_SOCK) {
            options.agent = process.env.SSH_AUTH_SOCK;
        } else if (process.platform === 'win32' && !process.pkg) {
            options.agent = 'pageant';
        }

        conn.connect(options);
    })
        .then(authToken => {
            config.set('profile.apiKey', authToken._id);
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

        config.set('profile.apiKey', cookie['x-auth-token']);
        config.set('profile.expires', new Date(cookie.Expires));

        return rsp;
    }
    return rsp;
};

const getHeaders = () => {
    const headers = {};

    if (config.get('profile.apiKey')) {
        headers['x-auth-token'] = config.get('profile.apiKey');
    }

    if (config.get_token()) {
        headers['x-auth-token'] = config.get_token();
    } else if (config.get_project() || config.get('profile.project._id')) {
        headers['x-project'] = config.get_project()|| config.get('profile.project._id');
    }

    return headers;
};

function raw(method, url) {
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

function api(method, uri, apiUrl = API_URL) {
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

exports.delete = (uri, body) => update('delete', uri, body);
exports.patch = (uri, body) => update('patch', uri, body);
exports.post = (uri, body) => update('post', uri, body);
exports.put = (uri, body) => update('put', uri, body);
exports.download = url => request.get({ url: url, headers: getHeaders() });

const update = async (method, uri, body) => {

    let ws;

    if ('no-wait' in args && !args['no-wait']) {
        ws = await getWS();
    }

    if (verbose && !!body) {
        logger('verbose', 'body', JSON.stringify(body, null, 2));
    }

    const res = await api(method, uri).send(body);
    saveCookie(res);
    if (verbose) {
        logger('verbose', 'headers', JSON.stringify(res.headers, null, 2));
    }

    return wait_for_event(res, ws).finally(() => {
        if (ws) {
            ws.close();
        }
    });
};

const getWS = (urn = '', wsUrl = WS_URL) => new Promise((resolve, reject) => {
    if (verbose) {
        logger('verbose', `ws ${wsUrl}${urn}`);
    }

    const ws = new WebSocket(`${wsUrl}${urn}`, { headers: getHeaders() });

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

async function wait_for_event(res, ws) {
    const eventId = res.headers['x-event-id'];
    let resource = res.body;

    if (res.status === 202 && ws) {

        if (args['no-wait']) {
            if (verbose) {
                logger('verbose', `${res.status} event queued.`);
            }
            return res.body;
        }
        if (verbose) {
            logger('verbose', `${res.status} event queued, waiting for completion....`);
        }

        return new Promise((resolve, reject) => {
            ws.on('message', msg => {

                try {
                    msg = JSON.parse(msg);
                } catch (e) {
                    return reject(e);
                }

                if (msg.message.type !== 'event') {
                    return;
                }

                const event = msg.message.data;

                if (resource._id === msg.resource.data._id) {
                    resource = msg.resource.data;
                }

                if (eventId === event._id || !eventId && msg.resource.data._id === res.body._id) {
                    if (verbose) {
                        const stage = event.stage && JSON.stringify(event.stage);
                        logger('verbose', `state: ${event.state} ${stage || ''}`);
                    }

                    if (event.state == 'finished') {
                        return resolve(resource);
                    } else if (event.state == 'error') {
                        return reject('event state: error');
                    }
                }
            });
        });
    }

    if (verbose) {
        logger('verbose', `${res.status} ${res.res.statusMessage}`);
    }

    return res.body;
};

exports.wsUpload = urn => getWS(`/${urn}`, WS_URL.replace('//api.', '//download.'));
exports.wsMetrics = urn => getWS(`/v1/${urn}`, WS_URL.replace('/ws', ''));
exports.getWS = getWS;
