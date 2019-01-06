'use strict';
const readline = require('readline');
const {getWS} = require('./api');

module.exports = async (urn = '', wsUrl) => {
    readline.emitKeypressEvents(process.stdin);

    if (process.stdin.isTTY) {
        process.stdin.setRawMode(true);
    }

    const ws = await getWS(urn, wsUrl);
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
