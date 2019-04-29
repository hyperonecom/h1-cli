'use strict';

const Cli = require('lib/cli');

const options = {
    name: {
        description: 'Agent name',
        type: 'string',
        required: true,
    },
    type: {
        description: 'Agent type name or ID',
        type: 'string',
        required: true,
    },
    ssh: {
        description: 'SSH key ID or name that allows access',
        type: 'string',
        required: false,
        action: 'append',
        defaultValue: [],
    },
    'ssh-file': {
        action: 'append',
        description: 'Read SSH key from file',
        type: 'string',
        defaultValue: [],
    },
};


module.exports = resource => Cli.createCommand('create', {
    description: `Create ${resource.title}`,
    plugins: resource.plugins,
    genericOptions: ['tag', 'ssh'],
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
