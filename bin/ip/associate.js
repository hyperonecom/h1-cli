'use strict';

const Cli = require('structured-cli');

const params = {
    id: {
        description: 'IP id'
      , type: 'string'
      , required: true
    }
};

const options = {
    'private-ip': {
        description: 'pivate IP id'
      , type: 'string'
      , required: true
    }
};

module.exports = Cli.createCommand('associate', {
    description: 'IP associate'
  , plugins: [
        require('bin/_plugins/loginRequired')
      , require('bin/_plugins/tenantRequired')
      , require('bin/_plugins/outputFormat')
      , require('bin/_plugins/api')
    ]
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
