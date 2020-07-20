

import { Category } from '@hyperone/cli-framework';

import list from './commands/list';
import install from './commands/install';
import uninstall from './commands/uninstall';

export default {
    name: require('./package.json').name,
    version: require('./package.json').version,
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
