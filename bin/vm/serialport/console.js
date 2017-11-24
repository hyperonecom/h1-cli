'use strict';

const Cli = require('structured-cli');

const readline = require('readline');

const params = {
    id: {
        description: 'Resource identifier'
      , type: 'string'
      , required: true
    }
};

const options = {
    port: {
        description: 'Port to connect'
      , type: 'string'
      , defaultValue: '1'
    }
};

module.exports = resource => Cli.createCommand('console', {
    description: 'Connect to VM using Serial Console'
  , plugins: resource.plugins
  , params: params
  , options: Object.assign(options, resource.options)
  , handler: handler
});

const handler = args => {

    readline.emitKeypressEvents(process.stdin);
    if (process.stdin.isTTY) {
        process.stdin.setRawMode(true);
    }

    return args.helpers.api.ws(`/vm/${args.id}/serialport/${args.port}`)
    .then(ws => new Promise((resolve, reject) => {
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
    }));
};
