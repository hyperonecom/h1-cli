'use strict';

const Cli = require('lib/cli');

const options = {
    network: {
        description: 'Network connected to network adapter',
        type: 'string',
        required: false,
    },
    type: {
        description: 'Type of network adapter',
        type: 'string',
        required: true,
    },
    ip: {
        description: 'IP to assign from network',
        type: 'string',
    },
    vm: {
        description: 'Virtual machine name or ID',
        type: 'string',
        required: true,
    },
};

module.exports = (resource) => {
    return Cli.createCommand('create', {
        description: `Create ${resource.title}`,
        plugins: resource.plugins,
        options: options,
        dirname: __dirname,
        handler: (args) => {
            const body = {
                type: args.type,
            };
            if (args.network) {
                body.network = args.network;
            }
            if (args.ip) {
                body.ip = args.ip;
            }
            return args.helpers.api.post(resource.url(args), body)
                .then(result => args.helpers.sendOutput(args, result));
        },
    });
};

