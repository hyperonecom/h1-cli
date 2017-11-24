'use strict';

const Cli = require('structured-cli');

const params = {
    id: {
        description: 'NetGW id'
      , type: 'string'
      , required: true
    }
};

const options = {
    network: {
        description: 'network id'
      , type: 'string'
      , required: true
    }
};

module.exports = Cli.createCommand('attach', {
    description: 'NetGW attach to a network'
  , plugins: [
        require('bin/_plugins/loginRequired')
      , require('bin/_plugins/tenantRequired')
      , require('bin/_plugins/outputFormat')
      , require('bin/_plugins/api')
    ]
  , options: options
  , handler: handler
  , params: params
});

function handler(args) {
    return args.helpers.api
        .post(`netgw/${args.id}/actions`, { name: 'attach', data: { private: { network: args.network } } })
        .then(result => args.helpers.sendOutput(args, result))
    ;
}
