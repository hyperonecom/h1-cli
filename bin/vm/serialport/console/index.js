'use strict';

const Cli = require('lib/cli');
const websocketTerminal = require('lib/websocketTerminal');
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

module.exports = resource => Cli.createCommand('console', {
    description: `Connect to ${resource.title} using Serial Console`,
    plugins: resource.plugins,
    params: resource.params,
    options: Object.assign({}, options, resource.options),
    handler: args => args.helpers.api.get(`vm/${args.vm}`).then(vm => websocketTerminal(`/vm/${vm._id}/serialport/${args.port}`)),
    dirname: __dirname,
});



