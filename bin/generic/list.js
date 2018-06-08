'use strict';

const Cli = require('structured-cli');

module.exports = resource => Cli.createCommand('list', {
    description: `List ${resource.title}`
  , plugins: resource.plugins
  , options: resource.options
  , params: resource.params
  , handler: args => args.helpers.api
        .get(args.$node.parent.config.url(args))
        .then(result => args.helpers.sendOutput(args, result))
});
