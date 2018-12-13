'use strict';

const Cli = require('lib/cli');

const logger = require('lib/logger');
const _ = require('lodash');
const interactive = require('lib/interactive');

const options = {
    username: {
        description: 'Your username',
        type: 'string',
        required: true,
    },
    password: {
        description: 'Password',
        type: 'string',
    },
};

const handler = async args => {
    let p;

    if (args.password) {
        p = args.helpers.api.getApiKey(args.username, { password: args.password });
    } else {
        p = args.helpers.api.getApiKeySSH(args.username)
            .catch(err => {
                if (err.message.includes('host fingerprint verification failed')) {
                    throw Cli.error.serverError(err.message);
                }

                return interactive.prompt('Password', {
                    type: 'password',
                    name: 'value',
                    validate: input => _.isEmpty(input) ? 'Incorrect password' : true,
                })
                    .then(password => args.helpers.api.getApiKey(args.username, { password: password.value }));
            });
    }

    return p
        .then(async () => {
            return logger('info', 'You successfully logged and stored your session identifier in config file');
        }).catch(e => {
            if (e.status === 404 || e.status === 401) {
                return logger('error', `Your login or password is incorrect (${e.status})`);
            }
            throw e;
        });
};

module.exports = Cli.createCommand('login', {
    dirname: __dirname,
    description: 'Obtain your apiKey',
    plugins: [
        require('../_plugins/api'),
    ],
    priority: 10,
    options: options,
    handler: handler,
});
