'use strict';

const Cli = require('structured-cli');

const params = {
    id: {
        description: 'IP id'
      , type: 'string'
      , required: true
    }
};

module.exports = Cli.createCommand('disassociate', {
    description: 'IP disassociate'
  , plugins: [
        require('bin/_plugins/loginRequired')
      , require('bin/_plugins/tenantRequired')
      , require('bin/_plugins/outputFormat')
      , require('bin/_plugins/api')
    ]
  , params: params
  , handler: handler
});

function handler(args) {
    return args.helpers.api
        .post(`ip/${args.id}/actions`, { name: 'disassociate' })
        .then(result => args.helpers.sendOutput(args, result))
    ;
}
