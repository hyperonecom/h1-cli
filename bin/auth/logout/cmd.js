'use strict';

const Cli = require('lib/cli');

const config = require('lib/config');

module.exports = (name) => Cli.createCommand(name, {
    dirname: __dirname,
    description: 'Remove user session',
    plugins: [
        require('bin/_plugins/api'),
    ],
    handler: async args => await args.helpers.api.delete('/user/me/session')
        .then(() => config.unset('profile.apiKey'))
        .then(() => 'You have successfully logged out.'),
});
