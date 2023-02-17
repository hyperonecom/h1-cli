import info from './package.json' assert { type: 'json' };
import password_reset from './password_reset.js';
import ssh from './ssh.js';

export default {
    name: info.name,
    version: info.version,
    load: async (parent) => parent.loadHook.push(() => {
        const cmd = parent.commands.find(x => x.name === 'vm');
        cmd?.addCommand(() => ssh);
        cmd?.addCommand(() => password_reset);
    }),
};
