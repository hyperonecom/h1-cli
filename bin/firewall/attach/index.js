'use strict';

const Cli = require('lib/cli');

const options = {
    firewall: {
        description: 'Firewall ID or name',
        type: 'string',
        required: true,
    },
    network: {
        description: 'Network ID or name',
        type: 'string',
        required: true,
    },
};

const handler = args => args.helpers.api
    .post(`firewall/${args.firewall}/actions`, { name: 'attach', data: { network: args.network } })
    .then(result => args.helpers.sendOutput(args, result))
;

module.exports = resource => Cli.createCommand('attach', {
    dirname: __dirname,
    description: `Attach ${resource.title} to a network`,
    plugins: resource.plugins,
    options: Object.assign({}, resource.options, options),
    handler: handler,
    params: resource.params,
});
