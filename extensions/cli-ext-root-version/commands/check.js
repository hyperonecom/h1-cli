import { Command } from '@hyperone/cli-framework';
import { CliError } from '@hyperone/cli-framework/error.js';
import packageInfo from '@hyperone/cli-core/package.json' assert { type: 'json'};
import semverGt from 'semver/functions/gt.js';
import { getRelease } from '../release.js';

export default new Command({
    name: 'check',
    summary: 'Check CLI version and exit',
    description: 'Set non-zero exit code if there is pending upgrades.',
    options: [
        {
            name: 'prerelease',
            type: Boolean,
            description: 'Accept prerelease',
        },
    ],
    handler: async (opts) => {
        const optsAll = opts._all || opts;
        const release = await getRelease(opts.http, optsAll.prerelease);
        if (!release) {
            throw new CliError('Unable to determine release. Try again later.');
        }
        opts.logger.debug(`Installed version: ${packageInfo.version}`);
        opts.logger.debug(`Latest version: ${release.tag_name}`);
        if (semverGt(release.tag_name, packageInfo.version)) {
            throw new CliError('Pending updates are available. Please upgrade as soon as possible.');
        }
        return 'Congratulations! You are using the latest version.';
    },
});
