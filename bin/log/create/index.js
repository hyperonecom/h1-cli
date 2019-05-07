'use strict';

const Cli = require('lib/cli');

const options = {
    name: {
        description: 'Name of log archive',
        type: 'string',
        required: true,
    },
    // retention: {
    //     description: 'Data retention period (in days)',
    //     type: 'int',
    //     required: true,
    //     defaultValue: 30,
    // },
};

module.exports = resource => Cli.createCommand('create', {
    description: `Create ${resource.title}`,
    genericOptions: ['tag', 'password'],
    dirname: __dirname,
    plugins: resource.plugins,
    options: options,
    priority: 25,
    handler: async args => args.helpers.api
        .post(resource.url(args), {
            name: args.name,
            // retention: args.retention,
            credential: await require('lib/credentials').getCredentialCreate(args),
            retention: 30,
            tag: require('lib/tags').createTagObject(args.tag),
        })
        .then(result => args.helpers.sendOutput(args, result)),
});
