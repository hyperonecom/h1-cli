'use strict';
const fetch = require('node-fetch');
const jwt = require('jsonwebtoken');
const openapi = require('../lib/openapi');

const fs = require('fs').promises;

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

    result.get = async (uri, query = {}) => {
        const res = await api('get', uri, {
            query: query,
        });

        if (res.type === 'text/plain') {
            return res.text;
        }

        return res.body;
    };

    const update = async (method, uri, body) => {
        console.log({uri, body});
        const resp = await fetch(uri, {
            method,
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${await getPassportToken(passportFile, audience)}`,
                ...headers
            },
        });
        return resp.json();
    }

    result.delete = (uri, body) => update('delete', uri, body);
    result.patch = (uri, body) => update('patch', uri, body);
    result.post = (uri, body) => update('post', uri, body);
    result.put = (uri, body) => update('put', uri, body);
    result.head = (uri) => api('head', uri);
    result.download = url => api('get', url);
    result.setHeaders = (h) => {
        Object.assign(headers, h);
    }
    return result;
};

module.exports = {
    name: __dirname.split('/').pop(),
    parameters: {
        'passport-file': {
            type: 'string',
            description: "Passport file",
            required: true,
        },
    },
    beforeHandler: async (ctx) => {
        ctx.toolbox.fetch = fetch;
        ctx.toolbox.api = api(ctx.input.passportFile, openapi.getUrl(''));
    }
};