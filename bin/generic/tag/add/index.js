'use strict';

const Cli = require('lib/cli');


module.exports = (resource) => Cli.createCommand('add', {
    description: `Add ${resource.title}`,
    plugins: resource.plugins,
    genericOptions: ['tag'],
    resource: resource,
    dirname: __dirname,
    options: resource.options,
    handler: args => args.helpers.api.patch(
        args.$node.parent.config.url(args),
        require('lib/tags').createTagObject(args.tag)
    )
        .then(result => Object.entries(result).map(([key, value]) => ({
            key, value,
        })))
        .then(result => args.helpers.sendOutput(args, result)),
});
