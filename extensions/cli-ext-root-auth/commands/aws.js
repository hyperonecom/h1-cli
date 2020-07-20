
import { Command } from '@hyperone/cli-framework';
import awsCredentialProvider from '@aws-sdk/credential-provider-node';
export default new Command({
    name: 'aws',
    summary: 'Authenticate using AWS identity',
    options: [
        {
            name: 'access-key-id',
            description: 'AWS Access Key Id',
            type: String,
        },
        {
            name: 'secret-access-key',
            description: 'AWS Secret Access Key (only used to generate a signature)',
            type: String,
        },
        {
            name: 'session-token',
            description: 'AWS Session Token',
            type: String,
        },
        {
            name: 'discovery',
            description: 'Use standard AWS mechanisms to find credential',
            type: Boolean,
        },
    ],
    handler: async (opts) => {
        const optsAll = opts._all || opts;
        const aws4 = require('aws4');
        let credential = {
            accessKeyId: optsAll['access-key-id'],
            secretAccessKey: optsAll['secret-access-key'],
            sessionToken: optsAll['session-token'],
        };

        if (optsAll.discovery) {
            try {
                credential = await awsCredentialProvider.defaultProvider()();
            } catch (err) {
                throw new Error('None of the supported AWS credential discovery forms have succeeded.');
            }
        }

        const request = aws4.sign({
            service: 'sts',
            body: 'Action=GetCallerIdentity&Version=2011-06-15',
        }, credential);

        const token = Buffer.from(JSON.stringify(request)).toString('base64');
        await opts.auth.federate(token, {
            subject_token_type: 'aws-caller-identity',
        });
        return opts.auth.introspection();
    },
});
