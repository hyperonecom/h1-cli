'use strict';

const Cli = require('structured-cli');

const options = {
    name: {
        description: 'NetGW name'
      , type: 'string'
      , required: true
    }
  , ip: {
        description: 'Primary IP for the outgoing traffic'
      , type: 'string'
      , required: true
    }
};

module.exports = Cli.createCommand('create', {
    description: 'NetGW create'
  , plugins: [
        require('bin/_plugins/loginRequired')
      , require('bin/_plugins/tenantRequired')
      , require('bin/_plugins/outputFormat')
      , require('bin/_plugins/api')
    ]
  , options: options
  , handler: handler
});

function handler(args) {
    return args.helpers.api
        .post('netgw', { name: args.name, public: { ip: args.ip } })
        .then(result => args.helpers.sendOutput(args, result))
    ;
}
