'use strict';

const Cli = require('lib/cli');

const crypto = require('crypto');

const common = require('../common');

const enableTOTP = async (resource, args) => {
    const interactive = require('lib/interactive');
    const speakeasy = require('speakeasy');
    const qrcode = require('qrcode');

    const secret = speakeasy.generateSecret({ name: 'HyperOne', length: 20, issuer: 'HyperOne' });

    const code = await qrcode.toString(secret.otpauth_url, { type: 'terminal' });

    console.log(code);
    console.log('Secret:', secret.base32);

    while (code) {
        const token = await interactive.prompt('token');
        const verified = speakeasy.totp.verify({
            secret: secret.base32,
            encoding: 'base32',
            token: token.value,
        });

        if (verified) {
            await args.helpers.api.post(`${resource.url()}/credential/password`, {
                value: secret.base32,
                token: token.value,
                type: 'totp',
                name: 'Time-Based One-Time Password',
            });

            console.log('Done');
            return;
        }

        console.log('Invalid token, try again');
    }
};

const enableOTAC = async (resource, args) => {
    const codes = Array(20).fill().map(() => crypto.randomBytes(4).toString('hex')).join(' ');

    await args.helpers.api.post(`${resource.url()}/credential/password`, {
        value: codes,
        type: 'otac',
        name: 'One-time authorization Codes',
    });

    console.log('Here are your codes');
    console.log();

    codes.match(/(\w+ \w+ \w+ \w+)+/g).forEach(e => console.log(e));
};


module.exports = resource => Cli.createCommand('enable', {
    description: 'Enable factor of authentication',
    dirname: __dirname,
    plugins: resource.plugins,
    options: common.options,
    handler: async args => {
        if (args.type === 'totp') {
            return enableTOTP(resource, args);
        }

        return enableOTAC(resource, args);
    },
});
