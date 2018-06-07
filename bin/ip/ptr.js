'use strict';

const Cli = require('structured-cli');
const genericDefaults = require('bin/generic/defaults');

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
  , plugins: genericDefaults.plugins
  , options: options
  , params: params
  , handler: handler
});
