'use strict';

module.exports = {
    onBeforeConfigure: context => {
        const node = context.node;

        node.addOption('yes',
            {
                description: 'confirm yes',
                type: 'boolean',
            });
    },
};
