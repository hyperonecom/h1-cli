import fetch from 'node-fetch';

export default (device, logger) => {
    const result = {};

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
            method, body, headers, query,
        });

        logger.debug('response status', resp.status);
        logger.debug('response headers', JSON.stringify(Object.fromEntries(resp.headers), null, 2));
        const duration = new Date() - start;
        logger.debug('response time', `${duration} ms`);

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

        if (type.startsWith('text/plain')) {
            const respText = await resp.text();
            logger.debug('response text', respText);
            return respText;
        }

        if (type.startsWith('application/json')) {
            const respJson = await resp.json();
            logger.debug('response json', respJson);
            return respJson;
        }

        throw new Error(`Unsupported content type: ${type}`);
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
