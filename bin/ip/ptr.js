'use strict';

const Cli = require('structured-cli');
const genericDefaults = require('bin/generic/defaults');

const options = {
    ip: {
        description: 'IP address or ID'
        , type: 'string'
        , required: true
    },
    value: {
        description: 'PTR record'
      , type: 'string'
      , required: true
    }
};

const handler = args => args.helpers.api
    .patch(`ip/${args.id}`, { ptrRecord: args.value })
    .then(result => args.helpers.sendOutput(args, result));

module.exports = resource => Cli.createCommand('ptr', {
    description: 'IP disassociate'
  , plugins: genericDefaults.plugins
  , options: Object.assign({}, resource.options, options)
  , params: resource.params
  , handler: handler
});
