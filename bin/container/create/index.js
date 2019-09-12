'use strict';

const Cli = require('lib/cli');
const registry = require('../registry');

const options = {
    name: {
        description: 'Container name',
        type: 'string',
        required: true,
    },
    image: {
        description: 'Container image eg. h1cr.io/website/php-apache',
        type: 'string',
        required: true,
    },
    type: {
        description: 'Container type',
        type: 'string',
        required: true,
    },
    expose: {
        description: 'Mapping port to expose to the world as external:internal',
        type: 'string',
        action: 'append',
        defaultValue: [],
        required: false,
    },
    env: {
        description: 'Add environment variable',
        type: 'string',
        action: 'append',
        defaultValue: [],
        required: false,
    },
    volume: {
        description: 'Attach a Volume as volumeId/volumePath:containerPath',
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
    description: `Create ${resource.title}`,
    plugins: resource.plugins,
    genericOptions: ['tag'],
    priority: 25,
    options: Object.assign({}, options, resource.options, registry.options),
    dirname: __dirname,
    handler: async args => {

        const body = {
            name: args.name,
            image: args.image,
            service: args.type,
            env: args.env,
            registry: await registry.parseArgs(args),
            volumes: args.volume.map(v => {
                const [sourceFull, target] = v.split(':');
                const [source, ...sourcePath] = sourceFull.split('/');

                return {
                    sourcePath: ['', ...sourcePath].join('/'),
                    source,
                    target,
                };
            }),
            expose: args.expose.map(x => {
                const [start, protocol] = x.split('/');
                const [internal, external] = start.split(':');
                return {
                    internal: internal,
                    external: external || internal,
                    protocol: protocol || 'tcp',
                };
            }),
            tag: require('lib/tags').createTagObject(args.tag),
        };

        if (args.command) {
            body.command = args.command;
        }

        return args.helpers.api
            .post(resource.url(args), body)
            .then(result => args.helpers.sendOutput(args, result));
    },
});
