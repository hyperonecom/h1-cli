'use strict';

const Cli = require('lib/cli');

const inquirer = require('inquirer');
const _ = require('lodash');

const logger = require('lib/logger');

const prompt = (type, message) => inquirer
    .prompt({
        type: type
      , message: `${message}:`
      , name: 'value'
      , validate: input => _.isEmpty(input) ? 'invalid value' : true
    })
    .then(response => response.value)
;

module.exports = Cli.createCommand('create', {
    description: 'Create an account'
  , dirname: __dirname
  , plugins: [
        require('bin/_plugins/api')
      , require('bin/_plugins/interactiveOptions')
    ]
  , handler: async args => {

        const api = args.helpers.api;

        const email = await prompt('input', 'email');
        const emailVerification = await api.post(`verification/email/${email}`);
        const emailCode = await prompt('input', 'email validation');

        const phone = await prompt('input', 'phone number');
        const phoneVerification = await api.post(`verification/phone/${phone}`);
        const phoneCode = await prompt('input', 'phone validation');

        const password = await prompt('password', 'password');

        await api.post('user', {
            email: email
          , password: password
          , verification: {
                email: { id: emailVerification.id, code: emailCode }
              , phone: { id: phoneVerification.id, code: phoneCode }
            }
        });

        return logger('info', 'User successfully created!');
    }
});
