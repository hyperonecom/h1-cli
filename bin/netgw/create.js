'use strict';

const Cli = require('structured-cli');
const genericDefaults = require('bin/generic/defaults');

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
  , plugins: genericDefaults.plugins
  , options: options
  , handler: handler
});

function handler(args) {
    return args.helpers.api
        .post('netgw', { name: args.name, public: { ip: args.ip } })
        .then(result => args.helpers.sendOutput(args, result))
    ;
}
