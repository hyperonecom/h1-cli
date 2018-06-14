'use strict';

const Cli = require('lib/cli');
const genericDefaults = require('bin/generic/defaults');

const options = {};

const params = {
    id: {
        description: 'Service name or ID',
        type: 'string',
        required: true,
    },
};


module.exports = Cli.createCommand('show', {
    dirname: __dirname,
    description: 'Service show',
    plugins: genericDefaults.plugins,
    options: options,
    params: params,
    handler: (args) => args.helpers.api.get(`service/${args.id}`)
        .then(result => args.helpers.sendOutput(args, result)),
});
