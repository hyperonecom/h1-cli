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

module.exports = Cli.createCommand('create', {
    description: 'Create a snapshot of Vault',
    dirname: __dirname,
    plugins: genericDefaults.plugins,
    options: options,
    handler: args => args.helpers.api.post(`vault/${args.vault}/actions/snapshot`, {
        data: {
            name: args.name,
        },
    }).then(result => args.helpers.sendOutput(args, result)),
});
