
export default (http, auth) => {
    const result = {};

    const headers = {};

    const getHeaders = async (audience) => {
        const token = await auth.getToken(audience);
        if (token) {
            return {
                Authorization: `Bearer ${token}`,
                ...headers,
            };
        }
        return headers;
    };

    const update = async (method, uri, options={}) => http[method](uri, {
        ...options,
        headers: {
            ...await getHeaders(),
            ...options.headers || {},
        },
    });

    result.delete = (uri, options={}) => update('delete', uri, options);
    result.patch = (uri, options={}) => update('patch', uri, options);
    result.post = (uri, options={}) => update('post', uri, options);
    result.put = (uri, options={}) => update('put', uri, options);
    result.head = (uri, options={}) => update('head', uri, options);
    result.get = (uri, options={}) => update('get', uri, options);

    result.setHeaders = (h) => {
        Object.assign(headers, h);
    };

    return result;
};
