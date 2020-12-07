import { Command } from '@hyperone/cli-framework';

export default new Command({
    name: 'erase',
    summary: 'Erase credential in Docker credential helper',
    options: [],
    handler: async () => {
        throw new Error('Operation unsupported. Not apply to credential helper.');
    },
});
