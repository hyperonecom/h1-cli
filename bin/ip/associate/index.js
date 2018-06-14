'use strict';

const Cli = require('lib/cli');
const genericDefaults = require('bin/generic/defaults');

const options = {
    ip: {
        description: 'Public IP or ID of IP'
        , type: 'string'
        , required: true
    },
    'private-ip': {
        description: 'ID of private IP'
      , type: 'string'
      , required: true
    }
};

const handler = args => args.helpers.api
    .post(`ip/${args.ip}/actions`, { name: 'associate', data: { ip: args['private-ip'] } })
    .then(result => args.helpers.sendOutput(args, result));


module.exports = resource => Cli.createCommand('associate', {
    dirname: __dirname
  , description: `Associate ${resource.title}`
  , plugins: genericDefaults.plugins
  , defaultQuery: resource.defaultQuery
  , options: Object.assign({}, resource.options, options)
  , handler: handler
});
