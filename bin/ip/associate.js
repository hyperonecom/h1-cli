'use strict';

const Cli = require('structured-cli');
const genericDefaults = require('bin/generic/defaults');

const params = {
    id: {
        description: 'Public IP or ID or IP'
      , type: 'string'
      , required: true
    }
};

const options = {
    'private-ip': {
        description: 'ID of private IP'
      , type: 'string'
      , required: true
    }
};

module.exports = Cli.createCommand('associate', {
    description: 'IP associate'
  , plugins: genericDefaults.plugins
  , params: params
  , options: options
  , handler: handler
});

function handler(args) {
    return args.helpers.api
        .post(`ip/${args.id}/actions`, { name: 'associate', data: { ip: args['private-ip'] } })
        .then(result => args.helpers.sendOutput(args, result))
    ;
}
