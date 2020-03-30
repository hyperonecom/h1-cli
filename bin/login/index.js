'use strict';

const Cli = require('lib/cli');

// const logger = require('lib/logger');
const interactive = require('lib/interactive');
const config = require('lib/config');
const auth = require('lib/auth');

const active_user = config.get_active_user();

const options = {
    username: {
        description: 'Username',
        type: 'string',
    },
    password: {
        description: 'Username',
        type: 'string',
    },
};

const handler = async args => {
    // const identity = `/iam/user/${args.username}`;
    if (!args.username && active_user && active_user.id) {
        args.username = active_user.id;
    } else if (!args.username) {
        args.username = await interactive.prompt('Username', {
            type: 'text',
            name: 'value',
            validate: input => input.length === 0 ? 'Missing username' : true,
        }).then(x => x.value);
    }
    if (!args.password) {
        args.password = await interactive.prompt('Password', {
            type: 'password',
            name: 'value',
            validate: input => input.length === 0 ? 'Incorrect password' : true,
        }).then(x => x.value);
    }
    await auth.login(args.username, args.password);
    const result = await auth.introspection();
    if (result.active) {
        console.log('Successfully logged in. Access data saved.');
        console.log('Use \'logout\' command to remove access data');
    }
    return result;
    // config.set('auth.identity', identity);
    // config.set('auth.credential.id', args['cert-id']);
    // const path = require('path').resolve(args['cert-path']);
    // config.set('auth.credential.path', path);
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
