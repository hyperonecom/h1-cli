'use strict';

const config = require('lib/config');

const logger = require('lib/logger');

module.exports = {
    onBeforeConfigure: context => {
        const node = context.node;

        node.addOption('project-select',
        {
            description: 'Override current project on the request',
            type: 'string'
        });
    },
    onBeforeHandler: context => {
        const profile = config.get('profile', {});

        context.args.profile = Object.assign({}, profile);

        if (process.env.API_KEY) {
            return;
        }

        if (!profile.tenant || !profile.tenant._id) {
            logger('info', 'You need to select project before you can manage your resources');
            return process.exit(-1); //TODO find a better way
        }

        if (context.args['project-select']) {
            context.args.profile.tenant.name = '';
            context.args.profile.tenant._id = context.args['project-select'];
        }
    }
};
