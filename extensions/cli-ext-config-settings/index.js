

import { Category } from '@hyperone/cli-framework';
import set from './commands/set';
import dump from './commands/dump';
import get from './commands/get';

export default {
    name: require('./package.json').name,
    version: require('./package.json').version,
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
