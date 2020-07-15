'use strict';

const tar = require('tar-fs');
const gunzip = require('gunzip-maybe');
const fs = require('fs');
const path = require('path');
const { remove } = require('fs-extra');
const { Command } = require('h1-cli-framework');
const npm = require('../npm');

const r = eval('require');

module.exports = new Command({
    name: 'install',
    summary: 'Install (or update) extension',
    options: [
        { name: 'extension', required: true, description: 'Extension name to install' },
        { name: 'version', required: true, description: 'Extension version to install', defaultValue: 'latest' },
    ],
    handler: async (opts, cmd) => {
        const optsAll = opts._all || opts;
        const client = npm(opts.http, 'http://localhost:4873/');
        const result = [];
        const detail = await client.showPackage(optsAll.extension, opts.version);
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
            ext = r(outDir);
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

        return opts.format(opts, result);
    },
});
