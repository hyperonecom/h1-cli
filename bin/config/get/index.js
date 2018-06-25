'use strict';

const Cli = require('lib/cli');
const config = require('lib/config');

module.exports = Cli.createCommand('get', {
    dirname: __dirname,
    description: 'Get config value',
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
    handler: args => {
        const defaults = config.get(`defaults.${args.key}`);
        return defaults || 'key not set';
    },
});
