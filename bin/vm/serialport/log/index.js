'use strict';

const Cli = require('lib/cli');

const options = {
    vm: {
        description: 'Virtual machine ID or name',
        type: 'string',
        required: true,
    },
    port: {
        description: 'Port to connect',
        type: 'string',
        defaultValue: '1',
    },
};

module.exports = resource => Cli.createCommand('log', {
    description: `Log Serial Console buffer of ${resource.title}`,
    plugins: resource.plugins,
    params: resource.params,
    options: Object.assign({}, resource.options, options),
    handler: handler,
});

const handler = args => args.helpers.api.get(`/vm/${args.vm}/serialport/${args.port}`);
