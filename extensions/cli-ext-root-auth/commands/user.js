
import { Command } from '@hyperone/cli-framework';

export default new Command({
    name: 'user',
    summary: 'Authenticate as user of Platform',
    options: [
        {
            name: 'username', required: true, use: {
                in: 'body',
                field: '/username',
            },
        },
        {
            name: 'password', required: true, use: {
                in: 'body',
                field: '/password',
            },
        },
    ],
    handler: async (opts) => {
        const openid_configuration = await opts.auth.getConfiguration();
        const token_endpoint = openid_configuration.token_endpoint;
        // const token_endpoint = openid_configuration.token_endpoint;
        const token = await opts.http.post(token_endpoint, {
            json: {
                grant_type: 'password',
                username: opts._all.username,
                password: opts._all.password,
                scope: 'offline_access',
            },
        });
        await opts.auth.updateToken(token);
        return 'Token successfully updated.';
    },
});
