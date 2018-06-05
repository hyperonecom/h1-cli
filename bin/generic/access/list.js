'use strict';

const Cli = require('structured-cli');

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
        plugins: [
            require('bin/_plugins/loginRequired'),
            require('bin/_plugins/tenantRequired'),
            require('bin/_plugins/outputFormat'),
            require('bin/_plugins/api')
        ],
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
