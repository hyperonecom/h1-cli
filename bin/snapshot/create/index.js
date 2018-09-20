'use strict';

const genericDefaults = require('bin/generic/defaults');
const Cli = require('lib/cli');

const options = {
    vault: {
        description: 'Vault ID or name',
        type: 'string',
        required: true,
    },
    name: {
        description: 'Snapshot name',
        type: 'string',
        required: true,
    },
};

module.exports = resource => Cli.createCommand('create', {
    description: 'Create a snapshot of Vault',
    dirname: __dirname,
    plugins: genericDefaults.plugins,
    genericOptions: ['tag'],
    options: options,
    handler: args => args.helpers.api.post(resource.url(args), {
        name: args.name,
        vault: args.vault,
        tag: require('lib/tags').createTagObject(args.tag),
    }).then(result => args.helpers.sendOutput(args, result)),
});
