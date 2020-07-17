'use strict';

module.exports = (http, auth) => {
    const result = {};

    const headers = {};

    const getHeaders = async (audience) => {
        const token = await auth.getToken(audience);
        if (token) {
            const headers = {
                Authorization: `Bearer ${token}`,
                ...headers,
            };
        }
        return headers;
    };

    const update = async (method, uri, json) => http[method](uri, {
        json,
        headers: await getHeaders(),
    });

    result.delete = (uri, body) => update('delete', uri, body);
    result.patch = (uri, body) => update('patch', uri, body);
    result.post = (uri, body) => update('post', uri, body);
    result.put = (uri, body) => update('put', uri, body);
    result.head = (uri) => update('head', uri);
    result.get = (uri) => update('get', uri);

    result.setHeaders = (h) => {
        Object.assign(headers, h);
    };

    return result;
};
