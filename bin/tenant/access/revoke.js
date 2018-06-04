'use strict';

const Cli = require('structured-cli');

const options = {
    identity: {
        description: 'Identity (eg: user@example.org)'
        ,type: 'string'
        ,required: true
    }
};

module.exports = resource => Cli.createCommand('revoke', {
    description: `Revoke access rights for ${resource.name.toUpperCase()}`
    ,plugins: [
        require('bin/_plugins/loginRequired')
        ,require('bin/_plugins/tenantRequired')
        ,require('bin/_plugins/outputFormat')
        ,require('bin/_plugins/api')
    ]
    ,params: resource.params
    ,options: options
    ,handler: args => args.helpers.api
        .delete(`${resource.url(args)}/accessrights/${args['tenant-id']}`)
        .then(result => args.helpers.sendOutput(args, result))
});

