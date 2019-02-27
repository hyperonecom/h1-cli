'use strict';

const Cli = require('lib/cli');


module.exports = resource => {
    const options = {
        [resource.parameter_name]: Object.assign(
            {},
            {
                description: `Deleted ${resource.title}`,
                required: true,
            },
            resource.extra_parameter
        ),
    };

    return Cli.createCommand('delete', {
        description: `Delete ${resource.title}`,
        dirname: __dirname,
        plugins: [
            require('bin/_plugins/loginRequired'),
            require('bin/_plugins/outputFormat'),
            require('bin/_plugins/api'),
        ],
        resource: resource,
        options: Object.assign({}, resource.options, options),
        handler: args => args.helpers.api
            .get(resource.url(args))
            .then(values => values.filter(x => x !== args[resource.parameter_name]))
            .then(values => {
                console.log({values});

                return args.helpers.api.put(resource.url(args), values);
            })
            .then(values => args.helpers.sendOutput(args, values)),
    });
};
