'use strict';

const Cli = require('lib/cli');

const options = {
    name: {
        description: 'Name',
        type: 'string',
        required: true,
    },
};

const handler = args => args.helpers.api.post('firewall', {
    name: args.name,
    tag: require('lib/tags').createTagObject(args.tag),
}).then(result => args.helpers.sendOutput(args, result));

module.exports = resource => Cli.createCommand('create', {
    dirname: __dirname,
    genericOptions: ['tag'],
    priority: 25,
    description: `Create ${resource.title}`,
    options: options,
    plugins: resource.plugins,
    handler: handler,
});
