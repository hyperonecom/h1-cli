'use strict';
const logger = require('./logger');
const superagent = require('superagent');
const config = require('./config');
const os = require('os');

const info = require('../package.json');
const userAgent = `${info.name}/${info.version} for ${config.scope()} (${os.type()} ${os.release()}; ${process.platform}; ${process.arch}) node/${process.versions.node}`;

const request = superagent.agent()
    .on('request', (req) => {
        logger('verbose', `request ${req.req.method} ${req.url}`);
        logger('verbose', 'request headers', JSON.stringify(req.header, null, 2));
    })
    .on('response', (res) => {
        logger('verbose', 'response status', res.status);
        logger('verbose', 'response headers', JSON.stringify(res.headers, null, 2));
    })
    .set('User-Agent', userAgent);

module.exports = request;
