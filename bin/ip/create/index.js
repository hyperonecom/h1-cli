'use strict';

const Cli = require('lib/cli');
const genericDefaults = require('bin/generic/defaults');

const handler = (args) => args.helpers.api
    .post('ip', { })
    .then(result => args.helpers.sendOutput(args, result));

module.exports = resource => Cli.createCommand('create', {
    dirname: __dirname
  , description: `Create ${resource.title}`
  , plugins: genericDefaults.plugins
  , handler: handler
});
