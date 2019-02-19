'use strict';

const Cli = require('lib/cli');
const fs = require('fs');

const options = {
    name: {
        description: 'Agent name',
        type: 'string',
        required: true,
    },
    type: {
        description: 'Agent type name or ID',
        type: 'string',
        required: true,
    },
    ssh: {
        description: 'SSH key ID or name that allows access',
        type: 'string',
        required: false,
        action: 'append',
        defaultValue: [],
    },
    'ssh-file': {
        action: 'append',
        description: 'Read SSH key from file',
        type: 'string',
    },
};


module.exports = resource => Cli.createCommand('create', {
    description: `Create ${resource.title}`,
    plugins: resource.plugins,
    genericOptions: ['tag'],
    dirname: __dirname,
    priority: 25,
    options: Object.assign({}, options, resource.options),
    handler: async args => {
        const certificates = args.ssh.map(x => ({
            name: x,
            type: 'ssh',
            value: x,
        }));

        if (args['ssh-file']) {
            certificates.push(
                ...await Promise.all(
                    args['ssh-file'].map(fs.getFileContent)
                ).then(keys => keys.map(x => x.toString('utf-8')))
            );
        }
        const body = {
            name: args.name,
            type: args.type,
            tag: require('lib/tags').createTagObject(args.tag),
            credential: {
                certificate: certificates,
            },
        };


        return args.helpers.api
            .post(resource.url(args), body)
            .then(result => args.helpers.sendOutput(args, result));
    },
});
