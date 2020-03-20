'use strict';

const Cli = require('lib/cli');

const options = {
    location: Cli.richOption({
        description: 'Specify location of resources',
        type: 'string',
        choices: ['pl-waw-1'],
        defaultValue: 'pl-waw-1',
        required: false,
    }),
};

module.exports = {
    options: options,
    dirname: __dirname,
    onBeforeConfigure: context => Object.entries(options).forEach(([k, v]) => context.node.addOption(k, v)),
};
