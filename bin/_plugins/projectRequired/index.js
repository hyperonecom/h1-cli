'use strict';

const config = require('lib/config');
const Cli = require('lib/cli');
const api = require('lib/api');

const options = {
    'project-select': Cli.richOption({
        description: 'Override current project on the request',
        type: 'string',
        env: 'PROJECT',
    }),
};

module.exports = {
    options: options,
    dirname: __dirname,
    onBeforeConfigure: context => Object.entries(options).forEach(([k, v]) => context.node.addOption(k, v)),
    onBeforeHandler: context => {
        const apiKey = config.get('profile.project.id');
        if (context.args['project-select']) { // use command line parameter
            api.setProject(context.args['project-select']);
        } else if (config.getProjectEnv()) { // then try environment variable
            api.setProject(config.getProjectEnv());
        } else if (apiKey) { // then try config
            api.setProject(apiKey);
        } else if (!config.getTokenEnv()) { // then reject if no service account used
            throw Cli.error.cancelled('You need to select project before you can manage your resources');
        }
    },
};
