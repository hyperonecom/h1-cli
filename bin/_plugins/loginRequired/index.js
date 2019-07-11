'use strict';

const config = require('lib/config');
const Cli = require('lib/cli');
const api = require('lib/api');
const logger = require('lib/logger');

const login = require('bin/login');

const apiPlugin = require('../api');

module.exports = {
    onBeforeHandler: context => {
        const profile = config.get('profile', {});

        if (config.getTokenEnv()) {
            api.setToken(config.getTokenEnv());
            console.error(`Skip log in. Using ${config.scope()}_ACCESS_TOKEN_SECRET from environment variable`);
            return;
        } else if (profile.apiKey && profile.expires && new Date(profile.expires) > Date.now()) {
            api.setToken(profile.apiKey);
            context.args.profile = profile;
            return;
        }
        // Hack to reuse login handler
        apiPlugin.onBeforeHandler(context);

        const username = context.args.username;

        if (profile.user) {
            logger('info', 'Your authtoken has expired');
            context.args.username = profile.user;
        } else {
            throw Cli.error.cancelled('Please login first');
        }

        return login
            .handler(context.args)
            .then(() => context.args.username = username);
    },
};
