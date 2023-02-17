import { Command } from '@hyperone/cli-framework';
import { openapi } from '@hyperone/cli-core';

import { generateKeyPairSync, privateDecrypt } from 'node:crypto';

export default new Command({
    name: 'password-reset',
    summary: 'Password reset',
    options: [
        { name: 'vm', required: true },
        { name: 'project', required: true, defaultSource: 'project' },
        { name: 'username', required: true },
    ],
    handler: async (opts, cmd) => {
        const optsAll = opts._all || opts;

        cmd.device.log('Generating key pair...');
        const keypair = generateKeyPairSync('rsa', { modulusLength: 2048 });
        const publicKey = keypair.publicKey.export({ format: 'jwk' });

        const url = openapi.getUrl('/compute/pl-waw-1/project/{projectId}/vm/{vmId}', {
            projectId: optsAll.project,
            vmId: optsAll.vm,
        });
        cmd.device.log('Requesting reset...');
        let response = await opts.api.post(`${url}/actions/password_reset`, {
            json: {
                userName: optsAll.username,
                publicKey,
            },
        });

        cmd.device.log('Waiting for the response...');
        await new Promise(r => setTimeout(r, 3000));

        response = await opts.api.post(`${url}/actions/serialport`, { json: { number: 2 } });
        const content = await response.bodyText;
        const line = content?.split('\n').filter(line => line.trim().length > 0).pop();
        let data;
        try {
            // In the absence of an agent, we do not receive a response.
            // On May 30, 2018, the agent is available only for Windows.
            data = JSON.parse(line);
        } catch (e) {
            throw Error(`Invalid response from agent. Unable to reset password. Response: ${line}`);
        }

        const encryptedPassword = Buffer.from(data.encryptedPassword, 'base64');
        const password = privateDecrypt(keypair.privateKey, encryptedPassword).toString();

        return opts.format({ password });
    },
});
