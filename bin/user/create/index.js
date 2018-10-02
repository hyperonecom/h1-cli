'use strict';

const Cli = require('lib/cli');

const interactive = require('lib/interactive');

const logger = require('lib/logger').log;


module.exports = Cli.createCommand('create', {
    description: 'Create an account',
    dirname: __dirname,
    plugins: [
        require('bin/_plugins/api'),
    ],
    handler: async args => {

        const api = args.helpers.api;

        const email = await interactive.prompt('E-mail');
        const emailVerification = await api.post(`verification/email/${email.value}`);
        const emailCode = await interactive.prompt('Email validation');

        const phone = await interactive.prompt('Phone number');
        const phoneVerification = await api.post(`verification/phone/${phone.value}`);
        const phoneCode = await interactive.prompt('Phone validation');

        const password = await interactive.prompt('Password', {
            type: 'password',
        });

        const body = {
            email: email.value,
            password: password.value,
            verification: {
                email: {id: emailVerification.id, code: emailCode.value},
                phone: {id: phoneVerification.id, code: phoneCode.value},
            },
        };

        await api.post('user', body);

        return logger('info', 'User successfully created!');
    },
});
