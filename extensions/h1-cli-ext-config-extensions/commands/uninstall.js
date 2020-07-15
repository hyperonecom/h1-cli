'use strict';

const fs = require('fs');
const path = require('path');
const { remove } = require('fs-extra');
const { Command } = require('h1-cli-framework');

module.exports = new Command({
    name: 'uninstall',
    summary: 'Uninstall extension',
    options: [
        { name: 'extension', required: true, description: 'Extension name to install' },
    ],
    handler: async (opts, cmd) => {
        const optsAll = opts._all || opts;

        const outDir = path.join(cmd.device.extensionDir(), optsAll.extension);
        try {
            await fs.promises.stat(outDir)
        } catch (err) {
            opts.logger.debug(`Not available ${outDir}`, err);
            return `Operation not supported. Extension not installed locally.`;
        }
        opts.logger.debug(`Cleaning up old version of extension`);
        await remove(outDir);
        return `Extension successfully removed`;
    },
})