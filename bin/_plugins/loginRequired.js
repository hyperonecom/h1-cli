'use strict';

const config = require('lib/config');
const logger = require('lib/logger');

const login = require('bin/login');

const api = require('./api');

module.exports = {
    onBeforeHandler: context => {
        const profile = config.get('profile', {});

        if (profile.apiKey && profile.expires && new Date(profile.expires) > Date.now()) {
            context.args.profile = profile;
            context.args.apiKey = profile.apiKey;
            return;
        }

        // Hack to reuse login handler
        api.onBeforeHandler(context);

        const username = context.args.username;

        if (profile.user) {
            logger('info', `Your authtoken expired, trying to login using ssh "${profile.user}"`);
            context.args.username = profile.user;
        } else {
            logger('info', 'Please login first');
            process.exit(-1);
        }

        return login
            .handler(context.args)
            .then(() => context.args.username = username)
        ;
    }
};
