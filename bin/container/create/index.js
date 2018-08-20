'use strict';

const Cli = require('lib/cli');

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
            env: args.env,
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
