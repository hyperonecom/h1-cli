'use strict';

const api = require('lib/api');
const {richOption} = require('lib/cli');

const options = {
    verbose: richOption({
        alias: 'v',
        description: 'Make the operation more talkative',
        env: 'CLI_VERBOSE',
        type: 'boolean',
    }),
    // websocks depends on no-wait existing and being false
    'no-wait': {
        description: 'In case of queued event do not wait for completion',
        type: 'boolean',
    },
    'dry-run': {
        description: 'Dry run for the request',
        type: 'boolean',
    },
};

module.exports = {
    options: options,
    dirname: __dirname,
    onBeforeConfigure: context => Object.entries(options).forEach(([k, v]) => context.node.addOption(k, v)),
    onBeforeHandler: context => {
        api.setVerbose(context.args.verbose);
        api.setArgs(context.args);

        context.args.helpers = context.args.helpers || {};
        context.args.helpers.api = api;
    },
};
