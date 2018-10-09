'use strict';

const Cli = require('lib/cli');

const options = {
    name: {
        description: 'Name of image',
        type: 'string',
        required: true,
    },
    description: {
        description: 'Description of image',
        type: 'string',
    },
    vm: {
        description: 'Virtual machine name or ID',
        type: 'string',
    },
    replica: {
        description: 'Replica name or ID',
        type: 'string',
    },
};

module.exports = resource => Cli.createCommand('create', {
    description: `Create ${resource.title}`,
    genericOptions: ['tag'],
    dirname: __dirname,
    plugins: resource.plugins,
    options: options,
    handler: args => {
        const body = {
            name: args.name,
            description: args.description,
            tag: require('lib/tags').createTagObject(args.tag),
        };

        if (!args.vm && !args.replica) {
            throw Cli.error.cancelled('Providing either vm or replica is required.');
        }
        if (args.vm && args.replica) {
            throw Cli.error.cancelled('Providing either vm or replica is required.');
        }

        if (args.vm) {
            body.vm = args.vm;
        } else if (args.replica) {
            body.replica = args.replica;
        }

        return args.helpers.api
            .post('image', body)
            .then(result => args.helpers.sendOutput(args, result));
    },
});
