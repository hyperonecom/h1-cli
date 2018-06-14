'use strict';

const Cli = require('lib/cli');

const options = {
    email: {
        description: 'User email (eg: user@example.org)',
        type: 'string',
        required: true,
    },
};

module.exports = resource => Cli.createCommand('revoke', {
    description: `Revoke access rights for ${resource.title}`,
    dirname: __dirname,
    plugins: resource.plugins,
    params: resource.params,
    options: Object.assign({}, resource.options, options),
    handler: args => args.helpers.api
        .delete(`${resource.url(args)}/accessrights/${args.email}`)
        .then(result => args.helpers.sendOutput(args, result)),
});
