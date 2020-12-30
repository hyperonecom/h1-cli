import { Command } from '@hyperone/cli-framework';

export default new Command({
    name: 'set',
    summary: 'Set setting value',
    options: [
        { name: 'key', required: true },
        { name: 'value', required: true },
    ],
    handler: async (opts, cmd) => {
        const { config } = cmd;
        const optsAll = opts._all || opts;
        await config.set(optsAll.key, optsAll.value);
        await config.store();
        return 'Configuration option set';
    },
});
