'use strict';

const Cli = require('lib/cli');
const { pickBy, set } = require('lib/transform');

module.exports = resource => {
    const options = pickBy(resource.schema, field => field.onCreate && !field.virtual);
    const genericOptions = [];

    if (resource.schema.credentials) {
        genericOptions.push('credentials');
    }

    if (resource.schema.tags && resource.schema.tags.onCreate) {
        genericOptions.push('tag');
    }

    return Cli.createCommand('create', {
        description: `Create ${resource.title}`,
        plugins: resource.plugins,
        genericOptions,
        priority: 25,
        dirname: `${resource.dirname}/create`,
        resource: resource,
        options: Object.assign({}, options, resource.options),
        handler: async args => {
            const body = {
                tag: require('lib/tags').createTagObject(args.tag),
            };

            const no_creds = !args.password || args.password.length > 0 ||
                !args.ssh || args.ssh.length > 0 ||
                !args['ssh-file'] || args['ssh-file'].length > 0;
            if (resource.schema.credentials && !no_creds) {
                const services = await args.helpers.api.get('billing/service/', {
                    resource: resource.apiName || resource.name,
                    type: 'flavour',
                    name: args.type,
                });
                const service = services[0];

                if (!service) {
                    throw Cli.error.cancelled(
                        `The specified service type '${args.type}' ` +
                        `was not found for resource '${resource.name}.`
                    );
                }
                let credential_type = service.data && service.data.credential && service.data.credential.type;
                if (!credential_type && resource.credential_types) {
                    credential_type = resource.credential_types;
                }

                body.credential = await require('lib/credentials')
                    .getCredentialCreate(args, credential_type);
            }

            Object.keys(options)
                .forEach(name => {
                    const value = options[name].getValue ? options[name].getValue(args) : args[name];
                    if (!value) {
                        return;
                    }
                    const dest = options[name].destBody || name;
                    return set(body, dest, value);
                });

            return args.helpers.api
                .post(resource.url(args), body)
                .then(result => args.helpers.sendOutput(args, result));
        },
    });
};
