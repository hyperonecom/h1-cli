'use strict';

const { Command } = require('h1-cli-framework');
const os = require('os');
const {openapi} = require('h1-cli-core');

module.exports = new Command({
    name: 'ssh',
    summary: 'Connect to Vault using SSH',
    options: [
        { name: 'vault', required: true },
        { name: 'project', required: true, defaultSource: 'project' },
        {
            name: 'command',
            required: !os.hostname(),
        },
    ],
    handler: async (opts) => {
        const optsAll = opts._all || opts;
        const resource = await opts.api.get(
            openapi.getUrl(`/storage/pl-waw-1/project/${optsAll.project}/vault/${optsAll.vault}`)
        );

        const sshArgs = [
            `${resource.id}@${resource.fqdn}`,
        ];

        if (opts.command) {
            sshArgs.push(opts.command);
        }

        opts.log(`ssh ${sshArgs.join(' ')}`);

        const spawn = require('child_process').spawn;

        return new Promise((resolve, reject) => {
            const ssh = spawn('ssh', sshArgs, {stdio: 'inherit'});

            ssh.on('close', resolve);
            ssh.on('error', reject);
        });
    },
});
