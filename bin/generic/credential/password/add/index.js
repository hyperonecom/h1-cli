'use strict';

const Cli = require('lib/cli');
const credentials = require('lib/credentials');

const options = {
    name: {
        description: 'Name',
        type: 'string',
        required: true,
    },
    password: {
        description: 'Password. It will be generated and shown if it is not specified.',
        type: 'string',
        required: false,
    },
};

module.exports = (resource) => Cli.createCommand('add', {
    dirname: __dirname,
    description: `Add ${resource.title}`,
    resource: resource,
    options: Object.assign({}, resource.options, options),
    handler: async args => {
        const remote_resource = await args.helpers.api.get(resource.url(args));
        const resourceService = remote_resource.services.find(service => service.type ==='flavour');
        if (!resourceService) {
            throw Cli.error.cancelled(
                'The service flavour of resource was not found'
            );
        }
        const service = await args.helpers.api.get(`service/${resourceService.sourceService}`);
        let credential_type = service.data && service.data.credential && service.data.credential.type;
        if (!credential_type && remote_resource.credential_types) {
            credential_type = remote_resource.credential_types;
        }

        let password = args.password;

        if (!password) {
            password = await credentials.randomPassword();
            console.error(`The generated password is: ${password}`);
        }

        const body = Object.assign(credentials.hashPassword(password, credential_type), {
            name: args.name,
        });
        return args.helpers.api
            .post(`${resource.url(args)}/credential`, body)
            .then(result => args.helpers.sendOutput(args, result));
    },
});
