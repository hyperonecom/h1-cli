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
    onBeforeHandler: context => {
        const profile = config.get('profile', {});

        context.args.profile = Object.assign({}, profile);

        if (config.get_token() || config.get_project()) {
            return;
        }

        if (!profile.project || !profile.project._id) {
            throw Cli.error.cancelled('You need to select project before you can manage your resources');
        }

        if (context.args['project-select']) {
            context.args.profile.project.name = '';
            context.args.profile.project._id = context.args['project-select'];
        }
    },
};
