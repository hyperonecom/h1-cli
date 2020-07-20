

import select from './select';
export default {
    name: require('./package.json').name,
    version: require('./package.json').version,
    load: async (parent) => parent.loadHook.push(() => {
        const cmd = parent.commands.find(x => x.name == 'project');
        cmd.addCommand(() => select);
    }),
};
