'use strict';

const Cli = require('structured-cli');

const options = {
    network: {
        description: 'Network connected to network adapter'
        , type: 'string'
        , required: false
    }
    , type: {
        description: 'Type of network adapter'
        , type: 'string'
        , required: true
    }
    , ip: {
        description: 'IP to assign from network'
        , type: 'string'
    }
    , vm: {
        description: 'VM name or ID'
        , type: 'string'
        , required: true
    }
};


module.exports = function(resource) {
    return Cli.createCommand('create', {
        description: 'Network Adapter create'
        , plugins: resource.plugins
        , options: options
        , handler: handleResourceCreate(resource)
    });
};

function handleResourceCreate(resource) {

    return function(args) {

        const body = {
            type: args.type
        };

        if (args.network) {
            body.network = args.network;
        }

        if (args.ip) {
            body.ip = args.ip;
        }

        return args.helpers.api.post(resource.url(args), body)
        .then(result => args.helpers.sendOutput(args, result));

    };
};
