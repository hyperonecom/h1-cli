'use strict';

const Cli = require('lib/cli');

const auth = require('lib/auth');

const options = {
    'access-key-id': {
        description: 'AWS Access Key Id',
        type: 'string',
    },
    'secret-access-key': {
        description: 'AWS Secret Access Key (only used to generate a signature)',
        type: 'boolean',
    },
    'session-token': {
        description: 'AWS Session Token',
        type: 'boolean',
    },
    discovery: {
        description: 'Use standard AWS mechanisms to find credential',
        type: 'boolean',
    },
};

const handler = async args => {
    Cli.mutually_exclusive_validate(args, 'access-key-id', 'discovery');
    const aws4 = require('aws4');
    let credential = {
        accessKeyId: args['access-key-id'],
        secretAccessKey: args['secret-access-key'],
        sessionToken:args['session-token'],
    };

    if (args.discovery) {
        const awsCredentialProvider = require('@aws-sdk/credential-provider-node');
        credential = await awsCredentialProvider.defaultProvider()();
    }

    const opts = aws4.sign({
        service: 'sts',
        body: 'Action=GetCallerIdentity&Version=2011-06-15',
        headers: {
            Accept: 'application/json',
        },
    }, credential);
    const token = Buffer.from(JSON.stringify(opts)).toString('base64');
    await auth.federate(token, {
        subject_token_type: 'aws-caller-identity',
    });

    return auth.introspection();
};

module.exports = Cli.createCommand('aws', {
    dirname: __dirname,
    description: 'Authenticate using AWS identity',
    plugins: [
        require('bin/_plugins/api'),
    ],
    priority: 10,
    options: options,
    handler: handler,
});
