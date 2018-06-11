'use strict';

const Cli = require('structured-cli');
const genericDefaults = require('bin/generic/defaults');

const handler = (args) => args.helpers.api
    .post('ip', { })
    .then(result => args.helpers.sendOutput(args, result));

module.exports = resource => Cli.createCommand('create', {
    description: `Create ${resource.title}`
  , plugins: genericDefaults.plugins
  , handler: handler
});
