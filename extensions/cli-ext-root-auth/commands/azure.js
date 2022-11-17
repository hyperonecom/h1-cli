import { Command } from '@hyperone/cli-framework';
import { DefaultAzureCredential } from '@azure/identity';
const generic_scope = 'https://management.azure.com';

export default new Command({
    name: 'azure',
    summary: 'Authenticate using Azure identity',
    options: [
        {
            name: 'token',
            description: 'Azure Access token',
            type: String,
        },
        {
            name: 'discovery',
            description: 'Use standard Azure mechanisms to find credential',
            type: Boolean,
        },
    ],
    handler: async (opts) => {
        const optsAll = opts._all || opts;
        if (optsAll.discovery) {
            const credential = new DefaultAzureCredential();
            const access_token = await credential.getToken(generic_scope);
            optsAll.token = access_token.token;
        }
        await opts.auth.federate(optsAll.token);
        return 'Token successfully updated.';
    },
});
