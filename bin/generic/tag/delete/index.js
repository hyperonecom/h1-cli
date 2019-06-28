'use strict';

const Cli = require('lib/cli');


module.exports = (resource) => {
    const options = {
        tag: {
            description: 'Tag',
            type: 'string',
            required: true,
        },
    };

    return Cli.createCommand('delete', {
        dirname: __dirname,
        description: `Delete ${resource.title}`,
        plugins: resource.plugins,
        options: Object.assign({}, options, resource.options),
        resource: resource,
        handler: args => args.helpers.api
            .delete(`${args.$node.parent.config.url(args)}/${args.tag.split('=')[0]}`)
            .then(result => args.helpers.sendOutput(args, result)),
    });
};
