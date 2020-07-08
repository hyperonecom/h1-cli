'use strict';
const jwt = require('jsonwebtoken');
const fs = require('fs').promises;
const fetch = require('node-fetch');

const getPassportToken = async (passportFile, audience) => {
    const passport = JSON.parse(await fs.readFile(passportFile, { encoding: 'utf-8' }));
    return jwt.sign({}, passport.private_key, {
        algorithm: 'RS256',
        expiresIn: '5m',
        keyid: passport.certificate_id,
        audience: audience,
        issuer: passport.issuer,
        subject: passport.subject_id,
    });
};

const api = (passportFile, audience) => {
    const result = {};

    const headers = {};
    const getHeaders = async () => ({
        'Content-Type': 'application/json',
        Prefer: `respond-async,wait=${60 * 60 * 24}`, // TOOD: Move to plugin
        Authorization: `Bearer ${await getPassportToken(passportFile, audience)}`,
        ...headers,
    });

    result.get = async (uri, query = {}) => {
        const res = await fetch(uri, {
            method: 'get',
            query: query,
            headers: await getHeaders(),
        });
        if (res.type === 'text/plain') {
            return res.text;
        }

        return res.json();
    };

    const update = async (method, uri, body) => {
        console.log(`${method} ${uri}`);
        const resp = await fetch(uri, {
            method,
            body: JSON.stringify(body),
            headers: await getHeaders(),
        });
        return resp.json();
    };

    result.delete = (uri, body) => update('delete', uri, body);
    result.patch = (uri, body) => update('patch', uri, body);
    result.post = (uri, body) => update('post', uri, body);
    result.put = (uri, body) => update('put', uri, body);
    result.head = (uri) => api('head', uri);
    result.download = url => api('get', url);
    result.setHeaders = (h) => {
        Object.assign(headers, h);
    };
    return result;
};

module.exports = { api };
