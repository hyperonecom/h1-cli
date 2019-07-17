'use strict';
const Cli = require('lib/cli');

module.exports = (resource, field_name) => {
    const parameter = resource.schema[field_name];
    const name = parameter.name || field_name;
    const options = {
        [name]: Object.assign({},
            parameter,
            {required: true}
        ),
        [resource.name]: {
            description: `${resource.title} ID or name`,
            type: 'string',
            required: true,
        },
    };

    return Cli.createCommand('delete', {
        description: `Delete ${parameter.description} from ${resource.title}`,
        plugins: resource.plugins,
        options: Object.assign({}, options, resource.options),
        handler: async args => {
            const obj = args.helpers.api
                .get(`${resource.url(args)}/${args[resource.name]}`);
            const value = obj[field_name] || [];
            return args.helpers.api
                .post(`${resource.url(args)}/${args[resource.name]}/actions/update_${field_name}`, {
                    [field_name]: value.filter(x => args[name].includes(x)),
                })
                .then(result => args.helpers.sendOutput(args, result));
        },
    });
};
