import { Category } from '@hyperone/cli-framework';

import list from './commands/list';
import install from './commands/install';
import uninstall from './commands/uninstall';

import info from './package.json';

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
