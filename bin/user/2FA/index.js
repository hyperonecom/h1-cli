'use strict';

const Cli = require('structured-cli');

module.exports = resource => {

    const category = Cli.createCategory('2FA', {
        description: 'Manage 2FA'
    });

    const enable = Cli.createCommand('enable', {
        description: 'enable'
      , plugins: resource.plugins
      , handler: async args => {

            const interactive = require('lib/interactive');
            const speakeasy = require('speakeasy');
            const qrcode = require('qrcode');

            const secret = speakeasy.generateSecret({ name: 'HyperOne', length: 20, issuer: 'HyperOne' });

            const code = await qrcode.toString(secret.otpauth_url, { type: 'terminal' });

            console.log(code);
            console.log('secret', secret.base32);

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

                    console.log('done');
                    return;
                }

                console.log('Invalid token, try again');
            }

        }
    });

    const disable = Cli.createCommand('disable', {
        description: 'disable'
      , plugins: resource.plugins
      , handler: async args => {
            const passwords = await args.helpers.api.get(`${resource.url()}/credential/password`);

            const totp = passwords.find(p => p.type === 'totp');

            if (totp) {
                await args.helpers.api.delete(`${resource.url()}/credential/password/${totp._id}`);
            }

            console.log('done');
        }
    });

    category.addChild(enable);
    category.addChild(disable);

    return category;
};
