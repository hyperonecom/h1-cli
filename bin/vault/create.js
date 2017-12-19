'use strict';

const Cli = require('structured-cli');

const options = {
    name: {
        description: 'Vault Name'
      , type: 'string'
      , required: true
    }
  , size: {
        description: 'Vault Size in GB'
      , type: 'float'
      , required: true
    }
  , cert: {
        description: 'SSH key Id'
      , type: 'string'
      , required: false
    }
};

module.exports = resource => Cli.createCommand('create', {
    description: 'Vault create'
  , plugins: resource.plugins
  , options: Object.assign({}, options, resource.options)
  , handler: args => {
        const body = {
            name: args.name
          , size: args.size
        };

        if (args.cert) {
            body.credential = {
                certificate: [{
                    name: 'cert'
                  , type: 'ssh'
                  , value: args.cert
                }]
            };
        }

        return args.helpers.api
            .post(resource.url(args), body)
            .then(result => args.helpers.sendOutput(args, result));
    }
});
