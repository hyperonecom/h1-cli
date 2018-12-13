'use strict';

const Cli = require('lib/cli');
const cryptography = require('lib/cryptography');

const options = {
    name: {
        description: 'Vault name',
        type: 'string',
        required: true,
    },
    size: {
        description: 'Vault size in GB',
        type: 'float',
        required: true,
    },
    ssh: {
        description: 'SSH key ID or name that allows access',
        type: 'string',
        required: false,
        action: 'append',
        defaultValue: [],
    },
    password: {
        description: 'Password to access Vault. Recommend using SSH keys',
        type: 'string',
        required: false,
    },
    snapshot: {
        description: 'Snapshot ID or name',
        type: 'string',
        required: false,
    },
};


module.exports = resource => Cli.createCommand('create', {
    description: `Create ${resource.title}`,
    plugins: resource.plugins,
    genericOptions: ['tag'],
    dirname: __dirname,
    priority: 25,
    options: Object.assign({}, options, resource.options),
    handler: args => {


        let passwords = [];

        if (args.password) {
            passwords = [Object.assign({name: 'initial-cli'}, cryptography.hashPassword(args.password))];
        }

        const certificates = args.ssh.map(x => ({
            name: x,
            type: 'ssh',
            value: x,
        }));

        const body = {
            name: args.name,
            size: args.size,
            tag: require('lib/tags').createTagObject(args.tag),
            credential: {
                password: passwords,
                certificate: certificates,
            },
        };

        if (args.snapshot) {
            body.snapshot = args.snapshot;
        }

        return args.helpers.api
            .post(resource.url(args), body)
            .then(result => args.helpers.sendOutput(args, result));
    },
});
