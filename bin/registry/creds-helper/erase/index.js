'use strict';
const Cli = require('lib/cli');

module.exports = Cli.createCommand('erase', {
    description: 'Erase credential as credential helper',
    dirname: __dirname,
    plugins: [
        require('bin/_plugins/api'),
    ],
    handler: () => {
        Cli.error.cancelled('Operation unsupported. Not apply to credential helper.');
    },
});
