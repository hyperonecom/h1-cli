'use strict';

const Cli = require('structured-cli');
const genericDefaults = require('bin/generic/defaults');

const options = {
    project: {
        description: 'Project name or ID',
        type: 'string',
        required: true
    }
};

const params = {
    id: {
        description: 'Resource id',
        type: 'string',
        required: true
    }
};


module.exports = function(resource) {

    return Cli.createCommand('revoke', {
        description: `Revoke access rights for ${resource.name.toUpperCase()}`,
        plugins: genericDefaults.plugins,
        params: params,
        options: options,
        handler: handleAccessGrant(resource)
    });
};

function handleAccessGrant(resource) {
    return function(args) {
        return args.helpers.api.delete(`${resource.name}/${args.id}/accessrights/${args.project}`)
        .then(result => args.helpers.sendOutput(args, result));
    };
}
