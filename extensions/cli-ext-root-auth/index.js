import { Category } from '@hyperone/cli-framework';

import user from './commands/user';
import aws from './commands/aws';
import azure from './commands/azure';
import google from './commands/google';
import me from './commands/me';

import info from './package.json';

export default {
    name: info.name,
    version: info.version,
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
