import logger from './logger';
import stream from './stream';

import info from './package.json';

export default {
    name: info.name,
    version: info.version,
    load: async (parent) => parent.loadHook.push(() => {
        const cmd = parent.commands.find(x => x.name === 'journal');
        cmd?.addCommand(() => logger);
        cmd?.addCommand(() => stream);
    }),
};
