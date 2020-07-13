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

module.exports = ({http, logger, config, passport, as, defaultAudience}) => {

    const result = {};

    const getRefreshToken = () => {
        const token = config.get('auth.token.refresh_token');
        if (token) {
            return token;
        }
        throw new Error('Authentication required');
    };

    const refreshToken = async (audience) => {
        const openid_configuration = await http.get(`${defaultAudience}/.well-known/openid-configuration`);
        const refresh_token = getRefreshToken();
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
        const exp = config.get('auth.token.expires_in', 0);
        if (config.get('auth.token.expires_at', 0) > ts) {
            logger.debug(`Access token is fresh. Valid until ${new Date(exp * 1000).toISOString()}. Re-use.`);
            return config.get('auth.token.access_token');
        }
        logger.debug(`Access token is old. Expired at ${new Date(exp).toISOString()}. Refreshing.`);
        return refreshToken();
    };

    const exchange = async (audience, token, options = {}) => {
        const openid_configuration = await http.get(`${defaultAudience}/.well-known/openid-configuration`);
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
        } else if (!passport && defaultAudience !== audience) {
            logger.debug(`Update audience as '${audience}'`);
            const body = await exchange(access_token, {
                audience,
            });
            return body.access_token;
        }
        return access_token;
    };

    result.updateToken = (token) => {
        token.expires_at = +new Date() + token.expires_in;
        config.set('auth.token', token);
        config.store();
    };

    return result;
}