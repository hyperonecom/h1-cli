import { Command } from '@hyperone/cli-framework';

import { promises as fs } from 'node:fs';
import path from 'node:path';

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
            await fs.stat(outDir);
        } catch (err) {
            opts.logger.debug(`Not available ${outDir}`, err);
            return 'Operation not supported. Extension not installed locally.';
        }
        opts.logger.debug('Cleaning up old version of extension');
        await fs.rm(outDir, { recursive: true });
        return 'Extension successfully removed';
    },
});
