'use strict';
const process = require('process');
const Cli = require('lib/cli');
const config = require('lib/config');
const api = require('lib/api');

module.exports = Cli.createCommand('get', {
    description: 'Serve credential as credential helper',
    dirname: __dirname,
    handler: async () => {
        const buf = [];

        for await (const chunk of process.stdin) {
            buf.push(chunk);
        }

        const server_url = buf.toString('utf-8');
        console.log(JSON.stringify({
            ServerURL: server_url,
            Username: config.get('auth.identity'),
            Secret: api.getToken(server_url),
        }));
    },
});
