'use strict';

const Cli = require('lib/cli');

const auth = require('lib/auth');

const handler = async () => auth.introspection();

module.exports = Cli.createCommand('status', {
    dirname: __dirname,
    description: 'Provide information about current session',
    plugins: [
        require('bin/_plugins/api'),
    ],
    priority: 10,
    handler: handler,
});
