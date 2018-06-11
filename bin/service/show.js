'use strict';

const Cli = require('structured-cli');
const genericDefaults = require('bin/generic/defaults');

const options = {};

const params = {
    id: {
        description: 'Service name or ID',
        type: 'string',
        required: true
    }
};


module.exports = Cli.createCommand('show', {
    description: 'Service show',
    plugins: genericDefaults.plugins,
    options: options,
    params: params,
    handler: (args) => args.helpers.api.get(`service/${args.id}`)
        .then(result => args.helpers.sendOutput(args, result))
});
