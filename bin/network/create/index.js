'use strict';

const Cli = require('lib/cli');
const genericDefaults = require('bin/generic/defaults');

const options = {
    name: {
        description: 'Name',
        type: 'string',
        required: true,
    },
    address: {
        description: 'Network address space as CIDR, network address and prefix eg. 10.214.180.0/24',
        type: 'string',
        required: false,
    },
    gateway: {
        description: 'IP address of network gateway within the network address space eg. 10.214.180.10',
        type: 'string',
        required: false,
    },
};


module.exports = resource => Cli.createCommand('create', {
    description: `Create ${resource.title}`,
    dirname: __dirname,
    genericOptions: ['tag'],
    plugins: genericDefaults.plugins,
    options: options,
    handler: (args) => {
        const network = {
            name: args.name,
            tag: require('lib/tags').createTagObject(args.tag),
        };

        if (args.gateway && !args.address) {
            throw Cli.error.cancelled('IP address of network gateway must be within the network address space');
        }

        if (args.address) {
            network.address = args.address;
        }

        if (args.gateway) {
            network.gateway = args.gateway;
        }

        return args.helpers.api
            .post('network', network)
            .then(result => args.helpers.sendOutput(args, result));
    },
});

