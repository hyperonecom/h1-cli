'use strict';

const options = {
    yes: {
        description: 'Perform action without additional confirmation',
        type: 'boolean',
    },
};

module.exports = {
    options: options,
    dirname: __dirname,
    onBeforeConfigure: context => Object.entries(options).forEach(([k, v]) => context.node.addOption(k, v)),
};
