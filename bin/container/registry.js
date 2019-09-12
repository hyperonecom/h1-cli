'use strict';
const path = require('path');
const os = require('os');
const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);

const options = {
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
        description: 'Use credentials to access container registry from .dockercfg',
        type: 'boolean',
        required: false,
        defaultValue: false,
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
const parseArgs = async args => {
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
            content = await readFile(config, { encoding: 'utf-8' });
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
module.exports = {
    parseArgs,
    options,
};
