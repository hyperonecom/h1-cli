'use strict';

const jwt = require('jsonwebtoken');

const getPassportToken = async (passport, audience) => {
    return jwt.sign({}, passport.private_key, {
        algorithm: 'RS256',
        expiresIn: '5m',
        keyid: passport.certificate_id,
        audience: audience,
        issuer: passport.issuer,
        subject: passport.subject_id,
    });
};

module.exports = ({ http, logger, config, passport, as, defaultAudience }) => {

    const result = {};

    const getRefreshToken = () => config.get('auth.token.refresh_token');

    const refreshToken = async () => {
        const refresh_token = await getRefreshToken();
        if (!refresh_token) {
            logger.debug('No refresh token available. Skip refreshing.');
            return;
        }
        const openid_configuration = await http.get(`${defaultAudience}/.well-known/openid-configuration`);
        const token = await http.post(openid_configuration.token_endpoint, {
            grant_type: 'refresh_token',
            refresh_token,
        });
        const until = new Date(config.get('auth.token.expires_at') * 1000).toISOString();
        logger.debug(`Access token refreshed. Valid until ${until}.`);
        result.updateToken(token);
        return token.access_token;
    };

    const getAccessToken = async () => {
        const ts = Math.round(new Date().getTime() / 1000);
        const ext = await config.get('auth.token.expires_at', 0);
        console.log({ ext });
        if (ext > ts) {
            logger.debug(`Access token is fresh. Valid until ${new Date(ext * 1000).toISOString()}. Re-use.`);
            return config.get('auth.token.access_token');
        }
        logger.debug(`Access token is old. Expired at ${new Date(ext * 1000).toISOString()}. Attempt to refresh.`);
        return refreshToken();
    };

    const exchange = async (audience, token, options = {}) => {
        const openid_configuration = await http.get(`${defaultAudience}/.well-known/openid-configuration`);
        return http.post(openid_configuration.token_endpoint, {
            json: {
                ...{
                    grant_type: 'urn:ietf:params:oauth:grant-type:token-exchange',
                    audience: audience,
                    subject_token: token,
                    subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
                    issued_token_type: 'urn:ietf:params:oauth:token-type:jwt',
                },
                ...options,
            },
        });
    };

    result.getToken = async (audience) => {
        let access_token;
        if (passport) {
            access_token = await getPassportToken(passport, audience || defaultAudience);
            logger.debug('Used passport file to generate access token');
        } else {
            access_token = await getAccessToken();
        }

        if (as) {
            logger.debug(`Use delegate to switch actor to '${as}'`);
            const body = await exchange(access_token, {
                audience,
                resource: as,
            });
            return body.access_token;
        } else if (!passport && audience && defaultAudience !== audience) {
            logger.debug(`Update audience as '${audience}'`);
            const body = await exchange(access_token, {
                audience,
            });
            return body.access_token;
        }
        return access_token;
    };

    result.updateToken = async (token) => {
        token.expires_at = Math.floor(Date.now() / 1000) + token.expires_in;
        await config.set('auth.token', token);
        await config.store();
    };

    result.federate = async (token, options) => {
        const body = await exchange(defaultAudience, token, options);
        return result.updateToken(body);
    };

    result.introspection = async () => {
        const token = await getAccessToken();
        const openid_configuration = await http.get(`${defaultAudience}/.well-known/openid-configuration`);
        return http.post(openid_configuration.introspection_endpoint, {
            json: {
                token: token,
            },
        });
    };

    return result;
};
