'use strict';
const config = require('./config');
const request = require('./http');
const logger = require('./logger');
const cli = require('lib/cli');
const jwt = require('jsonwebtoken');
const fs = require('fs').promises;

const API_SECURE = JSON.parse(process.env.API_SECURE || 'true');
const API_HOSTNAME = process.env.API_HOSTNAME;
const API_URL = API_SECURE ? `https://${API_HOSTNAME}/v2` : `http://${API_HOSTNAME}/v2`;

let args = {};

exports.setArgs = (x) => args = x;

const getPassportToken = async (passportFile, audience = API_URL) => {
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

const updateToken = (body, audience = API_URL) => {
    config.set('profile.refreshToken', body.refresh_token);
    config.set('profile.accessToken', body.access_token);
    const ts = Math.round(new Date().getTime() / 1000);
    config.set('profile.expiresAt', ts + body.expires_in);
    config.set('profile.audience', audience);
    // config.set('profile.expiresAt', 0);
};

exports.login = async (username, password) => {
    const openid_configuration = await request.get(`${API_URL}/.well-known/openid-configuration`).then(resp => resp.body);
    const body = await request.post(openid_configuration.token_endpoint).send({
        grant_type: 'password',
        username: username,
        password: password,
        scope: 'offline_access',
    }).then(resp => resp.body);
    updateToken(body);
};

exports.federate = async (token, options) => {
    const body = await exchange(token, options);
    updateToken(body);
};

exports.introspection = async () => {
    const token = await exports.getToken();
    const openid_configuration = await request.get(`${API_URL}/.well-known/openid-configuration`).then(resp => resp.body);
    return request.post(openid_configuration.introspection_endpoint).send({
        token: token,
    }).then(resp => resp.body);
};

exports.logout = async () => {
    const openid_configuration = await request.get(`${API_URL}/.well-known/openid-configuration`).then(resp => resp.body);
    const token = getRefreshToken();
    const body = await request.post(openid_configuration.revocation_endpoint).send({
        token: token,
        token_type_hint: 'refresh_token',
    }).then(resp => resp.body);
    updateToken(body);
};

const getRefreshToken = () => {
    const stored_refreshToken = config.get('profile.refreshToken');
    if (stored_refreshToken) {
        return stored_refreshToken;
    }
    throw new Error('Authentication required');
};

const exchange = async (token, options = {}) => {
    const openid_configuration = await request.get(`${API_URL}/.well-known/openid-configuration`).then(resp => resp.body);
    return request.post(openid_configuration.token_endpoint).send({
        ...{
            grant_type: 'urn:ietf:params:oauth:grant-type:token-exchange',
            audience: API_URL,
            subject_token: token,
            subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
            issued_token_type: 'urn:ietf:params:oauth:token-type:jwt',
        },
        ...options,
    }).then(resp => resp.body);
};

const refreshToken = async () => {
    const openid_configuration = await request.get(`${API_URL}/.well-known/openid-configuration`).then(resp => resp.body);
    const refresh_token = getRefreshToken();
    try {
        const body = await request.post(openid_configuration.token_endpoint).send({
            grant_type: 'refresh_token',
            refresh_token,
        }).then(resp => resp.body);
        const until = new Date(config.get('profile.expiresAt') * 1000).toISOString();
        logger('verbose', `Access token refreshed. Valid until ${until}.`);
        updateToken(body);
        return body.access_token;
    } catch (err) {
        const error = err.response && err.response.body && err.response.body.error;
        if (error == 'invalid_grant') {
            throw cli.error.cancelled('Available refresh token is invalid / expired / revoked. Use \'login\' again.');
        }
        throw err;
    }
};

const getAccessToken = async () => {
    const ts = Math.round(new Date().getTime() / 1000);
    const exp = config.get('profile.expiresAt', 0);
    if (config.get('profile.expiresAt', 0) > ts) {
        logger('verbose', `Access token is fresh. Valid until ${new Date(exp * 1000).toISOString()}. Re-use.`);
        return config.get('profile.accessToken');
    }
    logger('verbose', `Access token is old. Expired at ${new Date(exp).toISOString()}. Refreshing.`);
    return refreshToken();
};

exports.getIdentity = async () => {
    const resp = await exports.introspection();
    return resp.sub;
};

exports.getToken = async (audience = API_URL) => {
    let access_token;
    if (args['passport-file']) {
        const passportFile = args['passport-file'];
        access_token = await getPassportToken(passportFile, audience);
        logger('info', `Used passport file '${passportFile}' to generate access token`);
    } else {
        access_token = await getAccessToken();
    }

    if (args.as) {
        logger('info', `Use delegate to switch actor to '${args.as}'`);
        const body = await exchange(access_token, {
            audience,
            resource: args.as,
        });
        return body.access_token;
    } else if (!args['passport-file'] && audience !== API_URL) {
        logger('verbose', `Update audience as '${audience}'`);
        const body = await exchange(access_token, {
            audience,
        });
        return body.access_token;
    }
    return access_token;
};

