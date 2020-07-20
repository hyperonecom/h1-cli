'use strict';

const { Category } = require('@hyperone/cli-framework');

module.exports = {
    name: require('./package.json').name,
    version: require('./package.json').version,
    load: async (parent) => parent.loadHook.push(() => {

        const cmd = new Category({
            name: 'auth',
            summary: 'Authenticate to use CLI',
        });

        parent.addCommand(cmd);

        cmd.addCommand(() => require('./commands/user'));
        cmd.addCommand(() => require('./commands/aws'));
        cmd.addCommand(() => require('./commands/azure'));
        cmd.addCommand(() => require('./commands/google'));
    }),
};
