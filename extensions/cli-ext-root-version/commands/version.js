import { Command } from '@hyperone/cli-framework';

export default new Command({
    name: 'version',
    summary: 'Display CLI version and exit',
    handler: async (opts, cmd) => {
        return cmd.device.getVersion();
    },
});
