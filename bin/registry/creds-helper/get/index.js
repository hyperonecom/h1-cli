'use strict';
const process = require('process');
const Cli = require('lib/cli');
const auth = require('lib/auth');

module.exports = Cli.createCommand('get', {
    description: 'Serve credential as credential helper',
    dirname: __dirname,
    plugins: [
        require('bin/_plugins/api'),
    ],
    handler: async () => {
        const buf = [];

        for await (const chunk of process.stdin) {
            buf.push(chunk);
        }

        const server_url = buf.toString('utf-8').trim();
        console.log(JSON.stringify({
            ServerURL: server_url,
            Username: await auth.getIdentity() || 'user',
            Secret: await auth.getToken(server_url),
        }));
    },
});
