'use strict';

const Cli = require('lib/cli');

const path = require('path');
const fs = require('fs');

const logger = require('lib/logger');

const options = {
    name: {
        description: 'Certificate name',
        type: 'string',
        required: true,
    },
    sshkey: {
        description: 'Public SSH key ID or name',
        type: 'string',
    },
    'sshkey-file': {
        description: 'Public SSH key filename',
        type: 'string',
    },
};

module.exports = resource => Cli.createCommand('add', {
    dirname: __dirname,
    description: `Add ${resource.title}`,
    plugins: resource.plugins,
    params: resource.params,
    resource: resource,
    options: Object.assign({}, resource.options, options),
    handler: args => {

        if (!args.sshkey && !args['sshkey-file']) {
            return logger('error', 'please use --sshkey or --sshkey-file');
        }

        const body = {
            name: args.name,
            type: 'ssh',
            value: args.sshkey,
        };

        if (args['sshkey-file']) {
            const filename = path.resolve(args['sshkey-file']);

            if (!fs.existsSync(filename)) {
                throw Cli.error.notFound(`SSH key file not found: ${filename}`);
            }

            body.value = fs.readFileSync(filename, 'utf8');
        }

        return args.helpers.api
            .post(resource.url(args), body)
            .then(result => args.helpers.sendOutput(args, result));
    },
});
