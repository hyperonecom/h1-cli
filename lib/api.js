'use strict';

const request = require('superagent');
const Cookie = require('cookie');
const WebSocket = require('ws');

const logger = require('lib/logger');
const config = require('lib/config');

const API_HOSTNAME = process.env.API_HOSTNAME || 'api.hyperone.com';
const API_SECURE = JSON.parse(process.env.API_SECURE || 'true');
const API_SSH_PORT = process.env.API_SSH_PORT || 22;

const apiUrl = API_SECURE ? `https://${API_HOSTNAME}/v1` : `http://${API_HOSTNAME}/v1`;
const wsUrl = API_SECURE ? `wss://${API_HOSTNAME}/ws` : `ws://${API_HOSTNAME}/ws`;

const SSH_SERVER_HOST_KEY = '3e2aa423d42d7e8b14d50625512c8ac19db767ed';

const info = require('package.json');
const userAgent = `${info.name}/${info.version} (${process.platform}; ${process.arch}) node/${process.versions.node}`;

let args = {};
let verbose = false;

exports.setArgs = function(value) {
    args = value;
};

exports.setVerbose = function(value) {
    verbose = value;
};

exports.getApiKey = function(user, password) {
    return api('post', `user/${user}/session`)
        .send({ password: password })
        .then(rsp => {
            const token = rsp.body;
            config.set('profile.apiKey', token._id);
            config.set('profile.expires', new Date(token.expiry));
            config.set('profile.user', user);
            return Promise.resolve(user);
        })
    ;
};

exports.getApiKeySSH = function(user) {
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

                    resolve(JSON.parse(token));
                });

                stream.on('data', data => {
                    token += data.toString();
                });

            });
        });

        conn.on('error', reject);

        const options = {
            host: API_HOSTNAME.split(':')[0]
          , port: API_SSH_PORT
          , username: user
          // , debug: console.log
          , readyTimeout: 5000
          , hostHash: 'sha1'
          , hostVerifier: (hostkey, callback) => {
                if (hostkey === SSH_SERVER_HOST_KEY) {
                    return callback(true);
                }
                logger('error', 'Unable to obtain authotken using SSH.');
                logger('error', `Wrong RSA host key received from: ${API_HOSTNAME}`);
                logger('error', `RSA host key expected: ${SSH_SERVER_HOST_KEY}`);
                logger('error', `RSA host key received: ${hostkey}`);
                return callback(false);
          }
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

const apiRequestCatcher = e => {
    // TODO encapsulate api errors
    // throw Cli.error.notFound(`Userdata file not found: ${filename}`);
    throw e;
};

function api(method, uri) {

    const headers = {};

    if (config.get('profile.apiKey')) {
        headers['x-auth-token'] = config.get('profile.apiKey');
    }

    if (config.get('profile.tenant._id')) {
        headers['x-billing-tenant'] = config.get('profile.tenant._id');
    }

    if (args['dry-run']) {
        headers['x-dry-run'] = true;
    }

    const url = `${apiUrl}/${uri}`;

    if (verbose) {
        logger('verbose', `${method.toUpperCase()} ${url}`);
    }

    return request(method, url)
        .set(headers)
        .set('User-Agent', userAgent);
};

exports.get = (uri, query={}) => api('get', uri)
    .query(query)
    .then(saveCookie)
    .then(res => {
        if (verbose) {
            logger('verbose', `${res.status} ${res.res.statusMessage}`);
        }

        if (res.type === 'text/plain') {
            return res.text;
        }

        return res.body;
    })
    .catch(apiRequestCatcher);

exports.post = function(uri, body) {
    return update('post', uri, body);
};

exports.put = function(uri, body) {
    return update('put', uri, body);
};

exports.patch = function(uri, body) {
    return update('patch', uri, body);
};

exports.delete = function(uri, body) {
    return update('delete', uri, body);
};

function update(method, uri, body) {

    let wsPromise = Promise.resolve();

    if ('no-wait' in args && !args['no-wait']) {
        wsPromise = ws();
    }

    if (verbose && !!body) {
        logger('verbose', 'body', JSON.stringify(body, null, 2));
    }

    return wsPromise
        .then(ws => api(method, uri)
            .send(body)
            .then(saveCookie)
            .then(res => {
                if (verbose) {
                    logger('verbose', 'headers', JSON.stringify(res.headers, null, 2));
                }
                return res;
            })
            .then(res => wait_for_event(res, ws))
            .catch(apiRequestCatcher)
        );
};

function ws(urn = '') {
    const apiKey = config.get('profile.apiKey');
    const tenantId = config.get('profile.tenant._id');

    if (!apiKey || !tenantId) {
        return Promise.resolve();
    }

    return new Promise((resolve, reject) => {

        if (verbose) {
            logger('verbose', `ws ${wsUrl}${urn}`);
        }

        const ws = new WebSocket(`${wsUrl}${urn}`, {
            headers: {
                'x-auth-token': apiKey
              , 'x-billing-tenant': tenantId
              , 'user-agent': userAgent
            }
        });

        if (!ws) {
            logger('error', 'did not managed to create websocket');
        }

        ws.on('open', () => {
            if (verbose) {
                logger('verbose', 'websocket opened');
            }
            resolve(ws);
        });

        ws.on('error', reject);
    });
};

function wait_for_event(res, ws) {
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
