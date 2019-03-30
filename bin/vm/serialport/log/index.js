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
    follow: {
        description: 'Output current messages in real time as they arrive',
        type: 'boolean',
    },
};

module.exports = resource => Cli.createCommand('log', {
    description: `Log Serial Console buffer of ${resource.title}`,
    plugins: resource.plugins,
    params: resource.params,
    options: Object.assign({}, resource.options, options),
    dirname: __dirname,
    handler: async args => {
        if (args.follow) {
            const vm = await args.helpers.api.get(`vm/${args.vm}`);
            const ws = await args.helpers.api.getWS(`/vm/${vm._id}/serialport/${args.port}`);
            return new Promise((resolve, reject) => {
                ws.on('message', msg => process.stdout.write(msg));
                ws.on('close', resolve);
                ws.on('error', reject);
            });
        }
        return args.helpers.api.get(`/vm/${args.vm}/serialport/${args.port}`);
    },
});
