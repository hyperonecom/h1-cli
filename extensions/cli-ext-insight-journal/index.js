

import logger from './logger';
import stream from './stream';

export default {
    name: require('./package.json').name,
    version: require('./package.json').version,
    load: async (parent) => parent.loadHook.push(() => {
        const cmd = parent.commands.find(x => x.name === 'journal');
        cmd?.addCommand(() => logger);
        cmd?.addCommand(() => stream);
    }),
};
