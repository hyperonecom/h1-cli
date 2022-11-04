import {ssh, sftp} from '@hyperone/cli-generic-commands';
import info from './package.json';

export default {
    name: info.name,
    version: info.version,
    load: async (parent) => parent.loadHook.push(() => {
        const cmd = parent.commands.find(x => x.name === 'vault');
        cmd?.addCommand(() => ssh({
            name: 'storage/vault',
            url: opts => `/storage/pl-waw-1/project/${opts.project}/vault/${opts.vault}`,
        }));
        cmd?.addCommand(() => sftp({
            name: 'storage/vault',
            url: opts => `/storage/pl-waw-1/project/${opts.project}/vault/${opts.vault}`,
        }));
    }),
};
