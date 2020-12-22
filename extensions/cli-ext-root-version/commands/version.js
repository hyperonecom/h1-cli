import { Command } from '@hyperone/cli-framework';

export default new Command({
    name: 'version',
    options: [
    ],
    handler: async (opts, cmd) => {
        return cmd.device.getVersion();
    },
});
