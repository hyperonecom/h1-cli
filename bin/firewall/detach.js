'use strict';

const Cli = require('structured-cli');

const params = {
    id: {
        description: 'Resource identifier'
      , type: 'string'
      , required: true
    }
};

const handler = args => args.helpers.api
    .post(`firewall/${args.id}/actions`, { name: 'detach' })
    .then(result => args.helpers.sendOutput(args, result))
;

module.exports = resource => Cli.createCommand('detach', {
    description: 'Detach from network'
  , plugins: resource.plugins
  , handler: handler
  , params: params
});
