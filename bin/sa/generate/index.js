'use strict';

const Cli = require('lib/cli');
const fs = require('fs').promises;
const crypto = require('lib/crypto');
const api = require('lib/api');

module.exports = resource => {
    const options = {
        [resource.name]: {
            description: `${resource.title} name or ID`,
            type: 'string',
            required: true,
        },
        name: {
            description: 'Credential name',
            type: 'string',
            required: true,
        },
        'passport-output-file': {
            description: `Output path to save ${resource.title} passport as file`,
            type: 'string',
            required: true,
        },
    };

    return Cli.createCommand('generate', {
        description: `Generate passport of ${resource.title}`,
        plugins: resource.plugins,
        options: Object.assign({}, options, resource.options),
        handler: async args => {
            console.error('Generate key-pair');
            const { publicKey, privateKey } = await crypto.generateKeyPair();
            // console.log(publicKey);
            // const sshKey = `ssh-rsa ${publicKey.split('\n').slice(1, -1).join()}`;
            console.error('Register public-key as credential');
            const result = await args.helpers.api
                .post(`${resource.url(args)}/${args[resource.name]}/credential`, {
                    name: args.name,
                    type: 'ssh',
                    value: crypto.publicKeyToOpenSSH(publicKey),
                });
            const subject = `${resource.url(args)}/${args[resource.name]}`;
            const jwk = {
                subject_id: `/${subject}`,
                certificate_id: result.id,
                issuer: api.absoluteUrl(subject),
                private_key: crypto.privateKeyToPem(privateKey),
                public_key: crypto.publicKeyToPem(publicKey),
            };
            const outfile = args['passport-output-file'];
            console.error(`Save passport to file '${outfile}'`);
            await fs.writeFile(outfile, JSON.stringify(jwk, null, 4));
            return args.helpers.sendOutput(args, result);
        },
    });
};
