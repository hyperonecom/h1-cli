'use strict';

const Cli = require('lib/cli');
const complete = require('lib/complete');

module.exports = Cli.createCommand('init', {
    dirname: __dirname,
    description: 'Update shell configuration to support autocomplete',
    plugins: [
        require('bin/_plugins/outputFormat'),
    ],
    handler: args => {
        complete.autocomplete(Cli.root(args)).setupShellInitFile();
        return 'autocomplete set';
    },
});
