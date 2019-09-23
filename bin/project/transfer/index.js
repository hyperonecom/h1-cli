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
        organisation: {
            description: 'New organisation',
            type: 'string',
            required: true,
        },
    };

    return Cli.createCommand('transfer', {
        description: `Transfer ${resource.title} to other organisation`,
        dirname: __dirname,
        resource: resource,
        options: { ...resource.options, ...options},
        handler: args => args.helpers.api
            .put(`${args.$node.parent.config.url(args)}/${args[resource.name]}/transfer`, {
                organisation: args.organisation,
            })
            .then(result => args.helpers.sendOutput(args, result)),
    });
};
