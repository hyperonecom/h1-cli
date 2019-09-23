'use strict';

const Cli = require('lib/cli');

const options = {
    log: {
        description: 'ID of LogArchive',
        type: 'string',
        required: true,
    },
    password: {
        description: 'Credentials of type "password" to access logArchive',
        type: 'string',
        required: true,
    },
    mode: {
        choices: ['basic', 'full'],
        description: 'Logging mode (determines the scope of registered information)',
        type: 'string',
        defaultValue: 'full',
    },
};

module.exports = resource => Cli.createCommand('enable', {
    description: `Enable ${resource.title}`,
    dirname: __dirname,
    plugins: [
        require('bin/_plugins/loginRequired'),
        require('bin/_plugins/api'),
        require('bin/_plugins/outputFormat'),
    ],
    options: { ...resource.options, ...options},
    handler: args => args.helpers.api
        .put(resource.url(args), {
            logArchive: args.log,
            password: args.password,
            mode: args.mode,
        }).then(result => args.helpers.sendOutput(args, result)),
});
