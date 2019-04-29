'use strict';

const Cli = require('lib/cli');

const options = {
    name: {
        description: 'Website name',
        type: 'string',
        required: true,
    },
    type: {
        description: 'Type',
        type: 'string',
        required: true,
    },
    domain: {
        description: 'Domain name',
        type: 'string',
        append: [],
        action: 'append',
        required: true,
    },
    image: {
        description: 'Website Image',
        type: 'string',
        required: true,
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
            service: args.type,
            domain: args.domain,
            tag: require('lib/tags').createTagObject(args.tag),
            credential: await require('lib/credentials').getCredentialCreate(args),
            image: args.image,
        };

        return args.helpers.api
            .post(resource.url(args), body)
            .then(result => args.helpers.sendOutput(args, result));
    },
});
