'use strict';

const Cli = require('lib/cli');
const config = require('lib/config');

module.exports = Cli.createCommand('unset', {
    dirname: __dirname,
    description: 'Unset config key',
    options: {
        key: {
            description: 'Name of config key',
            type: 'string',
            required: true,
        },
    },
    plugins: [
        require('bin/_plugins/outputFormat'),
    ],
    handler: args => config.unset(`defaults.${args.key}`),
});
