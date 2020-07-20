'use strict';

const { Category } = require('@hyperone/cli-framework');

module.exports = {
    name: require('./package.json').name,
    version: require('./package.json').version,
    load: async (parent) => parent.loadHook.push(() => {
        const cmd = new Category({
            name: 'extension',
            summary: 'Manage extensions of CLI',
        });
        parent.addCommand(cmd);
        cmd.addCommand(() => require('./commands/list'));
        cmd.addCommand(() => require('./commands/install'));
        cmd.addCommand(() => require('./commands/uninstall'));
    }),
};
