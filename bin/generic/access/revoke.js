'use strict';

const Cli = require('structured-cli');

const options = {
    tenant: {
        description: 'Tenant name or ID'
        , type: 'string'
        , required: true
    }
};

const params = {
    id: {
        description: 'Resource id'
        , type: 'string'
        , required: true
    }
};


module.exports = function(resource) {

    return Cli.createCommand('revoke', {
        description: `Revoke access rights for ${resource.name.toUpperCase()}`
        , plugins: [
            require('bin/_plugins/loginRequired')
            , require('bin/_plugins/tenantRequired')
            , require('bin/_plugins/outputFormat')
            , require('bin/_plugins/api')
        ]
        , params: params
        , options: options
        , handler: handleAccessGrant(resource)
    });
};

function handleAccessGrant(resource) {
    return function(args) {
        return args.helpers.api.delete(`${resource.name}/${args.id}/accessrights/${args['tenant-id']}`)
        .then(result => args.helpers.sendOutput(args, result));
    };
};
