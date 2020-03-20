'use strict';

const Cli = require('lib/cli');

module.exports = (resource) => Cli.createCommand('list', {
    dirname: __dirname,
    description: `List ${resource.title}`,
    plugins: resource.plugins,
    options: resource.options,
    resource: resource,
    handler: args => args.helpers.api
        .get(resource.url(args))
        .then(result => args.helpers.sendOutput(args, result)),
});
