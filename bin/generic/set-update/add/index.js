'use strict';

const Cli = require('lib/cli');


module.exports = resource => {

    const options = {
        [resource.parameter_name]: {

            description: `New ${resource.title}`,
            required: true,
            ...resource.extra_parameter,
        },
    };


    return Cli.createCommand('add', {
        description: `Add ${resource.title}`,
        dirname: __dirname,
        plugins: resource.plugins,
        resource: resource,
        options: { ...resource.options, ...options},
        handler: args => args.helpers.api
            .get(resource.url(args))
            .then(value => [
                ...value,
                args[resource.parameter_name],
            ])
            .then(value => args.helpers.api.put(resource.url(args), value))
            .then(result => args.helpers.sendOutput(args, result)),
    });
};
