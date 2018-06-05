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
        .then(tenant => {
            config.set('profile.project', { _id: tenant._id, name: tenant.name });
            logger('info', `Tenant selected: ${tenant._id} "${tenant.name}"`);
        })
});
