

import { Category } from '@hyperone/cli-framework';
import comply from './commands/comply';
import install from './commands/install';

export default {
    name: require('./package.json').name,
    version: require('./package.json').version,
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

