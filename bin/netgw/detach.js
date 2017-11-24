'use strict';

const Cli = require('structured-cli');

const params = {
    id: {
        description: 'NetGW id'
      , type: 'string'
      , required: true
    }
};

module.exports = Cli.createCommand('detach', {
    description: 'NetGW detach from network'
  , plugins: [
        require('bin/_plugins/loginRequired')
      , require('bin/_plugins/tenantRequired')
      , require('bin/_plugins/outputFormat')
      , require('bin/_plugins/api')
    ]
  , handler: handler
  , params: params
});

function handler(args) {
    return args.helpers.api
        .post(`netgw/${args.id}/actions`, { name: 'detach' })
        .then(result => args.helpers.sendOutput(args, result))
    ;
}
