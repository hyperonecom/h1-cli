'use strict';

const Cli = require('structured-cli');
const config = require('lib/config');

const logger = require('lib/logger');

module.exports = resource => Cli.createCommand('select', {
    description: 'Select project context',
    plugins: [
        require('bin/_plugins/loginRequired'),
        require('bin/_plugins/api')
    ],
    params: resource.params,
    handler: args => args.helpers.api
        .get(resource.url(args))
        .then(project => {
            config.set('profile.project', { _id: project._id, name: project.name });
            logger('info', `Project selected: ${project._id} "${project.name}"`);
        })
});
