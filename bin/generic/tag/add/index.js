'use strict';

const Cli = require('lib/cli');

const options = {
    tag: {
        description: 'Key=value of tag',
        type: 'string',
        action: 'append',
        required: true,
    },
};

module.exports = (resource, subresource) => Cli.createCommand('add', {
    description: `Add a tag to ${resource.title}`,
    plugins: subresource.plugins,
    params: subresource.params,
    genericOptions: ['tag'],
    dirname: __dirname,
    options: Object.assign({}, subresource.options, options),
    handler: args => args.helpers.api
        .patch(
            args.$node.parent.config.url(args),
            require('lib/tags').createTagObject(args.tag)
        )
        .then(result => args.helpers.sendOutput(args, result)),
    resource: resource,
});
