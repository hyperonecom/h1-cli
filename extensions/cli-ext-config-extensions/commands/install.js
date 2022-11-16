

import tar from 'tar-fs';
import gunzip from 'gunzip-maybe';
import fs from 'fs';
import path from 'path';
import { remove } from 'fs-extra';
import { Command } from '@hyperone/cli-framework';
import npm from '../npm.js';

export default new Command({
    name: 'install',
    summary: 'Install (or update) extension',
    options: [
        { name: 'extension', required: true, description: 'Extension name to install' },
        { name: 'required', required: true, description: 'Extension version required to install', defaultValue: 'latest' },
    ],
    handler: async (opts, cmd) => {
        const optsAll = opts._all || opts;
        const client = npm(opts.http, 'https://registry.npmjs.org/');
        const result = [];
        if (!opts.required) {
            const versions = await client.listVersions(optsAll.extension);
            opts.required = versions.latest;
        }
        const detail = await client.showPackage(optsAll.extension, opts.required);
        opts.logger.info(`Installing '${detail.name}' in version '${detail.version}'`);
        const outDir = path.join(cmd.device.extensionDir(), detail.name);

        opts.logger.debug('Cleaning up old version of extension');
        await remove(outDir);

        opts.logger.debug(`Creating director '${outDir}'`);
        await fs.promises.mkdir(outDir, { recursive: true });

        opts.logger.debug('Downloading extension');

        const inStream = await opts.http.download(detail.dist.tarball);
        const outStream = tar.extract(outDir, {
            map: (header) => {
                header.name = header.name.replace(/^package\//, '');
                opts.logger.debug('Extracted file/directory: ', header.name);
                return header;
            },
        });

        await new Promise((resolve, reject) => inStream
            .pipe(gunzip())
            .on('error', reject)
            .pipe(outStream)
            .on('finish', resolve)
            .on('error', reject)
        );

        opts.logger.info('Extension successfully downloaded');
        opts.logger.info('Extension validation...');

        let ext;
        try {
            ext = await import(path.join(outDir, 'index.js'));
            for (const prop of ['name', 'load', 'version']) {
                if (!ext[prop]) {
                    throw new Error(`Invalid extension. Missing '${prop}' property.`);
                }
            }
        } catch (err) {
            opts.logger.debug(err);
            // opts.logger.info(`Extension invalid. Extension removing.`);
            // await remove(outDir);
            throw new Error('Installation of extension failed.');
        }

        opts.logger.info('Extension validated successfully.');

        result.push({
            name: detail.name,
            remoteVersion: detail.version,
            localVersion: ext.version,
        });

        opts.defaultQuery = '[].{name: name, version: version}';

        return opts.format(result);
    },
});
