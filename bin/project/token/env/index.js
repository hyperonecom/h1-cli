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
};

module.exports = resource => Cli.createCommand('env', {
    description: 'Get environment variables to manage project by service account',
    plugins: defaults.plugins,
    dirname: __dirname,
    params: resource.params,
    options: Object.assign({}, resource.options, options),
    handler: args => args.helpers.api
        .get(resource.url(args))
        .then(token => {
            let shellView = shell.set_environment[args.shell];
            if (!shellView) {
                console.error('Lines below are for a sh/bash shell, you can specify the shell with the --shell parameter.');
                shellView = shell.set_environment.sh;
            }
            return [
                shellView(`${process.env.SCOPE_FULL_NAME.toUpperCase()}_PROJECT`, args.project),
                shellView(`${process.env.SCOPE_FULL_NAME.toUpperCase()}_ACCESS_TOKEN_ID`, token._id),
                shellView(`${process.env.SCOPE_FULL_NAME.toUpperCase()}_ACCESS_TOKEN_SECRET`, token.secret || token._id),
            ].join('\n');
        }),
});
