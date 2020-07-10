'use strict';
const jwt = require('jsonwebtoken');
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

const api = (http, logger, { passportFile, as, audience, config }) => {
    const result = {};

    const headers = {};

    const getRefreshToken = () => {
        const token = config.get('auth.token.refreshToken');
        if (token) {
            return token;
        }
        throw new Error('Authentication required');
    };

    const refreshToken = async () => {
        const openid_configuration = await http.get(`${audience}/.well-known/openid-configuration`);
        const refresh_token = getRefreshToken();
        const token = await http.post(openid_configuration.token_endpoint, {
            grant_type: 'refresh_token',
            refresh_token,
        });
        const until = new Date(config.get('profile.expiresAt') * 1000).toISOString();
        logger.log(`Access token refreshed. Valid until ${until}.`);
        result.updateToken(token);
        return token.access_token;
    };

    const getAccessToken = async () => {
        const ts = Math.round(new Date().getTime() / 1000);
        const exp = config.get('auth.token.expiresAt', 0);
        if (config.get('auth.token.expiresAt', 0) > ts) {
            logger.log(`Access token is fresh. Valid until ${new Date(exp * 1000).toISOString()}. Re-use.`);
            return config.get('auth.accessToken');
        }
        logger.log(`Access token is old. Expired at ${new Date(exp).toISOString()}. Refreshing.`);
        return refreshToken();
    };

    const exchange = async (token, options = {}) => {
        const openid_configuration = await http.get(`${audience}/.well-known/openid-configuration`);
        return http.post(openid_configuration.token_endpoint).send({
            ...{
                grant_type: 'urn:ietf:params:oauth:grant-type:token-exchange',
                audience: audience,
                subject_token: token,
                subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
                issued_token_type: 'urn:ietf:params:oauth:token-type:jwt',
            },
            ...options,
        });
    };

    result.getToken = async (newAudience) => {
        let access_token;

        if (passportFile) {
            access_token = await result.getPassportToken(passportFile, newAudience);
            console.log(`Used passport file '${passportFile}' to generate access token`);
        } else {
            access_token = await getAccessToken();
        }

        if (as) {
            console.log(`Use delegate to switch actor to '${as}'`);
            const body = await exchange(access_token, {
                audience,
                resource: as,
            });
            return body.access_token;
        } else if (!passportFile && audience !== newAudience) {
            console.log(`Update audience as '${audience}'`);
            const body = await exchange(access_token, {
                newAudience,
            });
            return body.access_token;
        }
        return access_token;
    };

    const getHeaders = async () => ({
        Authorization: `Bearer ${await getPassportToken(passportFile, audience)}`,
        ...headers,
    });

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

    result.updateToken = (token) => {
        config.set('auth.token', token);
        config.store();
    };

    result.setHeaders = (h) => {
        Object.assign(headers, h);
    };
    return result;
};

module.exports = { api };
