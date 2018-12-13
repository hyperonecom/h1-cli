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
        description: 'Password',
        type: 'string',
        required: true,
    },
};

module.exports = resource => Cli.createCommand('add', {
    dirname: __dirname,
    description: `Add password to ${resource.title}`,
    resource: resource,
    options: Object.assign({}, resource.options, options),
    handler: args => args.helpers.api
        .post(args.$node.parent.config.url(args), Object.assign({},
            cryptography.hashPassword(args.password), {
                name: args.name,
            }))
        .then(result => args.helpers.sendOutput(args, result)),
});
