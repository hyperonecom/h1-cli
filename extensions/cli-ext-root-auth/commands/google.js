
import { Command } from '@hyperone/cli-framework';
import { GoogleAuth } from 'google-auth-library';

export default new Command({
    name: 'google',
    summary: 'Authenticate using Google identity',
    options: [
        {
            name: 'token',
            description: 'Google Access token',
            type: String,
        },
        {
            name: 'discovery',
            description: 'Use standard Google mechanisms to find credential',
            type: Boolean,
        },
    ],
    handler: async (opts) => {
        const optsAll = opts._all || opts;
        if (optsAll.discovery) {
            const auth = new GoogleAuth({
                scopes: ['openid'],
            });
            const client = await auth.getClient();
            const accessToken = await client.getAccessToken();
            optsAll.token = accessToken.token;
        }
        await opts.auth.federate(optsAll.token, {
            subject_token_type: 'gcp-access-token',
        });
        return 'Token successfully updated.';
    },
});
