'use strict';

const Cli = require('lib/cli');
const complete = require('lib/complete');

module.exports = Cli.createCommand('remove', {
    dirname: __dirname,
    description: 'Update shell configuration to remove autocomplete',
    plugins: [
        require('bin/_plugins/outputFormat'),
    ],
    handler: () => {
        complete.cleanupShellInitFile();
        return 'autocomplete removed';
    },
});
