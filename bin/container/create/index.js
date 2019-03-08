'use strict';

const Cli = require('lib/cli');
const os = require('os');
const path = require('path');
const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);

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
        description: 'Username to access container registry',
        type: 'string',
        required: false,
    },
    ['registry-password']: {
        description: 'Username to access container registry',
        type: 'string',
        required: false,
    },
    ['registry-dockercfg']: {
        description: 'Use credentials from .dockercfg',
        type: 'boolean',
        required: false,
        defaultValue: false,
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
        description: 'Attach a volume as volumeId/volumePath:containerPath',
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

const config_files = [
    path.join(process.cwd(), '.dockercfg'),
    path.join(os.homedir(), '.dockercfg'),
    path.join(os.homedir(), '.docker/config.json'),
];

const getRegistryName = args => {
    const parts = args.image.split('/');
    if (parts.length > 1) {
        return parts[0];
    }
};
const getRegistry = async args => {
    const registry_name = getRegistryName(args);

    if (!registry_name) {
        return;
    }

    if (args['registry-username']) {
        return {
            username: args['registry-username'],
            password: args['registry-password'],
        };
    }

    if (!args['registry-dockercfg']) {
        return;
    }

    for (const config of config_files) {
        let content;
        try {
            content = await readFile(config, {encoding: 'utf-8'});
        } catch (err) {
            continue;
        }
        const dockercfg = JSON.parse(content);

        if (!dockercfg.auths || !dockercfg.auths[registry_name] || !dockercfg.auths[registry_name].auth) continue;

        return {
            token: dockercfg.auths[registry_name].auth,
        };
    }

};

module.exports = resource => Cli.createCommand('create', {
    description: `${resource.title} create`,
    plugins: resource.plugins,
    genericOptions: ['tag'],
    options: Object.assign({}, options, resource.options),
    dirname: __dirname,
    handler: async args => {
        const registry = await getRegistry(args);

        const body = {
            name: args.name,
            image: args.image,
            service: args.type,
            env: args.env,
            command: args.command,
            volumes: args.volume.map(v => {
                const [sourceFull, target] = v.split(':');
                const [source, ...sourcePath] = sourceFull.split('/');

                return {
                    sourcePath: ['', ...sourcePath].join('/'),
                    source,
                    target,
                };
            }),
            expose: args.expose.map(p => {
                const parts = p.split(':');
                const external = parseInt(parts[0]);
                const internal = parseInt(parts[1] || parts[0]);
                return {
                    external: `${external}/tcp`,
                    internal: `${internal}/tcp`,
                };
            }),
            tag: require('lib/tags').createTagObject(args.tag),
        };

        if (registry) {
            body.registry = registry;
        }

        return args.helpers.api
            .post(resource.url(args), body)
            .then(result => args.helpers.sendOutput(args, result));
    },
});
