'use strict';

const Cli = require('lib/cli');


module.exports = resource => {
    const options = {
        resource: {
            description: 'Resource ID to assign reservation',
            type: 'string',
            required: true,
        },
        [resource.name]: {
            description: `${resource.title} name or ID`,
            type: 'string',
            required: true,
        },
    };

    return Cli.createCommand('assign', {
        description: `Assign ${resource.title} to resource`,
        plugins: resource.plugins,
        options: Object.assign({}, options, resource.options),
        handler: args => args.helpers.api
            .post(`${resource.url(args)}/${args[resource.name]}/actions`, {
                name: 'assign',
                data: {
                    resource: args.resource,
                },
            })
            .then(result => args.helpers.sendOutput(args, result)),
    });
};
