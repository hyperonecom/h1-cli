'use strict';

const Cli = require('structured-cli');

module.exports = (table, resource) => Cli.createCommand('list', {
    description: 'List'
  , plugins: resource.plugins
  , params: resource.params
  , options: resource.options
  , handler: args => args.helpers.api
        .get(`firewall/${args.id}/${table}`)
        .then(result => args.helpers.sendOutput(args, result.sort((r1, r2) => r1.priority - r2.priority)))
});
