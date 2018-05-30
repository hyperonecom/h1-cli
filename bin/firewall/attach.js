'use strict';

const Cli = require('structured-cli');

const params = {
    id: {
        description: 'Resource identifier'
      , type: 'string'
      , required: true
    }
};

const options = {
    network: {
        description: 'Network name or ID'
      , type: 'string'
      , required: true
    }
};

const handler = args => args.helpers.api
    .post(`firewall/${args.id}/actions`, { name: 'attach', data: { network: args.network } })
    .then(result => args.helpers.sendOutput(args, result))
;

module.exports = resource => Cli.createCommand('attach', {
    description: 'Attach to a network'
  , plugins: resource.plugins
  , options: options
  , handler: handler
  , params: params
});
