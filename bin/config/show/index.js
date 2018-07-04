'use strict';

const Cli = require('lib/cli');
const config = require('lib/config');

module.exports = Cli.createCommand('show', {
    dirname: __dirname,
    description: 'Show config',
    plugins: [
        require('bin/_plugins/outputFormat'),
    ],
    handler: () => config.get('defaults'),
});
