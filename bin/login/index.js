'use strict';

const Cli = require('lib/cli');

const logger = require('lib/logger');
const _ = require('lodash');
const inquirer = require('inquirer');

const options = {
    username: {
        description: 'Your h1 username'
        , type: 'string'
        , required: true
    },
    password: {
        description: 'Password'
      , type: 'string'
    }
};

const handler = args => {
    let p;

    if (args.password) {
        p = args.helpers.api.getApiKey(args.username, { password: args.password });
    } else {
        p = args.helpers.api.getApiKeySSH(args.username)
            .catch(err => {
                if (err.message.indexOf('host fingerprint verification failed') > -1) {
                    throw Cli.error.serverError(err.message);
                }

                return inquirer.prompt({
                    type: 'password'
                  , name: 'value'
                  , message: 'Password:'
                  , validate: input => _.isEmpty(input) ? 'Incorrect password' : true
                })
                .then(password => args.helpers.api.getApiKey(args.username, { password: password.value }));
            });
    }

    return p
        .then(() => logger('info', 'You successfully logged and stored your apiKey in config file'))
        .catch(e => {
            if (e.status === 404 || e.status === 401) {
                return logger('error', `Your login or password is incorrect (${e.status})`);
            }
            throw e;
        });
};

module.exports = Cli.createCommand('login', {
    dirname: __dirname
  , description: 'Obtain your apiKey'
  , plugins: [
        require('../_plugins/api')
      , require('../_plugins/interactiveOptions')
    ]
  , options: options
  , handler: handler
});
