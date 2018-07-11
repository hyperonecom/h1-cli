'use strict';

const Cli = require('lib/cli');
const config = require('lib/config');

module.exports = Cli.createCommand('cli', {
    description: 'Set "cli" config value',
    plugins: [
        require('bin/_plugins/api'),
    ],
    handler: async args => {
        const cli_config = await args.helpers.api.get('/cli');
        config.set('cli', cli_config);
        return cli_config;
    },
    skipDocumentation: true,
});
