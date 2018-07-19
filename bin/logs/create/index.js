'use strict';

const Cli = require('lib/cli');

const options = {
    name: {
        description: 'Name of logs archive',
        type: 'string',
        required: true,
    },
    retention: {
        description: 'Data retention period (in days)',
        type: 'int',
        required: true,
        defaultValue: 30,
    },
};

module.exports = resource => Cli.createCommand('create', {
    description: `Create ${resource.title}`,
    dirname: __dirname,
    plugins: resource.plugins,
    options: options,
    handler: args => args.helpers.api
        .post(resource.url(), {
            name: args.name,
            retention: args.retention,
        })
        .then(result => args.helpers.sendOutput(args, result)),
});
