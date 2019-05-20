'use strict';

const Cli = require('lib/cli');
const cryptography = require('lib/cryptography');

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

module.exports = (resource, type='sha512') => Cli.createCommand('add', {
    dirname: __dirname,
    description: `Add ${resource.title}`,
    resource: resource,
    options: Object.assign({}, resource.options, options),
    handler: async args => {
        let password = args.password;

        if (!password) {
            password = await cryptography.randomPassword();
            console.error(`The generated password is: ${password}`);
        }

        const body = Object.assign({
            name: args.name,
        },
        cryptography.hashPassword(password, type)
        );
        return args.helpers.api
            .post(resource.url(args), body)
            .then(result => args.helpers.sendOutput(args, result));
    },
});
