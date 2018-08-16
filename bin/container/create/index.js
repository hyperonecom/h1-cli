'use strict';

const Cli = require('lib/cli');
const fs = require('fs');

const options = {
    name: {
        description: 'Name',
        type: 'string',
        required: true,
    },
    image: {
        description: 'Image',
        type: 'string',
        required: true,
    },
    type: {
        description: 'Type',
        type: 'string',
        required: true,
    },
    expose: {
        description: 'Port to expose to the world using http/https',
        type: 'int',
        required: false,
    },
    env: {
        description: 'Add enviroment variable',
        type: 'string',
        action: 'append',
        defaultValue: [],
        required: false,
    },
    'env-file': {
        description: 'Read from a file of environment variables',
        type: 'string',
    },
    vault: {
        description: 'Bind mount a vault',
        type: 'string',
        action: 'append',
        defaultValue: [],
        required: false,
    },
    command: {
        description: 'Override the default command',
        type: 'string',
        required: false,
    },
};

function parse_env_vars(args) {
    const env = {};

    args.env.forEach(value => {
        const [k, v] = value.split('=');
        env[k] = v;
    });

    if (args['env-file']) {
        fs.readFileSync(args['env-file']).toString().split('\n').forEach(value => {
            const [k, v] = value.split('=');
            env[k] = v;
        });
    }
    return env;
}

module.exports = resource => Cli.createCommand('create', {
    description: `${resource.title} create`,
    plugins: resource.plugins,
    options: Object.assign({}, options, resource.options),
    handler: args => {

        const body = {
            name: args.name,
            image: args.image,
            service: args.type,
            expose: args.expose,
            env: parse_env_vars(args),
            command: args.command,
            volumes: args.vault.map(v => {
                const [sourceFull, target] = v.split(':');
                const [source, ...sourcePath] = sourceFull.split('/');

                return {
                    sourcePath: ['', ...sourcePath].join('/'),
                    source,
                    target,
                };
            }),
        };

        return args.helpers.api
            .post(resource.url(args), body)
            .then(result => args.helpers.sendOutput(args, result));
    },
});
