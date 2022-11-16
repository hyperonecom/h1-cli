import { Command } from '@hyperone/cli-framework';
import { CliError } from '@hyperone/cli-framework/error.js';
import { getRelease, getFlavour } from '../release.js';
import os from 'os';
import fs from 'fs';
import path from 'path';
import stream from 'stream';
import child_process from 'child_process';
import util from 'util';

const execFile = util.promisify(child_process.execFile);
const pipelineAsync = util.promisify(stream.pipeline);

const downloadExtract = async (source_file, extract_dir) => {
    if (source_file.endsWith('.tar.gz')) {
        return execFile('tar', ['xf', source_file, '-C', extract_dir]);
    } else if (source_file.endsWith('.zip')) {
        return execFile('unzip', [source_file, '-d', extract_dir]);
    }
    throw new Error(`Unsupported archive type: ${source_file}`);
};

export default new Command({
    name: 'upgrade',
    summary: 'Upgrade CLI version and exit',
    options: [
        {
            name: 'prerelease',
            type: Boolean,
            description: 'Accept prerelease',
        },
    ],
    handler: async (opts, cmd) => {
        const filename = path.basename(process.execPath);
        const optsAll = opts._all || opts;
        const release = await getRelease(opts.http, optsAll.prerelease);
        if (!release) {
            throw new CliError('Unable to determine release. Try again later.');
        }
        if (!process.pkg) {
            throw new CliError('Only official release files can be updated. Please re-install CLI.');
        }
        const tmp_dir = await fs.promises.mkdtemp(path.join(os.tmpdir(), `${cmd.device.getName()}-`));
        const flavour = await getFlavour();
        const assetPrefix = `${cmd.device.getName()}-${flavour}`;
        const asset = release.assets.find(x => x.name.startsWith(assetPrefix));
        const asset_file = path.join(tmp_dir, asset.name);
        const out_stream = fs.createWriteStream(asset_file);
        const resp = await opts.http.get(asset.browser_download_url);
        await pipelineAsync(resp.body, out_stream);
        opts.logger.info(`Successfully downloaded archive: ${asset.name}`);

        await downloadExtract(asset_file, tmp_dir);
        opts.logger.info(`Successfully extracted archive: ${asset.name}`);

        await fs.promises.rename(process.execPath, path.join(tmp_dir, `${filename}-old`));
        opts.logger.info(`Archived old file: ${process.execPath}`);

        try {
            await fs.promises.rename(path.join(tmp_dir, filename), process.execPath);
            opts.logger.info(`Successfully saved new file: ${process.execPath}`);

        } catch (err) {
            opts.logger.info(`Saved new CLi failed: ${process.execPath}`);

            await fs.promises.rename(path.join(tmp_dir, `${filename}-old`), process.execPath);
            opts.logger.info(`Successfully rollback previous CLI: ${process.execPath}`);
        }
    },
});
