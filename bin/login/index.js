'use strict';

const Cli = require('lib/cli');

// const logger = require('lib/logger');
// const interactive = require('lib/interactive');
const config = require('lib/config');

// const active_user = config.get_active_user();

const options = {
    username: {
        description: 'Username',
        type: 'string',
        required: true,
    },
    'cert-id': {
        description: 'Certificate ID',
        type: 'string',
        required: true,
    },
    'cert-path': {
        description: 'Auth-key path',
        type: 'string',
        required: true,
    },
};

const handler = async args => {
    const identity = `/iam/user/${args.username}`;
    config.set('auth.identity', identity);
    config.set('auth.credential.id', args['cert-id']);
    const path = require('path').resolve(args['cert-path']);
    config.set('auth.credential.path', path);
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
