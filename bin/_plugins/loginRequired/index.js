'use strict';

const config = require('lib/config');
const Cli = require('lib/cli');
const logger = require('lib/logger');

const login = require('bin/login');

const api = require('../api');

module.exports = {
    onBeforeHandler: context => {
        const profile = config.get('profile', {});

        if (config.TOKEN) {
            console.debug('Skip log in. Using H1_TOKEN from environment variable');
            return;
        }

        if (profile.apiKey && profile.expires && new Date(profile.expires) > Date.now()) {
            context.args.profile = profile;
            context.args.apiKey = profile.apiKey;
            return;
        }

        // Hack to reuse login handler
        api.onBeforeHandler(context);

        const username = context.args.username;

        if (profile.user) {
            logger('info', 'Your authtoken has expired');
            context.args.username = profile.user;
        } else {
            throw Cli.error.cancelled('Please login first');
        }

        return login
            .handler(context.args)
            .then(() => context.args.username = username)
        ;
    },
};
