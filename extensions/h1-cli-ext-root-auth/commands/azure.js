'use strict';
const { Command } = require('h1-cli-framework');

const generic_scope = 'https://management.azure.com';

module.exports = new Command({
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
            const { DefaultAzureCredential } = require('@azure/identity');
            const credential = new DefaultAzureCredential();
            const access_token = await credential.getToken(generic_scope);
            optsAll.token = access_token.token;
        }
        await opts.auth.federate(optsAll.token);
        return opts.auth.introspection();
    },
});
