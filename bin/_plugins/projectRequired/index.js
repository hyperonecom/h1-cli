'use strict';

const config = require('lib/config');
const Cli = require('lib/cli');
const api = require('lib/api');

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
        if (args.project) {
            api.setProject(args.project);
            return;
        }
        if (config.getProjectEnv()) { // then try environment variable
            args.project = config.getProjectEnv();
        }
        const configProject = config.get('profile.project.id');
        if (configProject) { // then try environment variable
            args.project = configProject;
        }
        if (!args.project) { // then reject if no service account used
            throw Cli.error.cancelled('You need to select project before you can manage your resources');
        }
    },
};
