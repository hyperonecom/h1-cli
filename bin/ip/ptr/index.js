'use strict';

const Cli = require('lib/cli');
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
    .patch(`ip/${args.ip}`, { ptrRecord: args.value })
    .then(result => args.helpers.sendOutput(args, result));

module.exports = resource => Cli.createCommand('ptr', {
    dirname: __dirname
  , description: `Update PTR record of ${resource.title}`
  , plugins: genericDefaults.plugins
  , options: Object.assign({}, resource.options, options)
  , params: resource.params
  , handler: handler
});
