'use strict';
const config = require('./config');
const request = require('./http');
const logger = require('./logger');

const jwt = require('jsonwebtoken');
const fs = require('fs').promises;

const API_SECURE = JSON.parse(process.env.API_SECURE || 'true');
const API_HOSTNAME = process.env.API_HOSTNAME;
const API_URL = API_SECURE ? `https://${API_HOSTNAME}/v2` : `http://${API_HOSTNAME}/v2`;

let args = {};

exports.setArgs = (x) => args = x;

const getPassportToken = async (passportFile, audience = 'api.hyperone.com') => {
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


const updateToken = (body) => {
    config.set('profile.refreshToken', body.refresh_token);
    config.set('profile.accessToken', body.access_token);
    const ts = Math.round(new Date().getTime() / 1000);
    config.set('profile.expiresAt', ts + body.expires_in);
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

exports.introspection = async () => {
    const token = await exports.getAccessToken();
    const openid_configuration = await request.get(`${API_URL}/.well-known/openid-configuration`).then(resp => resp.body);
    return request.post(openid_configuration.introspection_endpoint).send({
        token: token,
    }).then(resp => resp.body);
};

exports.logout = async () => {
    const openid_configuration = await request.get(`${API_URL}/.well-known/openid-configuration`).then(resp => resp.body);
    const token = exports.getRefreshToken();
    const body = await request.post(openid_configuration.revocation_endpoint).send({
        token: token,
        token_type_hint: 'refresh_token',
    }).then(resp => resp.body);
    updateToken(body);
};

exports.getRefreshToken = () => {
    const stored_refreshToken = config.get('profile.refreshToken');
    if (stored_refreshToken) {
        return stored_refreshToken;
    }
    throw new Error('Authentication required');
};

exports.delegate = async (actor, token) => {
    const openid_configuration = await request.get(`${API_URL}/.well-known/openid-configuration`).then(resp => resp.body);
    return request.post(openid_configuration.token_endpoint).send({
        grant_type: 'urn:ietf:params:oauth:grant-type:token-exchange',
        audience: 'https://api.hyperone.com/v2',
        resource: actor,
        subject_token: token,
        subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
        issued_token_type: 'urn:ietf:params:oauth:token-type:jwt',
    }).then(resp => resp.body);
};

exports.getAccessToken = async () => {
    const ts = Math.round(new Date().getTime() / 1000);
    const exp = config.get('profile.expiresAt', 0);
    if (config.get('profile.expiresAt', 0) > ts) {
        logger('verbose', `Access token is fresh. Valid until ${new Date(exp * 1000).toISOString()}. Re-use.`);
        return config.get('profile.accessToken');
    }
    logger('verbose', `Access token is old. Expired at ${new Date(exp).toISOString()}. Refreshing.`);
    const openid_configuration = await request.get(`${API_URL}/.well-known/openid-configuration`).then(resp => resp.body);
    const refresh_token = exports.getRefreshToken();
    const body = await request.post(openid_configuration.token_endpoint).send({
        grant_type: 'refresh_token',
        refresh_token,
    }).then(resp => resp.body);
    const until = new Date(config.get('profile.expiresAt') * 1000).toISOString();
    logger('verbose', `Access token refreshed. Valid until ${until}.`);
    updateToken(body);
    return body.access_token;
};

exports.getToken = async (audience = 'api.hyperone.com') => {
    let access_token;
    if (args['passport-file']) {
        const passportFile = args['passport-file'];
        access_token = await getPassportToken(passportFile, audience);
        logger('verbose', `Used passport file '${passportFile}' to generate access token`);
    } else {
        access_token = await exports.getAccessToken();
    }
    if (args.as) {
        const body = await exports.delegate(args.as, access_token);
        logger('verbose', `Used delegate to switch actor to '${args.as}'`);
        return body.access_token;
    }
    return access_token;
};

