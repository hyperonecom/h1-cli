

import fs from 'fs';
import path from 'path';
import { remove } from 'fs-extra';
import { Command } from '@hyperone/cli-framework';

export default new Command({
    name: 'uninstall',
    summary: 'Uninstall extension',
    options: [
        { name: 'extension', required: true, description: 'Extension name to install' },
    ],
    handler: async (opts, cmd) => {
        const optsAll = opts._all || opts;

        const outDir = path.join(cmd.device.extensionDir(), optsAll.extension);
        try {
            await fs.promises.stat(outDir);
        } catch (err) {
            opts.logger.debug(`Not available ${outDir}`, err);
            return 'Operation not supported. Extension not installed locally.';
        }
        opts.logger.debug('Cleaning up old version of extension');
        await remove(outDir);
        return 'Extension successfully removed';
    },
});
