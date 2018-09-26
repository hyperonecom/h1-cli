'use strict';

const Cli = require('lib/cli');

const options = {
    tag: {
        description: 'Tag',
        type: 'string',
        required: true,
    },
};

module.exports = (resource, subresource) => Cli.createCommand('delete', {
    dirname: __dirname,
    description: `Delete a tag of ${resource.title}`,
    plugins: subresource.plugins,
    params: subresource.params,
    resource: resource,
    options: Object.assign({}, options, subresource.options),
    handler: args => args.helpers.api
        .delete(`${args.$node.parent.config.url(args)}/${args.tag.split('=')[0]}`)
        .then(result => args.helpers.sendOutput(args, result)),
});
