import { Command } from '@hyperone/cli-framework';
import fs from 'fs';
import path from 'path';
import { openapi } from '@hyperone/cli-core';

const get_config_path = () => {
    const docker_config_dir = process.env.DOCKER_CONFIG || path.join(require('os').homedir(), '.docker');
    return path.join(docker_config_dir, 'config.json');
};

const set_helper = async (hostname, helper) => {
    // Docker does not provide public interface
    // to edit helper
    // Similar approach is used by:
    // - Podman
    // - gcloud auth configure-docker
    const cpath = get_config_path();
    let cfg = {};
    await fs.promises.mkdir(path.dirname(cpath), {recursive: true});
    try {
        cfg = JSON.parse(await fs.promises.readFile(cpath, { encoding: 'utf-8' }));
    } catch (err) {
        if (err.code != 'ENOENT') throw err;
    }
    cfg.auths = cfg.auths || {};
    cfg.credHelpers = cfg.credHelpers || {};
    delete cfg.auths[hostname];
    cfg.credHelpers[hostname] = helper;
    await fs.promises.writeFile(cpath, JSON.stringify(cfg, null, 4), { encoding: 'utf-8' });
    return cpath;
};

export default new Command({
    name: 'setup',
    summary: 'Setup Docker credential helper for registry',
    options: [
        {
            name: 'project',
            description: 'Project ID',
            required: true,
        },
        {
            name: 'registry',
            description: 'Registry ID',
            required: true,
        },
        {
            name: 'location',
            description: 'Location ID',
            defaultValue: 'pl-waw-1',
        },
    ],
    handler: async (opts, cmd) => {
        const optsAll = opts._all || opts;
        const resource_resp = await opts.api.get(
            openapi.getUrl('/container/pl-waw-1/project/{projectId}/registry/{registryId}', {
                projectId: optsAll.project,
                registryId: optsAll.registry,
            })
        );
        const resource = resource_resp.bodyJson;
        await set_helper(resource.fqdn, cmd.device.getName());
        return `Configuration for registry '${resource.fqdn}' updated`;
    },
});
