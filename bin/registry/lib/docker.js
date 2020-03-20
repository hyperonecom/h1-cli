'use strict';
const process = require('process');
const fs = require('fs').promises;
const path = require('path');
const { Readable } = require('stream');
const { spawn } = require('child_process');

const get_config_path = () => {
    const docker_config_dir = process.env.DOCKER_CONFIG || path.join(require('os').homedir(), '.docker');
    return path.join(docker_config_dir, 'config.json');
};

const read_config = async (cpath) => JSON.parse(await fs.readFile(cpath, { encoding: 'utf-8' }));

const write_config = (cpath, cfg) => fs.writeFile(cpath, JSON.stringify(cfg, null, 4), { encoding: 'utf-8' });

const set_helper = async (hostname, helper) => {
    // Docker does not provide public interface
    // to edit helper
    // Similar approach is used by:
    // - Podman
    // - gcloud auth configure-docker
    const cpath = get_config_path();
    const cfg = await read_config(cpath).catch(() => { });
    cfg.auths = cfg.auths || {};
    cfg.credHelpers = cfg.credHelpers || {};
    delete cfg.auths[hostname];
    cfg.credHelpers[hostname] = helper;
    await write_config(cpath, cfg);
    return cpath;
};

const set_token = async (hostname, username, password) => new Promise((resolve, reject) => {
    const argv = [
        'login', '--password-stdin', '--username', username, hostname,
    ];
    const docker = spawn('docker', argv, {
        stdio: [
            'pipe',
            'inherit',
            'inherit',
        ],
    });
    Readable.from([password]).pipe(docker.stdin);
    docker.on('close', code => {
        if (code !== 0) {
            return reject(new Error(`Process exited with code ${code}`));
        }
        return resolve(code);
    });
    docker.on('error', reject);
});

module.exports = {
    set_helper,
    set_token,
};

