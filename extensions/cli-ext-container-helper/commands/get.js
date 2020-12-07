import { Command } from '@hyperone/cli-framework';

export default new Command({
    name: 'get',
    summary: 'Serve credential from Docker credential helper',
    options: [],
    handler: async (opts) => {
        const buf = [];
        const identity = await opts.auth.introspection();
        for await (const chunk of process.stdin) {
            buf.push(chunk);
        }
        const server_url = buf.toString('utf-8').trim();
        const token = await opts.auth.getToken(server_url.hostname);
        return JSON.stringify({
            ServerURL: server_url,
            Username: identity.sub,
            Secret: token,
        });
    },
});
