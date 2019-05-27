'use strict';
const process = require('process');
const Cli = require('lib/cli');
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

module.exports = resource => Cli.createCommand('env', {
    description: 'Get environment variables to manage project by service account',
    plugins: defaults.plugins,
    dirname: __dirname,
    params: resource.params,
    options: Object.assign({}, resource.options, options),
    handler: args => args.helpers.api.get(resource.url(args))
        .then(token => {
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
                shellView(`${process.env.SCOPE_FULL_NAME.toUpperCase()}_PROJECT`, args.project),
                shellView(`${process.env.SCOPE_FULL_NAME.toUpperCase()}_ACCESS_TOKEN_ID`, token._id),
                shellView(`${process.env.SCOPE_FULL_NAME.toUpperCase()}_ACCESS_TOKEN_SECRET`, token.secret || token._id),
            ].join('\n');
        }),
});
