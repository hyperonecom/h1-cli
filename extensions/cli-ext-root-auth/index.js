

import { Category } from '@hyperone/cli-framework';

import user from './commands/user';
import aws from './commands/aws';
import azure from './commands/azure';
import google from './commands/google';
import me from './commands/me';

export default {
    name: require('./package.json').name,
    version: require('./package.json').version,
    load: async (parent) => parent.loadHook.push(() => {

        const cmd = new Category({
            name: 'auth',
            summary: 'Authenticate to use CLI',
        });

        parent.addCommand(cmd);
        cmd.addCommand(() => me);
        cmd.addCommand(() => user);
        cmd.addCommand(() => aws);
        cmd.addCommand(() => azure);
        cmd.addCommand(() => google);
    }),
};
