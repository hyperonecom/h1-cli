import { Command } from '@hyperone/cli-framework';

export default new Command({
    name: 'dump',
    summary: 'Dump all settings values',
    handler: async (opts, cmd) => opts.format(await cmd.config.all()),
});
