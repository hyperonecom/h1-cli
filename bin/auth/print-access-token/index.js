'use strict';

const Cli = require('lib/cli');

const auth = require('lib/auth');

const options = {
    audience: {
        description: 'Token audience',
        type: 'string',
    },
};

module.exports = Cli.createCommand('print-access-token', {
    dirname: __dirname,
    description: 'Provide token of current session',
    plugins: [
        require('bin/_plugins/api'),
    ],
    options,
    priority: 10,
    handler: async (args) => auth.getToken(args.audience),
});
