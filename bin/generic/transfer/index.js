'use strict';

const Cli = require('lib/cli');

const text = require('lib/text');

module.exports = resource => {
    const options = {
        [resource.name]: {
            description: `${text.toTitleCase(resource.title)} ID or name`,
            type: 'string',
            required: true,
        },
        'new-project': {
            description: 'New name',
            type: 'string',
            required: true,
        },
    };

    return Cli.createCommand('transfer', {
        description: `Transfer ${resource.title} to other project`,
        dirname: __dirname,
        resource: resource,
        options: { ...resource.options, ...options},
        handler: args => args.helpers.api
            .post(`${args.$node.parent.config.url(args)}/${args[resource.name]}/actions`, {
                name: 'transfer',
                data: {
                    project: args['new-project'],
                },
            })
            .then(result => args.helpers.sendOutput(args, result)),
    });
};
