'use strict';

const Cli = require('lib/cli');
const complete = require('lib/complete');

module.exports = (resource) => {
    const options = {
        network: {
            description: 'ID or name of Network to connect',
            type: 'string',
            required: false,
        },
        type: {
            description: 'Network Adapter type or ID',
            type: 'string',
            required: true,
            complete: complete.completeService('netadp'),
        },
        ip: {
            description: 'IP address to assign',
            type: 'string',
        },
    };

    return Cli.createCommand('create', {
        description: `Create ${resource.title}`,
        plugins: resource.plugins,
        options: Object.assign({}, resource.options, options),
        genericOptions: ['tag'],
        dirname: __dirname,
        handler: (args) => {
            const body = {
                service: args.type,
                tag: require('lib/tags').createTagObject(args.tag),
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

