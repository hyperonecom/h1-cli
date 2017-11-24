'use strict';

const config = require('lib/config');

const logger = require('lib/logger');

module.exports = {
    onBeforeConfigure: context => {
        const node = context.node;

        node.addOption('tenant-select',
        {
            description: 'Override current tenant on the request',
            type: 'string'
        });
    },
    onBeforeHandler: context => {
        const profile = config.get('profile', {});

        if (!profile.tenant || !profile.tenant._id) {
            logger('info', 'You need to select tenant before you can manage your resources');
            return process.exit(-1); //TODO find a better way
        }

        context.args.profile = Object.assign({}, profile);

        if (context.args['tenant-select']) {
            context.args.profile.tenant.name = '';
            context.args.profile.tenant._id = context.args['tenant-select'];
        }
    }
};
