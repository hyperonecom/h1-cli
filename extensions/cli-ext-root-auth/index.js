import { Category } from '@hyperone/cli-framework';

import user from './commands/user.js';
import aws from './commands/aws.js';
import azure from './commands/azure.js';
import google from './commands/google.js';
import me from './commands/me.js';

import info from './package.json' assert { type: 'json' };

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
