import select from './select.js';
import sa_generate from './sa_generate.js';

const lazyAdd = (cmd, names, handler) => {
    if (names.length === 1) {
        return cmd.loadHook.push(() => {
            const child = cmd.commands.find(x => x.name === names[0]);
            child.addCommand(handler);
        });
    }
    cmd.loadHook.push(() => {
        const child = cmd.commands.find(x => x.name === names[0]);
        child?.loadHook.push(() => lazyAdd(child, names.slice(1), handler));
    });
};

import info from './package.json' assert { type: 'json' };

export default {
    name: info.name,
    version: info.version,
    load: async (parent) => parent.loadHook.push(() => {
        lazyAdd(parent, ['project'], () => select);
        lazyAdd(parent, ['project', 'sa', 'credential'], () => sa_generate);
    }),
};
