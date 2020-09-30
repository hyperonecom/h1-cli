import { Command } from '@hyperone/cli-framework';
import os from 'os';
import { openapi } from '@hyperone/cli-core';
import { spawn } from 'child_process';


export default new Command({
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
            openapi.getUrl('/compute/pl-waw-1/project/{projectId}/vm/{vmId}', {
                projectId: optsAll.project,
                vmId: optsAll.vm,
            })
        );

        const sshArgs = [
            `${optsAll.username}@${resource.fqdn}`,
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
