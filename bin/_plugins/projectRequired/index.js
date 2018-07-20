'use strict';

const config = require('lib/config');
const Cli = require('lib/cli');

const options = {
    'project-select': {
        description: 'Override current project on the request',
        type: 'string',
    },
};


module.exports = {
    options: options,
    dirname: __dirname,
    onBeforeConfigure: context => Object.entries(options).forEach(([k, v]) => context.node.addOption(k, v)),
    onBeforeHandler: async context => {
        const profile = config.get('profile', {});

        context.args.profile = Object.assign({}, profile);

        if (process.env.H1_TOKEN) {
            return;
        }

        const project_id = process.env.H1_PROJECT || context.args['project-select'];

        if (project_id) {
            context.args.profile.project = await context.args.helpers.api.get(`project/${project_id}`);
        }

        if (!profile.project || !profile.project._id) {
            throw Cli.error.cancelled('You need to select project before you can manage your resources');
        }
        context.args.helpers.api.setProject(context.args.profile.project._id);
    },
};
