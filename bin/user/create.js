'use strict';

const Cli = require('structured-cli');

const logger = require('lib/logger');
const _ = require('lodash');
const inquirer = require('inquirer');

const verification = {
    email: {}
  , phone: {}
};

const options = {
    email: {
        description: 'email'
      , type: 'string'
      , defaultValue: {
            interactive: () => inquirer.prompt({
                type: 'input'
              , name: 'value'
              , message: 'email:'
              , validate: input => _.isEmpty(input) ? 'Invalid email' : true
            })
        }
    }
  , emailCode: {
        description: 'email validation code'
      , type: 'string'
      , defaultValue: {
            interactive: ctx => ctx.args.helpers.api.post(`verification/email/${ctx.args.email}`)
                .then(emailVerification => verification.email = emailVerification)
                .then(() => inquirer.prompt({
                    type: 'input'
                  , name: 'value'
                  , message: 'email validation:'
                  , validate: input => _.isEmpty(input) ? 'Invalid code' : true
                }))
        }
    }
  , phone: {
        description: 'phone'
      , type: 'string'
      , defaultValue: {
            interactive: () => inquirer.prompt({
                type: 'input'
              , name: 'value'
              , message: 'phone number:'
              , validate: input => _.isEmpty(input) ? 'Invalid phone number' : true
            })
        }
    }
  , phoneCode: {
        description: 'phone validation code'
      , type: 'string'
      , defaultValue: {
            interactive: ctx => ctx.args.helpers.api.post(`verification/phone/${ctx.args.phone}`)
                .then(phoneVerification => verification.phone = phoneVerification)
                .then(() => inquirer.prompt({
                    type: 'input'
                  , name: 'value'
                  , message: 'phone validation:'
                  , validate: input => _.isEmpty(input) ? 'Invalid code' : true
                }))
        }
    }
   , password: {
        description: 'Password'
      , type: 'string'
      , defaultValue: {
            interactive: () => inquirer.prompt({
                type: 'password'
              , name: 'value'
              , message: 'password:'
              , validate: input => _.isEmpty(input) ? 'Incorrect password' : true
            })
        }
    }
};

const handler = args => args.helpers.api
    .post('user', {
        email: args.email
      , password: args.password
      , verification: {
            email: Object.assign(verification.email, { code: args.emailCode })
          , phone: Object.assign(verification.phone, { code: args.phoneCode })
        }
    })
    .then(() => logger('info', 'User successfully created!'))
;

module.exports = Cli.createCommand('create', {
    description: 'Create an account'
  , plugins: [
        require('bin/_plugins/api')
      , require('bin/_plugins/interactiveOptions')
    ]
  , options: options
  , handler: handler
});
