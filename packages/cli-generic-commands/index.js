
import { Command } from '@hyperone/cli-framework';
import { openapi } from '@hyperone/cli-core';
import { spawn } from 'child_process';

export const ssh = ({ name, url }) => new Command({
    name: 'ssh',
    summary: `Connect to ${name} using SSH`,
    options: [
        { name: name.split('/').pop(), required: true },
        { name: 'project', required: true, defaultSource: 'project' },
        {
            name: 'command',
            required: false,
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

        return new Promise((resolve, reject) => {
            const ssh = spawn('ssh', sshArgs, { stdio: 'inherit' });

            ssh.on('close', resolve);
            ssh.on('error', reject);
        });
    },
});

export const sftp = ({ name, url }) => new Command({
    name: 'sftp',
    summary: `Connect to ${name} using SFTP`,
    options: [
        { name: name.split('/').pop(), required: true },
        { name: 'project', required: true, defaultSource: 'project' },
    ],
    handler: async (opts) => {
        const optsAll = opts._all || opts;
        const resource = await opts.api.get(
            openapi.getUrl(url(optsAll))
        );

        const argv = [
            `${resource.id}@${resource.fqdn}`,
        ];
        opts.logger.info(`sftp ${argv.join(' ')}`);

        return new Promise((resolve, reject) => {
            const ssh = spawn('sftp', argv, { stdio: 'inherit' });
            ssh.on('close', resolve);
            ssh.on('error', reject);
        });
    },
});
