'use strict';

module.exports = {
    name: __dirname.split('/').pop(),
    load: async (parent) => parent.loadHook.push(() => {
        const cmd = parent.commands.find(x => x.name == 'project');
        cmd.addCommand(() => require('./select'));
    }),
};
