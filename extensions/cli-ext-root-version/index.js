
import { Category } from '@hyperone/cli-framework';

import upgrade from './commands/check';
import check from './commands/upgrade';

export default {
    name: require('./package.json').name,
    version: require('./package.json').version,
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

