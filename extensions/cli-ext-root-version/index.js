import { Category } from '@hyperone/cli-framework';

import upgrade from './commands/check';
import check from './commands/upgrade';

import info from './package.json';

export default {
    name: info.name,
    version: info.version,
    load: async (parent) => parent.loadHook.push(() => {
        const cmd = new Category({
            name: 'version',
            summary: 'Manage version of CLI',
        });
        parent.addCommand(cmd);
        cmd.loadHook.push(() => {
            cmd.addCommand(upgrade);
            cmd.addCommand(check);
        });
    }),
};

