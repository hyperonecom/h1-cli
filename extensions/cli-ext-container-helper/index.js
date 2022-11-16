import { Category } from '@hyperone/cli-framework';
import install from './commands/install.js';
import setup from './commands/setup.js';
import get from './commands/get.js';
import store from './commands/store.js';
import erase from './commands/erase.js';

import info from './package.json' assert { type: 'json' };

export default {
    name: info.name,
    version: info.version,
    load: async (parent) => parent.loadHook.push(() => {
        const cmd = parent.commands.find(x => x.name === 'registry');
        const category = new Category({
            name: 'helper',
            summary: 'Manage Docker credential helper',
        });
        cmd?.addCommand(category);
        cmd?.loadHook.push(() => {
            category.addCommand(() => install);
            category.addCommand(() => setup);
            category.addCommand(() => get);
            category.addCommand(() => store);
            category.addCommand(() => erase);
        });
    }),
};
