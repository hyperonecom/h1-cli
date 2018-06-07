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

module.exports = Cli.createCommand('disassociate', {
    description: 'IP disassociate'
  , plugins: genericDefaults.plugins
  , params: params
  , handler: handler
});

function handler(args) {
    return args.helpers.api
        .post(`ip/${args.id}/actions`, { name: 'disassociate' })
        .then(result => args.helpers.sendOutput(args, result))
    ;
}
