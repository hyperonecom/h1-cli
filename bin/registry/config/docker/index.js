'use strict';
const config = require('lib/config');

const { exec } = require('child_process');

const Cli = require('lib/cli');
const mode = ['helper', 'token'];
const docker = require('../../lib/docker');

const options = {
    mode: {
        type: 'string',
        choices: mode,
        defaultValue: mode[0],
    },
};

const setupCredentialHelper = async (args, registry) => {
    const helper = `${config.scope().toLowerCase()}-login`;
    const bin = `docker-credential-${helper}`;

    try {
        await exec(bin);
    } catch (err) {
        throw Cli.error.cancelled(`Unable to start '${bin}'. Verify CLI installation.`);
    }

    console.log(`Credential helper '${bin}' available. Going to update configuration`);
    const cpath = await docker.set_helper(registry.fqdn, helper);
    console.log(`Configuration '${cpath}' updated to support credential helper for '${registry.name}'`);
};

const setupToken = async (args, registry) => {
    try {
        await exec('docker');
    } catch (err) {
        throw Cli.error.cancelled('Unable to start \'docker\'. Verify Docker CLI installation.');
    }
    const token = args.helpers.api.getToken(registry.fqdn);
    await docker.set_token(
        registry.fqdn,
        config.get('auth.identity'),
        token
    );
    console.log(`Successfully configured token for registry '${registry.name}'`);
};

module.exports = resource => Cli.createCommand('docker', {
    description: 'Update Docker-CLI configuration for credentials',
    plugins: resource.plugins,
    params: resource.params,
    options: Object.assign({}, resource.options, options),
    handler: async args => {
        const registry = await args.helpers.api.get(resource.url(args));
        if (args.mode === mode[0]) {
            await setupCredentialHelper(args, registry);
        } else {
            await setupToken(args, registry);
        }
        console.log(`Use 'docker push ${registry.fqdn}/image_name' to create image`);
    },
});
