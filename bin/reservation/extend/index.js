'use strict';

const Cli = require('lib/cli');


module.exports = resource => {
    const options = {
        [resource.name]: {
            description: `${resource.title} name or ID`,
            type: 'string',
            required: true,
        },
    };

    return Cli.createCommand('extend', {
        description: `Extend ${resource.title}`,
        plugins: resource.plugins,
        options: { ...options, ...resource.options},
        handler: args => args.helpers.api
            .post(`${resource.url(args)}/${args[resource.name]}/actions`, {
                name: 'extend', data: {},
            })
            .then(result => args.helpers.sendOutput(args, result)),
    });
};
