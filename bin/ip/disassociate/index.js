'use strict';

const Cli = require('lib/cli');
const genericDefaults = require('bin/generic/defaults');

const options = {
    ip: {
        description: 'Public IP or ID of IP'
      , type: 'string'
      , required: true
    }
};

const handler = (args) => args.helpers.api
    .post(`ip/${args.ip}/actions`, { name: 'disassociate' })
    .then(result => args.helpers.sendOutput(args, result));


module.exports = resource => Cli.createCommand('disassociate', {
        dirname: __dirname
        , description: `Disassociate ${resource.title}`
        , plugins: genericDefaults.plugins
        , options: Object.assign({}, resource.options, options)
        , handler: handler
    });
