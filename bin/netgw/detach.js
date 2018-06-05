'use strict';

const Cli = require('structured-cli');
const genericDefaults = require('bin/generic/defaults');

const params = {
    id: {
        description: 'NetGW id'
      , type: 'string'
      , required: true
    }
};

module.exports = Cli.createCommand('detach', {
    description: 'NetGW detach from network'
  , plugins: genericDefaults.plugins
  , handler: handler
  , params: params
});

function handler(args) {
    return args.helpers.api
        .post(`netgw/${args.id}/actions`, { name: 'detach' })
        .then(result => args.helpers.sendOutput(args, result))
    ;
}
