
import { Command } from '@hyperone/cli-framework';

export default new Command({
    name: 'me',
    summary: 'Show details of current session',
    defaultQuery: '[].{aud:aud, iss:iss, sub:sub}',
    handler: async (opts) => {
        const resp = await opts.auth.introspection();
        return opts.format(resp);
    },
});
