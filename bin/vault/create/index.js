'use strict';

const Cli = require('lib/cli');

const options = {
    name: {
        description: 'Vault name',
        type: 'string',
        required: true,
    },
    size: {
        description: 'Vault size in GB',
        type: 'float',
        required: true,
    },
    snapshot: {
        description: 'Snapshot ID or name',
        type: 'string',
        required: false,
    },
};

module.exports = resource => Cli.createCommand('create', {
    description: `Create ${resource.title}`,
    plugins: resource.plugins,
    genericOptions: ['tag', 'password_ssh'],
    dirname: __dirname,
    priority: 25,
    options: Object.assign({}, options, resource.options),
    handler: async args => {

        const body = {
            name: args.name,
            size: args.size,
            tag: require('lib/tags').createTagObject(args.tag),
            credential: await require('lib/credentials').getCredentialCreate(args),
        };

        if (args.snapshot) {
            body.snapshot = args.snapshot;
        }

        return args.helpers.api
            .post(resource.url(args), body)
            .then(result => args.helpers.sendOutput(args, result));
    },
});
