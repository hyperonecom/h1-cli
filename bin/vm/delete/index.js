'use strict';

const genericDelete = require('bin/generic/delete');

const plugin = {
    onBeforeConfigure: context => {
        const node = context.node;

        node.addOption('disk', {
            description: 'Disk to delete',
            type: 'string',
            action: 'append',
        });

    },
    onBeforeHandler: context => {
        context.args.helpers = {
            body: { removeDisks: context.args.disk },
            ...context.args.helpers,
        };
    },
};

module.exports = resource => {
    return genericDelete({ ...resource, plugins: [...resource.plugins, plugin ]});
};
