'use strict';

const Cli = require('lib/cli');

const interactive = require('lib/interactive');

const logger = require('lib/logger');


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

        await api.post('user', {
            email: email,
            password: password,
            verification: {
                email: {id: emailVerification.id, code: emailCode},
                phone: {id: phoneVerification.id, code: phoneCode},
            },
        });

        return logger('info', 'User successfully created!');
    },
});
