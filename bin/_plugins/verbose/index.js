'use strict';

const logger = require('lib/logger');

const options = {
    verbose: {
        alias: 'v',
        description: 'Make the operation more talkative',
        defaultValue: !!process.env.H1_DEFAULT_VERBOSE,
        type: 'boolean',
    },
};

module.exports = {
    options: options,
    dirname: __dirname,
    onBeforeConfigure: context => Object.entries(options).forEach(([k, v]) => context.node.addOption(k, v)),
    onBeforeHandler: context => {
        logger.setVerbose(context.args.verbose);
    },
};
