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
      , type: 'int'
      , required: true
    }
};

module.exports = resource => Cli.createCommand('create', {
    description: 'Vault create'
  , plugins: resource.plugins
  , options: Object.assign({}, options, resource.options)
  , handler: args => args.helpers.api
        .post(resource.url(args), { name: args.name, size: args.size })
        .then(result => args.helpers.sendOutput(args, result))
});
