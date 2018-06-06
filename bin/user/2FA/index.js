'use strict';

const Cli = require('structured-cli');

const crypto = require('crypto');

const options = {
    type: {
        description: 'type'
      , type: 'string'
      , default: 'totp'
    }
};

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
            secret: secret.base32
          , encoding: 'base32'
          , token: token.value
        });

        if (verified) {
            await args.helpers.api.post(`${resource.url()}/credential/password`, {
                value: secret.base32
              , token: token.value
              , type: 'totp'
              , name: 'Time-Based One-Time Password'
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
        value: codes
      , type: 'otac'
      , name: 'One-time authorization Codes'
    });

    console.log('Here are your codes');
    console.log();

    codes.match(/(\w+ \w+ \w+ \w+)+/g).forEach(e => console.log(e));
};

module.exports = resource => {

    const category = Cli.createCategory('2fa', {
        description: 'Manage 2FA'
    });

    const enable = Cli.createCommand('enable', {
        description: 'enable'
      , plugins: resource.plugins
      , options: options
      , handler: async args => {
            if (args.type === 'totp') {
                return enableTOTP(resource, args);
            }

            return enableOTAC(resource, args);
        }
    });

    const disable = Cli.createCommand('disable', {
        description: 'disable'
      , options: options
      , plugins: resource.plugins
      , handler: async args => {
            const passwords = await args.helpers.api.get(`${resource.url()}/credential/password`);

            const password = passwords.find(p => p.type === args.type);

            if (password) {
                await args.helpers.api.delete(`${resource.url()}/credential/password/${password._id}`);
                console.log('done');
            } else {
                console.log(`${args.type} not found`);
            }
        }
    });

    category.addChild(enable);
    category.addChild(disable);

    return category;
};
