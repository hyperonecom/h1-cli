'use strict';

const Cli = require('lib/cli');
const ssh = require('lib/ssh');
const logger = require('lib/logger');
const forge = require('node-forge');

const options = {
    user: {
        description: 'Username',
        type: 'string',
        required: true,
    },
};

module.exports = resource => Cli.createCommand('passwordreset', {
    description: `Password reset for ${resource.title}`,
    plugins: resource.plugins,
    params: resource.params,
    options: Object.assign({}, options, resource.options),
    dirname: __dirname,
    handler: async args => {
        logger('info', 'Generating key pair...');

        const { keypair } = await ssh.generateKey();

        const modulus = forge.util.encode64(forge.util.hexToBytes(keypair.privateKey.n.toString(16)));
        const exponent = forge.util.encode64(forge.util.hexToBytes(keypair.privateKey.e.toString(16)));

        args.query = args.query || '[].{"New Password":password}';

        await args.helpers.api
            .post(`${resource.url(args)}/actions/password_reset`, {
                userName: args.user,
                modulus: modulus,
                exponent: exponent,
            });
        await new Promise(r => setTimeout(r, 2000));
        const content = await args.helpers.api.get(`${resource.url(args)}/serialport/2`);
        const line = content.split('\n').filter(line => line.trim().length > 0).pop();
        let data;
        try {
            // In the absence of an agent, we do not receive a response.
            // On May 30, 2018, the agent is available only for Windows.
            data = JSON.parse(line);
        } catch (e) {
            throw Cli.error.serverError(`Invalid response from agent. Unable to reset password. Response: ${line}`);
        }
        if (data.modulus !== modulus) {
            throw Cli.error.serverError('modulus differs');
        }

        if (data.exponent !== exponent) {
            throw Cli.error.serverError('exponent differs');
        }
        return args.helpers.sendOutput(args, {
            password: keypair.privateKey.decrypt(Buffer.from(data.encryptedPassword, 'base64'), 'RSA-OAEP').toString(),
        });
    },
});
