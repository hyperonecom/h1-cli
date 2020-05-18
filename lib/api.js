'use strict';
// const crypto = require('./crypto');
// const Cookie = require('cookie');
const WebSocket = require('ws');
const auth = require('lib/auth');

const logger = require('./logger');
const request = require('./http');

const API_HOSTNAME = process.env.API_HOSTNAME;
const API_SECURE = JSON.parse(process.env.API_SECURE || 'true');
const API_URL = API_SECURE ? `https://${API_HOSTNAME}/v2` : `http://${API_HOSTNAME}/v2`;
const WS_URL = API_SECURE ? `wss://${API_HOSTNAME}/ws` : `ws://${API_HOSTNAME}/ws`;
// const RETRY_IDEMPOTENT_COUNT = 3;
// const API_SSH_PORT = process.env.API_SSH_PORT || 22;

exports.API_URL = API_URL;
let args = {};

exports.setArgs = x => {
    args = x;
    auth.setArgs(x);
};

exports.absoluteUrl = (uri) => {
    return `${API_URL}/${uri}`;
};

const api = async (method, uri, options = {}) => {
    let req = request[method](exports.absoluteUrl(uri));
    req.auth(await auth.getToken(), {type: 'bearer'});
    if (options.body) {
        req = req.send(options.body);
    }
    if (options.query) {
        req = req.query(options.query);
    }
    if (options.headers) {
        req = req.set(options.headers);
    }
    return req;
    // .retry(RETRY_IDEMPOTENT_COUNT)
};

exports.get = async (uri, query = {}) => {
    const res = await api('get', uri, {
        query: query,
    });

    if (res.type === 'text/plain') {
        return res.text;
    }

    return res.body;
};

exports.delete = (uri, body) => update('delete', uri, body);
exports.patch = (uri, body) => update('patch', uri, body);
exports.post = (uri, body) => update('post', uri, body);
exports.put = (uri, body) => update('put', uri, body);
exports.head = (uri) => api('head', uri);
exports.download = url => api('get', url);

const update = async (method, uri, body) => {
    const prefer_async = 'no-wait' in args && args['no-wait'];
    const prefer_value = prefer_async ? 'respond-async,wait=0' : `respond-async,wait=${60 * 60 * 24}`;
    const headers = {
        Prefer: prefer_value,
        // 'x-idempotency-key': await crypto.randomPassword(),
    };
    const resp = await api(method, uri, {
        body,
        headers,
    });
    return resp.body;
};

const getWS = (urn = '', wsUrl = WS_URL, options = {}) => new Promise(async (resolve, reject) => {
    const url = `${wsUrl}/${urn}`;
    let headers;
    try {
        headers = {
            Authorization: `Bearer ${await auth.getAccessToken()}`,
        };
    } catch (err) {
        return reject(err);
    }

    logger('verbose', `ws ${url}`);
    logger('verbose', 'headers', JSON.stringify(headers, null, 2));

    const ws = new WebSocket(url, Object.assign({
        headers,
    }, options));

    if (!ws) {
        logger('error', 'did not managed to create websocket');
    }

    ws.on('open', () => {
        logger('verbose', 'websocket opened');
        resolve(ws);
    });

    ws.on('close', () => logger('verbose', 'websocket closed'));

    ws.on('error', reject);
});

exports.wsUpload = urn => getWS(`${urn}`, WS_URL.replace('//api.', '//download.'));
exports.getWS = getWS;
exports.api = api;
