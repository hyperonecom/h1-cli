

import npm from '../npm';
import { Command } from '@hyperone/cli-framework';


export default new Command({
    name: 'list',
    summary: 'List available and installed extensions',
    handler: async (opts, cmd) => {
        const client = npm(opts.http, 'https://registry.npmjs.org/');

        const result = [];
        const pkgs = await client.listPackages('@hyperone/cli-ext');

        const installed_extensions = await cmd.device.importExtension('@hyperone/cli-ext');

        for (const pkg of pkgs.objects) {
            if (!pkg.package.name.startsWith('@hyperone/cli-ext')) {
                continue;
            }
            const versions = await client.listVersions(pkg.package.name);
            const installed = installed_extensions.find(x => x.name == pkg.package.name);

            result.push({
                name: pkg.package.name,
                remoteVersion: versions.latest,
                localVersion: installed ? installed.version : 'not installed',
                path: installed ? installed.module || '-' : 'not installed',
            });
        }

        opts.defaultQuery = '[].{name: name, remoteVersion: remoteVersion, localVersion: localVersion}';
        return opts.format(opts, result);
    },
});
