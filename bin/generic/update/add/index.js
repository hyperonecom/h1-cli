'use strict';
const Cli = require('lib/cli');
const {deCamelCase, rmRight} = require('lib/text');

module.exports = (resource, field_name) => {
    const parameter = resource.schema[field_name];
    const name = rmRight(deCamelCase(parameter.name || field_name).trimRight('s'), 's');
    const options = {
        [name]: {
            ...parameter,
            required: true,
        },
        [resource.name]: {
            description: `${resource.title} ID or name`,
            type: 'string',
            required: true,
        },
    };

    return Cli.createCommand('add', {
        description: `Add ${parameter.description} to ${resource.title}`,
        plugins: resource.plugins,
        options: { ...options, ...resource.options},
        handler: async args => {
            const obj = await args.helpers.api
                .get(`${resource.url(args)}/${args[resource.name]}`);
            const value = obj[field_name] || [];
            const result = await args.helpers.api
                .post(`${resource.url(args)}/${args[resource.name]}/actions/update_${field_name}`, {
                    [field_name]: [...value, ...args[name]],
                });
            return args.helpers.sendOutput(args, result[field_name]);
        },
    });
};
