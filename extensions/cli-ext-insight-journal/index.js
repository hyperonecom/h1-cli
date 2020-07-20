'use strict';

module.exports = {
    name: require('./package.json').name,
    version: require('./package.json').version,
    load: async (parent) => parent.loadHook.push(() => {
        const cmd = parent.commands.find(x => x.name == 'journal');
        cmd.addCommand(() => require('./logger'));
        cmd.addCommand(() => require('./stream'));
    }),
};