'use strict';

const Cli = require('lib/cli');

const genericDefaults = require('bin/generic/defaults');

module.exports = (resource) => Cli.createCommand('list', {
    dirname: __dirname,
    description: `List ${resource.title}`,
    plugins: genericDefaults.plugins,
    options: resource.options,
    resource: resource,
    handler: args => args.helpers.api
        .get(resource.url(args))
        .then(result => args.helpers.sendOutput(args, result)),
});
