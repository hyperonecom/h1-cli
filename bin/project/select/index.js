'use strict';

const Cli = require('lib/cli');
const config = require('lib/config');

const logger = require('lib/logger');

module.exports = resource => Cli.createCommand('select', {
    description: `Select ${resource.title} context`,
    dirname: __dirname,
    plugins: [
        require('bin/_plugins/loginRequired'),
        require('bin/_plugins/api'),
        require('bin/_plugins/outputFormat'),
    ],
    options: resource.options,
    handler: args => args.helpers.api
        .get(resource.url(args))
        .then(project => {
            config.set('profile.project', { id: project.id, name: project.name });
            logger('info', `Project selected: ${project.id} "${project.name}"`);
            return project;
        }).then(result => args.helpers.sendOutput(args, result)),
});
