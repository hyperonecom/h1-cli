'use strict';

const NodeRSA = require('node-rsa');
const Cli = require('lib/cli');

const logger = require('lib/logger');

const options = {
    user: {
        description: 'Username',
        type: 'string',
        required: true,
    },
    vm: {
        description: 'Virtual machine ID or name',
        type: 'string',
        required: true,
        dest: 'id',
    },
};

const handler = args => {
    logger('info', 'Generating key pair...');

    const rsa = new NodeRSA().generateKeyPair();
    const components = rsa.exportKey('components');
    const modulus = components.n.toString('base64');

    const b = Buffer.alloc(4);
    b.writeUInt32BE(components.e);
    const exponent = b.toString('base64');

    args.query = args.query || '[].{"New Password":password}';

    return args.helpers.api
        .post(`${args.$node.parent.config.url(args)}/${args.id}/actions`, {
            name: 'password_reset',
            data: {
                userName: args.user,
                modulus : modulus,
                exponent: exponent,
            },
        })
        .then(() => new Promise(r => setTimeout(r, 2000))) //TODO use websocket
        .then(() => args.helpers.api.get(`/vm/${args.id}/serialport/2`))
        .then(data => {
            try {
                // In the absence of an agent, we do not receive a response.
                // On May 30, 2018, the agent is available only for Windows.
                const line = data.split('\n').filter(line => line.trim().length > 0).pop();
                data = JSON.parse(line);
            } catch (e) {
                console.log('Invalid response from agent. Unable to reset password.');
                console.debug('Response: ', data);
                process.exit(-1);
            }
            if (data.modulus !== modulus) {
                return Promise.reject('modulus differs');
            }

            if (data.exponent !== exponent) {
                return Promise.reject('exponent differs');
            }

            return { password: rsa.decrypt(data.encryptedPassword).toString() };
        })
        .then(result => args.helpers.sendOutput(args, result));
};

module.exports = resource => Cli.createCommand('passwordreset', {
    description: `Password reset for ${resource.title}`,
    plugins: resource.plugins,
    params: resource.params,
    options: Object.assign({}, options, resource.options),
    handler: handler,
    dirname: __dirname,
});
