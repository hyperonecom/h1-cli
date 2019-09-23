'use strict';
const Cli = require('lib/cli');

module.exports = (resource, field_name) => {
    const parameter = resource.schema[field_name];

    const options = {
        [resource.name]: {
            description: `${resource.title} ID or name`,
            type: 'string',
            required: true,
        },
    };

    return Cli.createCommand('list', {
        description: `List ${parameter.description} of ${resource.title}`,
        plugins: resource.plugins,
        options: { ...options, ...resource.options},
        handler: args => args.helpers.api
            .get(`${resource.url(args)}/${args[resource.name]}`)
            .then(result => args.helpers.sendOutput(args, result[field_name] || [])),
    });
};
