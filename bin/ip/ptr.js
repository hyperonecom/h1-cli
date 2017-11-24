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
    value: {
        description: 'PTR record'
      , type: 'string'
      , required: true
    }
};

const handler = args => args.helpers.api
    .patch(`ip/${args.id}`, { ptrRecord: args.value })
    .then(result => args.helpers.sendOutput(args, result));

module.exports = Cli.createCommand('ptr', {
    description: 'IP disassociate'
  , plugins: [
        require('bin/_plugins/loginRequired')
      , require('bin/_plugins/tenantRequired')
      , require('bin/_plugins/outputFormat')
      , require('bin/_plugins/api')
    ]
  , options: options
  , params: params
  , handler: handler
});
