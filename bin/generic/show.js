'use strict';

const Cli = require('structured-cli');

const params = {
    id: {
        description: 'Resource identifier'
      , type: 'string'
      , required: true
    }
};

module.exports = resource => Cli.createCommand('show', {
    description: 'Resource show'
  , plugins: resource.plugins
  , params: params
  , options: resource.options
  , handler: args => args.helpers.api
        .get(`${resource.url(args)}/${args.id}`)
        .then(result => args.helpers.sendOutput(args, result))
});
