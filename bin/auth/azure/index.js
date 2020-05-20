'use strict';

const Cli = require('lib/cli');

// const logger = require('lib/logger');
const auth = require('lib/auth');

const options = {
    token: {
        description: 'Azure Access token',
        type: 'string',
    },
    discovery: {
        description: 'Use standard Azure mechanisms to find credential',
        type: 'boolean',
    },
};

const generic_scope = 'https://management.azure.com';

const handler = async args => {
    Cli.mutually_exclusive_validate(args, 'token', 'discovery');
    if (args.discovery) {
        const { DefaultAzureCredential } = require('@azure/identity');
        const credential = new DefaultAzureCredential();
        const access_token = await credential.getToken(generic_scope);
        args.token = access_token.token;
    }
    await auth.federate(args.token);
    return auth.introspection();
};

module.exports = Cli.createCommand('azure', {
    dirname: __dirname,
    description: 'Authenticate using Azure identity',
    plugins: [
        require('bin/_plugins/api'),
    ],
    priority: 10,
    options: options,
    handler: handler,
});
