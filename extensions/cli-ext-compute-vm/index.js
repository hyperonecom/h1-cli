import {name, version} from './package.json';
import ssh from './ssh';

export default {
    name,
    version,
    load: async (parent) => parent.loadHook.push(() => {
        const cmd = parent.commands.find(x => x.name === 'vm');
        cmd?.addCommand(() => ssh);
    }),
};
