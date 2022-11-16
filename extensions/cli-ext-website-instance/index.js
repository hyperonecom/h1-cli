import { ssh, sftp } from '@hyperone/cli-generic-commands';
import info from './package.json' assert { type: 'json' };

export default {
    name: info.name,
    version: info.version,
    load: async (parent) => parent.loadHook.push(() => {
        const cmd = parent.commands.find(x => x.name === 'instance');
        cmd?.addCommand(() => ssh({
            name: `${parent.name}/${cmd.name}`,
            url: opts => `/website/pl-waw-1/project/${opts.project}/${cmd.name}/${opts.instance}`,
        }));
        cmd?.addCommand(() => sftp({
            name: `${parent.name}/${cmd.name}`,
            url: opts => `/website/pl-waw-1/project/${opts.project}/${cmd.name}/${opts.instance}`,
        }));
    }),
};
