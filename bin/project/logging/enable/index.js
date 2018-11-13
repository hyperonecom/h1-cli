'use strict';

const Cli = require('lib/cli');

const options = {
    logArchive: {
        description: 'ID of LogArchive',
        type: 'string',
        required: true,
    },
    password: {
        description: 'Credentials of type "password" to access logArchive',
        type: 'string',
        required: true,
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
    options: Object.assign({}, resource.options, options),
    handler: args => args.helpers.api
        .put(resource.url(args), {
            logArchive: args.logArchive,
            password: args.password,
        }).then(result => args.helpers.sendOutput(args, result)),
});
