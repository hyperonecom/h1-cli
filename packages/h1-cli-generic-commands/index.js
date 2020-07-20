'use strict';

const { Command } = require('h1-cli-framework');
const os = require('os');
const { openapi } = require('h1-cli-core');

const ssh = ({ name, url }) => new Command({
    name: 'ssh',
    summary: `Connect to ${name} using SSH`,
    options: [
        { name: name.toLowerCase(), required: true },
        { name: 'project', required: true, defaultSource: 'project' },
        {
            name: 'command',
            required: !os.hostname(),
        },
    ],
    handler: async (opts) => {
        const optsAll = opts._all || opts;
        const resource = await opts.api.get(
            openapi.getUrl(url(optsAll))
        );

        const sshArgs = [
            `${resource.id}@${resource.fqdn}`,
        ];

        if (optsAll.command) {
            sshArgs.push(optsAll.command);
        }
        opts.logger.info(`ssh ${sshArgs.join(' ')}`);

        const spawn = require('child_process').spawn;

        return new Promise((resolve, reject) => {
            const ssh = spawn('ssh', sshArgs, { stdio: 'inherit' });

            ssh.on('close', resolve);
            ssh.on('error', reject);
        });
    },
});

module.exports = {
    ssh,
};
