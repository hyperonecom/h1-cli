'use strict';

const Cli = require('structured-cli');

module.exports = resource => Cli.createCommand('create', {
    description: 'IP create'
  , plugins: resource.plugins
  , options: resource.options
  , handler: handler
});

function handler(args) {
    return args.helpers.api
        .post(`network/${args['network-id']}/ip`, { })
        .then(result => args.helpers.sendOutput(args, result))
    ;
}
