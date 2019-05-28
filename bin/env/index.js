'use strict';
const process = require('process');
const Cli = require('lib/cli');
const config = require('lib/config');
const defaults = require('bin/generic/defaults');
const shell = require('lib/shell');

const options = {
    shell: {
        description: 'Shell type',
        type: 'string',
        defaultValue: shell.detect(),
        choices: Object.keys(shell.set_environment),
    },
    unset: {
        description: 'Reverses operations of setting environment variables',
        type: 'boolean',
        defaultValue: false,
    },
};

module.exports = Cli.createCommand('env', {
    description: 'Get environment variables to manage project as user',
    plugins: [
        ...defaults.plugins,
        require('bin/_plugins/projectRequired'),
    ],
    dirname: __dirname,
    options,
    handler: args => {
        if (!args.shell || !shell.set_environment[args.shell]) {
            console.error('Lines below are for a sh shell, you can specify the shell with the --shell parameter.');
            args.shell = 'sh';
        }
        let shellView = shell.set_environment[args.shell];
        if (args.unset) {
            shellView = shell.unset_environment[args.shell];
        }
        console.error(`Run this command to configure your shell:\n${shell.run_command[args.shell](process.argv)}\n\n`);
        return [
            shellView(`${process.env.SCOPE_FULL_NAME.toUpperCase()}_PROJECT`, config.get('profile.project._id')),
            shellView(`${process.env.SCOPE_FULL_NAME.toUpperCase()}_ACCESS_TOKEN_ID`, config.get('profile.apiKey')),
            shellView(`${process.env.SCOPE_FULL_NAME.toUpperCase()}_ACCESS_TOKEN_SECRET`, config.get('profile.apiKey')),
        ].join('\n');
    },
});
