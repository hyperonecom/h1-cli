'use strict';

const config = require('lib/config');
const Cli = require('lib/cli');

const options = {
    project: Cli.richOption({
        description: 'Override current project on the request',
        type: 'string',
        env: 'PROJECT',
    }),
};

module.exports = {
    options: options,
    dirname: __dirname,
    onBeforeConfigure: context => Object.entries(options).forEach(([k, v]) => context.node.addOption(k, v)),
    onBeforeHandler: ({ args }) => {
        args.project = args.project || config.getProjectEnv() || config.get('profile.project.id');
        if (!args.project) { // then reject if no service account used
            throw Cli.error.cancelled('You need to select project before you can manage your resources');
        }
    },
};
