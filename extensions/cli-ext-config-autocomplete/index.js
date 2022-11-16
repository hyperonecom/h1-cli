import { Category } from '@hyperone/cli-framework';
import comply from './commands/comply.js';
import install from './commands/install.js';

import info from './package.json' assert { type: 'json' };

export default {
    name: info.name,
    version: info.version,
    load: async (parent) => parent.loadHook.push(() => {
        const cmd = new Category({
            name: 'autocomplete',
            summary: 'Manage autocomplete of CLI',
        });
        parent.addCommand(cmd);

        cmd.loadHook.push(() => {
            cmd.addCommand(comply);
            cmd.addCommand(install);
        });
    }),
};

