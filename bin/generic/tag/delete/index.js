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
    options: { ...options, ...subresource.options},
    handler: async args => {
        const tags = await args.helpers.api.get(`${args.$node.parent.config.url(args)}`);
        const name = args.tag.split('=')[0];
        await args.helpers.api.delete(`${args.$node.parent.config.url(args)}/${name}`);

        return args.helpers.sendOutput(args, {
            [name]: tags[name],
        });
    },
});
