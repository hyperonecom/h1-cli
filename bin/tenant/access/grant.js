'use strict';

const Cli = require('structured-cli');

const options = {
    identity: {
        description: 'Identity (eg: user@example.org)'
        , type: 'string'
        , required: true
    }
    , role: {
        description: 'Role'
        , type: 'string'
        , choices: ['owner', 'billing', 'user']
        , defaultValue: 'user'
    }
};

module.exports = resource => Cli.createCommand('grant', {
    description: `Grant access rights for ${resource.name.toUpperCase()}`
    , plugins: [
        require('bin/_plugins/loginRequired')
        , require('bin/_plugins/tenantRequired')
        , require('bin/_plugins/outputFormat')
        , require('bin/_plugins/api')
    ]
    , params: resource.params
    , options: options
    , handler: args => {
        const data = {
            id: args.identity
          , role: args.role
        };
        return args.helpers.api
            .post(`${resource.url(args)}/accessrights`, data)
            .then(result => args.helpers.sendOutput(args, result))
        ;
    }
});
