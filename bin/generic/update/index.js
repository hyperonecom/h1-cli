'use strict';

const Cli = require('lib/cli');

const update = (resource, field_name) => {

    const options = {
        [field_name]: resource.schema[field_name],
        [resource.name]: {
            description: `${resource.title} ID or name`,
            type: 'string',
            required: true,
        },
    };
    return Cli.createCommand(field_name, {
        description: `Update ${field_name} of ${resource.title}`,
        plugins: resource.plugins,
        options: Object.assign({}, options, resource.options),
        handler: async args => {
            const body = {
                [field_name]: args[field_name],
            };

            return args.helpers.api
                .post(`${resource.url(args)}/${args[resource.name]}/actions/update_${field_name}`, body)
                .then(result => args.helpers.sendOutput(args, result));
        },
    });
};
module.exports = (resource) => {
    const category = Cli.createCategory('update', {
        description: `Update ${resource.title}`,
        context: resource.context,
        defaultQuery: resource.defaultQuery,
        resource: resource,
    });

    Object.entries(resource.schema).forEach(([key, value]) => {
        if (!value.onUpdate) return;
        category.addChild(update(resource, key));
    });
    return category;
};

