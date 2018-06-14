'use strict';

const Cli = require('lib/cli');

const options = {
    ip: {
        description: 'Public IP address or ID of IP',
        type: 'string',
        required: true,
    },
};

module.exports = resource => Cli.createCommand('add', {
    description: `Add IP address to ${resource.title}`,
    plugins: resource.plugins,
    options: Object.assign({}, resource.options, options),
    dirname: __dirname,
    handler: args => args.helpers.api
        .post(resource.url(args), { ip: args.ip })
        .then(result => args.helpers.sendOutput(args, result)),
});
