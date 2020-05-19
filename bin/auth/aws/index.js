'use strict';

const Cli = require('lib/cli');
const aws4 = require('aws4');

const https = require('https');

const sendRequest = opts => new Promise((resolve, reject) => {
    https.request({
        ...opts,
        timeout: 1000,
    }, (resp) => {
        const chunks = [];
        resp.
            on('data', chunk => chunks.push(chunk)).
            on('error', reject).
            on('end', () => resolve(Buffer.concat(chunks).toString('utf-8')));
    }).end(opts.body);
});

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
    let credential = {
        accessKeyId: args['access-key-id'],
        secretAccessKey: args['secret-access-key'],
        sessionToken:args['session-token'],
    };
    if (args.discovery) {
        const awsCredentialProvider = require('@aws-sdk/credential-provider-node');
        credential = await awsCredentialProvider.defaultProvider()();
    }
    console.log({credential});
    const opts = aws4.sign({
        service: 'sts',
        body: 'Action=GetCallerIdentity&Version=2011-06-15',
    }, credential);
    console.log({opts});
    const response = await sendRequest(opts);
    console.log(response);
    // return auth.introspection();
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
