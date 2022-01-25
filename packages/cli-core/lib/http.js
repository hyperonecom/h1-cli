import fetch from 'node-fetch';
import AbortController from 'abort-controller';

export default (device, logger) => {
    const result = {};
    const controller = new AbortController();

    const baseRequest = async (method, uri, { json, headers, body, query } = {}) => {
        headers = {
            ...headers,
            ...await device.headers(),
        };

        if (json) {
            body = JSON.stringify(json);
            headers['Content-Type'] = 'application/json';
        }
        if (query) {
            uri = `${uri}?${new URLSearchParams(query)}`;
        }

        uri = device.mapUrl(uri);
        logger.debug('HTTP request');
        logger.debug(`request ${method} ${uri}`);
        logger.debug('request headers', JSON.stringify(headers));

        if (json) {
            logger.debug('request json', JSON.stringify(json, null, 2));
        }
        const start = new Date();
        if (body) {
            logger.debug('request body', body);
        }


        const resp = await fetch(uri, {
            method, body, headers, query, signal: controller.signal,
        });

        logger.debug('response status', resp.status);
        logger.debug('response headers', JSON.stringify(Object.fromEntries(resp.headers), null, 2));
        const duration = new Date() - start;
        logger.debug('response time', `${duration} ms`);
        resp.controller = controller;
        if (!resp.ok) {
            const err = new Error('Invalid response');
            err.resp = resp;
            throw err;
        }
        return resp;
    };

    const request = async (method, uri, options) => {
        const resp = await baseRequest(method, uri, options);
        const type = resp.headers.get('content-type');
        const encoding = resp.headers.get('transfer-encoding');

        if (type && type.startsWith('text/plain')) {
            if (encoding === 'chunked') {
                return resp;
            }
            resp.bodyText = resp.text();
            logger.debug('response text', resp.bodyText);
            return resp;
        }

        if (type && type.startsWith('application/json')) {
            resp.bodyJson = await resp.json();
            logger.debug('response json', resp.bodyJson);
            return resp;
        }

        return resp;
    };

    result.delete = (uri, options = {}) => request('delete', uri, options);
    result.patch = (uri, options = {}) => request('patch', uri, options);
    result.post = (uri, options = {}) => request('post', uri, options);
    result.put = (uri, options = {}) => request('put', uri, options);
    result.head = (uri, options = {}) => request('head', uri, options);
    result.get = (uri, options = {}) => request('get', uri, options);

    result.download = async (uri, options = {}) => {
        const resp = await baseRequest('get', uri, options);
        return resp.body;
    };

    return result;
};
