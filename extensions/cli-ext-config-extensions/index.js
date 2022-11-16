import { Category } from '@hyperone/cli-framework';

import list from './commands/list.js';
import install from './commands/install.js';
import uninstall from './commands/uninstall.js';

import info from './package.json' assert { type: 'json' };

export default {
    name: info.name,
    version: info.version,
    load: async (parent) => parent.loadHook.push(() => {
        const cmd = new Category({
            name: 'extension',
            summary: 'Manage extensions of CLI',
        });
        parent.addCommand(cmd);
        cmd.addCommand(() => list);
        cmd.addCommand(() => install);
        cmd.addCommand(() => uninstall);
    }),
};
