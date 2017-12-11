'use strict';

const Cli = require('structured-cli');

const options = {
    name: {
        description: 'Name'
      , type: 'string'
      , required: true
    }
  , type: {
        description: 'Type'
      , type: 'string'
      , required: true
    }
};

module.exports = resource => Cli.createCommand('create', {
    description: 'create'
  , plugins: resource.plugins
  , options: Object.assign({}, options, resource.options)
  , handler: args => args.helpers.api
        .post(resource.url(args), { name: args.name, service: args.type })
        .then(result => args.helpers.sendOutput(args, result))
});
