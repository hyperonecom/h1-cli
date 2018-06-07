'use strict';

const Cli = require('structured-cli');

const options = {
    method: {
        description: 'http method. eg: GET, POST..., ALL (to allow all methods)'
      , type: 'string'
      , required: true
    }
  , path: {
        description: 'url path, eg: /disk'
      , type: 'string'
      , required: true
    }
};

module.exports = resource => Cli.createCommand('add', {
    description: 'Add'
  , plugins: resource.plugins
  , params: resource.params
  , options: Object.assign(options, resource.options)
  , handler: args => args.helpers.api
        .post(resource.url(args), { method: args.method, path: args.path })
        .then(result => args.helpers.sendOutput(args, result))
});
