'use strict';

const Cli = require('lib/cli');

module.exports = resource => Cli.createCommand('list', {
    description: `List ${resource.title}`,
    dirname: __dirname,
    resource: resource,
    handler: args => args.helpers.api
        .get(resource.url(args))
        .then(result => args.helpers.sendOutput(args, result)),
});
