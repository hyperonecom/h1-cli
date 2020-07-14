'use strict';
const fetch = require('node-fetch');

module.exports = (device, logger) => {
    const result = {};

    const request = async (method, uri, { json, headers, body, query } = {}) => {
        headers = { ...headers };
        if (json) {
            body = JSON.stringify(json);
            headers['Content-Type'] = 'application/json';
        }

        if (device.headers) {
            headers = {
                ...headers,
                ...device.headers(),
            };
        }
        uri = device.mapUrl(uri);
        logger.debug('HTTP request');
        logger.debug(`request ${method} ${uri}`);
        logger.debug('request headers', JSON.stringify(headers));

        if (json) {
            logger.debug('request json', JSON.stringify(json, null, 2));
        }

        if (body) {
            logger.debug('request body', body);
        }

        const resp = await fetch(uri, {
            method, body, headers, query,
        });

        logger.debug('response status', resp.status);
        logger.debug('response headers', JSON.stringify(resp.headers, null, 2));

        if (!resp.ok) {
            const err = new Error('Invalid response');
            err.resp = resp;
            throw err;
        }

        const type = resp.headers.get('content-type');

        if (type.startsWith('text/plain')) {
            const respText = resp.text();
            logger.debug('response text', respText);
            return respText;
        }

        const respJson = await resp.json();
        logger.debug('response json', respJson);
        return respJson;
    };

    result.delete = (uri, options = {}) => request('delete', uri, options);
    result.patch = (uri, json, options = {}) => request('patch', uri, { json, ...options });
    result.post = (uri, json, options = {}) => request('post', uri, { json, ...options });
    result.put = (uri, json, options = {}) => request('put', uri, { json, ...options });
    result.head = (uri, options = {}) => request('head', uri, options);
    result.get = (uri, options = {}) => request('get', uri, options);

    return result;
};