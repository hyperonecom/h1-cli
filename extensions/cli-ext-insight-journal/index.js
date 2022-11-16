import logger from './logger.js';
import stream from './stream.js';

import info from './package.json' assert { type: 'json' };

export default {
    name: info.name,
    version: info.version,
    load: async (parent) => parent.loadHook.push(() => {
        const cmd = parent.commands.find(x => x.name === 'journal');
        cmd?.addCommand(() => logger);
        cmd?.addCommand(() => stream);
    }),
};
