'use strict';

const Cli = require('lib/cli');

const options = {
    email: {
        description: 'User email (eg: user@example.org)',
        type: 'string',
        required: true,
    },
    role: {
        description: 'Role',
        type: 'string',
        choices: ['owner', 'billing', 'user'],
        defaultValue: 'user',
    },
};

module.exports = resource => Cli.createCommand('grant', {
    description: `Grant ${resource.title}`,
    dirname: __dirname,
    plugins: resource.plugins,
    params: resource.params,
    context: resource.context,
    options: Object.assign({}, resource.options, options),
    handler: args => {
        const data = {
            id: args.email,
            role: args.role,
        };
        return args.helpers.api
            .post(resource.url(args), data)
            .then(result => args.helpers.sendOutput(args, result))
        ;
    },
});
