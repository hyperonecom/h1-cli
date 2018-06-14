'use strict';

const Cli = require('lib/cli');
const genericDefaults = require('bin/generic/defaults');

const options = {
    netgw: {
        description: 'Network gateway name or ID',
        type: 'string',
        required: true,
    },
};

module.exports = resource => Cli.createCommand('detach', {
    description: 'Network gateway detach from a network',
    dirname: __dirname,
    plugins: genericDefaults.plugins,
    options: Object.assign({}, resource.options, options),
    params: resource.params,
    handler: (args) => args.helpers.api
        .post(`netgw/${args.netgw}/actions`, { name: 'detach' })
        .then(result => args.helpers.sendOutput(args, result)),
});
