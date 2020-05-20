'use strict';

const Cli = require('lib/cli');

const auth = require('lib/auth');

const options = {
    token: {
        description: 'Google ID token',
        type: 'string',
    },
    discovery: {
        description: 'Use standard Google mechanisms to find credential',
        type: 'boolean',
    },
};

const handler = async args => {
    Cli.mutually_exclusive_validate(args, 'token', 'discovery');
    if (args.discovery) {
        const { GoogleAuth } = require('google-auth-library');
        const auth = new GoogleAuth({
            scopes: ['openid'],
        });
        const client = await auth.getClient();
        const accessToken = await client.getAccessToken();
        args.token = accessToken.token;
    }
    await auth.federate(args.token, {
        subject_token_type: 'gcp-access-token',
    });
    return auth.introspection();
};

module.exports = Cli.createCommand('google', {
    dirname: __dirname,
    description: 'Authenticate using Google identity',
    plugins: [
        require('bin/_plugins/api'),
    ],
    priority: 10,
    options: options,
    handler: handler,
});
