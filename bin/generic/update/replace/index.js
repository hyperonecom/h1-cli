'use strict';
const Cli = require('lib/cli');

module.exports = (resource, field_name) => {
    const parameter = Object.assign({},
        resource.schema[field_name],
        { required: true }
    );

    const name = parameter.name || field_name;

    const options = {
        [name]: parameter,
        [resource.name]: {
            description: `${resource.title} ID or name`,
            type: 'string',
            required: true,
        },
    };
    return Cli.createCommand(parameter.command || name, {
        description: `Update ${parameter.description} of ${resource.title}`,
        plugins: resource.plugins,
        options: Object.assign({}, options, resource.options),
        handler: args => args.helpers.api
            .post(`${resource.url(args)}/${args[resource.name]}/actions/update_${field_name}`, {
                [field_name]: args[name],
            })
            .then(result => args.helpers.sendOutput(args, result)),
    });
};
