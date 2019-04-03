'use strict';
const readline = require('readline');
const {getWS} = require('./api');

module.exports = async (urn = '', wsUrl) => {
    const rl = readline.createInterface({
        input: process.stdin,
    });

    readline.emitKeypressEvents(process.stdin, rl);

    if (process.stdin.isTTY) {
        process.stdin.setRawMode(true);
    }

    const ws = await getWS(urn, wsUrl);
    return new Promise((resolve, reject) => {
        console.error('exit using: ~. (tilde, followed by a period)');
        let lastRaw = {};
        const onKeyPress = (data, raw) => {
            if (lastRaw.sequence === '~' && raw.sequence === '.') {
                ws.close();
                return;
            }

            lastRaw = raw;

            ws.send(raw.sequence);
        };

        process.stdin.on('keypress', onKeyPress);

        ws.on('message', msg => {
            process.stdout.write(msg);
        });

        ws.on('close', () => {
            process.stdin.removeListener('keypress', onKeyPress);
            process.stdin.setRawMode(false);
            rl.close();
            return resolve();
        });
        ws.on('error', reject);
    });
};
