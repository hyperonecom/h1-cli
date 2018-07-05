'use strict';

const Cli = require('lib/cli');

const readline = require('readline');

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
    handler: handler,
    dirname: __dirname,
});

const handler = async args => {

    readline.emitKeypressEvents(process.stdin);

    if (process.stdin.isTTY) {
        process.stdin.setRawMode(true);
    }

    const vm = await args.helpers.api.get(`vm/${args.vm}`);
    const ws = await args.helpers.api.getWS(`/vm/${vm._id}/serialport/${args.port}`);

    return new Promise((resolve, reject) => {
        console.log('exit using: ~. (tilde, followed by a period)');

        let lastRaw = {};
        process.stdin.on('keypress', (data, raw) => {
            if (lastRaw.sequence === '~' && raw.sequence === '.') {
                return resolve();
            }

            lastRaw = raw;

            ws.send(raw.sequence);
        });

        ws.on('message', msg => {
            process.stdout.write(msg);
        });

        ws.on('close', resolve);
        ws.on('error', reject);
    });
};
