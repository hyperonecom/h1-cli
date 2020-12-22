

import version from './commands/version';

export default {
    name: require('./package.json').name,
    version: require('./package.json').version,
    load: async (parent) => parent.loadHook.push(() => {
        parent.addCommand(version);
    }),
};

