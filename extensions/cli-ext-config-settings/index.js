import { Category } from '@hyperone/cli-framework';
import set from './commands/set.js';
import dump from './commands/dump.js';
import get from './commands/get.js';

import info from './package.json' assert { type: 'json' };

export default {
    name: info.name,
    version: info.version,
    load: async (parent) => parent.loadHook.push(() => {
        const cmd = new Category({
            name: 'settings',
            summary: 'Manage settings of CLI',
        });
        parent.addCommand(cmd);
        cmd.loadHook.push(() => {
            cmd.addCommand(set);
            cmd.addCommand(dump);
            cmd.addCommand(get);
        });
    }),
};
