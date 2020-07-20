'use strict';
const { Command } = require('@hyperone/cli-framework');
const os = require('os');
const { openapi } = require('@hyperone/cli-core');


module.exports = new Command({
    name: 'ssh',
    summary: 'Connect to compute/vm using SSH',
    options: [
        { name: 'vm', required: true },
        { name: 'project', required: true, defaultSource: 'project' },
        {
            name: 'command',
            required: !os.hostname(),
        },
        {
            name: 'username',
            defaultValue: 'guru',
        },
    ],
    handler: async (opts) => {
        const optsAll = opts._all || opts;
        const resource = await opts.api.get(
            openapi.getUrl(`/compute/pl-waw-1/project/${optsAll.project}/vm/${optsAll.vm}`)
        );

        const sshArgs = [
            `${optsAll.username}@${resource.fqdn}`,
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
