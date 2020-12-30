import { Command } from '@hyperone/cli-framework';

export default new Command({
    name: 'get',
    summary: 'Get setting value',
    options: [
        { name: 'key', required: true },
    ],
    handler: (opts, cmd) => {
        const optsAll = opts._all || opts;
        return cmd.config.get(optsAll.key);
    },
})