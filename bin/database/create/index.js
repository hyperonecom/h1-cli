'use strict';

const Cli = require('lib/cli');

const options = {
    name: {
        description: 'Database name',
        type: 'string',
        required: true,
    },
    type: {
        description: 'Type',
        type: 'string',
        required: true,
    },
};

module.exports = resource => Cli.createCommand('create', {
    description: `Create ${resource.title}`,
    plugins: resource.plugins,
    genericOptions: ['tag', 'password'],
    dirname: __dirname,
    priority: 25,
    options: Object.assign({}, options, resource.options),
    handler: async args => {
        const body = {
            name: args.name,
            service: args.type,
            tag: require('lib/tags').createTagObject(args.tag),
            credential: await require('lib/credentials').getCredentialCreate(args),
        };

        return args.helpers.api
            .post(resource.url(args), body)
            .then(result => args.helpers.sendOutput(args, result));
    },
});
