'use strict';

const Cli = require('structured-cli');
const defaults = require('bin/generic/defaults');

module.exports = resource => Cli.createCommand('list', {
    description: 'List'
  , plugins: defaults.plugins
  , params: resource.params
  , handler: args => args.helpers.api
        .get(resource.url(args))
        .then(result => result.services.filter(s => s.type === 'reservation'))
        .then(result => args.helpers.sendOutput(args, result))
});
