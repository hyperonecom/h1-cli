'use strict';

const Cli = require('lib/cli');

const options = {
    name: {
        description: 'Name',
        type: 'string',
        required: true,
    },
};

const handler = args => args.helpers.api.post('firewall', { name: args.name }).then(result => args.helpers.sendOutput(args, result));

module.exports = resource => Cli.createCommand('create', {
    dirname: __dirname,
    description: `Create ${resource.title}`,
    options: options,
    plugins: resource.plugins,
    handler: handler,
});
