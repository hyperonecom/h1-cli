import { Category } from '@hyperone/cli-framework';
import set from './commands/set';
import dump from './commands/dump';
import get from './commands/get';

import info from './package.json';

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
