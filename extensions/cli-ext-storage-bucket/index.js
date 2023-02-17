import upload from './upload.js';

import info from './package.json' assert { type: 'json' };

export default {
    name: info.name,
    version: info.version,
    load: async (parent) => parent.loadHook.push(() => {
        const cmd = parent.commands.find(c => c.name === 'bucket');
        cmd?.addCommand(upload);
    }),
};
