

import select from './select';
import sa_generate from './sa_generate';

const lazyAdd = (cmd, names, handler) => {
    if (names.length === 1) {
        return cmd.loadHook.push(() => {
            const child = cmd.commands.find(x => x.name === names[0]);
            child.addCommand(handler);
        });
    }
    cmd.loadHook.push(() => {
        const child = cmd.commands.find(x => x.name === names[0]);
        if (!child) {
            return;
        }
        child.loadHook.push(() => lazyAdd(child, names.slice(1), handler));
    });
};

export default {
    name: require('./package.json').name,
    version: require('./package.json').version,
    load: async (parent) => parent.loadHook.push(() => {
        lazyAdd(parent, ['project'], () => select);
        lazyAdd(parent, ['project', 'sa', 'credential'], () => sa_generate);
    }),
};
