'use strict';
const Cli = require('lib/cli');
const config = require('lib/config');

module.exports = Cli.createCommand('store', {
    description: 'Store credential as credential helper',
    dirname: __dirname,
    plugins: [
        require('bin/_plugins/api'),
    ],
    handler: () => {
        throw Cli.error.cancelled(`Operation unsupported. You no need to login when 'docker-credential-${config.scope().toLowerCase()}-login' in use.`);
    },
});
