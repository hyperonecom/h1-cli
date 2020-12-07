import { Command } from '@hyperone/cli-framework';

export default new Command({
    name: 'store',
    summary: 'Store credential in Docker credential helper',
    options: [],
    handler: async () => {
        throw new Error('Operation unsupported. You no need to login when credential helper in use.');
    },
});
