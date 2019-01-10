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
    ['registry-username']: {
        description: 'Username to access Docker Registry',
        type: 'string',
        required:false,
    },
    ['registry-password']: {
        description: 'Username to access Docker Registry',
        type: 'string',
        required:false,
    },
    expose: {
        description: 'Mapping port to expose to the world as internal:external',
        type: 'string',
        required: false,
        action: 'append',
    },
    env: {
        description: 'Add environment variable',
        type: 'string',
        action: 'append',
        defaultValue: [],
        required: false,
    },
    volumes: {
        description: 'Attach a volume as volumeId/volumePath:imagePath',
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
    genericOptions: ['tag' ],
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
            ports: args.expose.map(p => {
                const parts = p.split(':');
                const internal = parseInt(parts[0]);
                const external= parseInt(parts[1] || parts[1]);
                return {
                    internal: internal,
                    external: external,
                };
            }),
            tag: require('lib/tags').createTagObject(args.tag),
        };

        if (args['registry-username']) {
            body.registry = {
                username: args['registry-username'],
                password: args['registry-password'],
            };
        }

        return args.helpers.api
            .post(resource.url(args), body)
            .then(result => args.helpers.sendOutput(args, result));
    },
});
