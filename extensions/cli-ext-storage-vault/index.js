

const {ssh, sftp} = require('@hyperone/cli-generic-commands');

export default {
    name: require('./package.json').name,
    version: require('./package.json').version,
    load: async (parent) => parent.loadHook.push(() => {
        const cmd = parent.commands.find(x => x.name == 'vault');
        cmd.addCommand(() => ssh({
            name: 'storage/vault',
            url: opts => `/storage/pl-waw-1/project/${opts.project}/vault/${opts.vault}`,
        }));
        cmd.addCommand(() => sftp({
            name: 'storage/vault',
            url: opts => `/storage/pl-waw-1/project/${opts.project}/vault/${opts.vault}`,
        }));
    }),
};
