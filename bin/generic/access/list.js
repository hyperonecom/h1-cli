'use strict';

const Cli = require('structured-cli');
const genericDefaults = require('bin/generic/defaults');

const params = {
    id: {
        description: 'Resource name or ID',
        type: 'string',
        required: true
    }
};

module.exports = function(resource) {

    return Cli.createCommand('list', {
        description: `List of access rights for ${resource.name.toUpperCase()}`,
        plugins: genericDefaults.plugins,
        params: params,
        handler: handleAccessList(resource)
    });
};

function handleAccessList(resource) {

    return function(args) {

        return args.helpers.api.get(`${resource.url(args)}/${args.id}/accessrights`)
        .then(result => args.helpers.sendOutput(args, result));
    };
};
