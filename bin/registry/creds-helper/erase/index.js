'use strict';
const Cli = require('lib/cli');

module.exports = Cli.createCommand('erase', {
    description: 'Erase credential as credential helper',
    dirname: __dirname,
    handler: () => {
        console.log('Operation unsupported. Not apply to credential helper.');
    },
});
