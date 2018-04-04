'use strict';

const Cli = require('structured-cli');

const params = {
    'ip-id': {
        description: 'IP id'
      , type: 'string'
      , required: true
    }
};

module.exports = resource => Cli.createCommand('add', {
    description: 'Add IP'
  , plugins: resource.plugins
  , options: resource.options
  , params: params
  , handler: args => args.helpers.api
        .post(resource.url(args), { ip: args['ip-id'] })
        .then(result => args.helpers.sendOutput(args, result))
});
