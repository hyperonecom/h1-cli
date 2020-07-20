'use strict';

const npm = require('../npm');
const { Command } = require('@hyperone/cli-framework');


module.exports = new Command({
    name: 'list',
    summary: 'List available and installed extensions',
    handler: async (opts, cmd) => {
        const client = npm(opts.http, 'http://localhost:4873/');

        const result = [];
        const pkgs = await client.listPackages('@hyperone/cli-ext');

        const installed_extensions = await cmd.device.importExtension('@hyperone/cli-ext');

        for (const pkg of pkgs.objects) {
            if (!pkg.package.name.startsWith('@hyperone/cli-ext')) {
                continue;
            }
            const detail = await client.showPackage(pkg.package.name, 'latest');
            const installed = installed_extensions.find(x => x.name == pkg.package.name);

            result.push({
                name: detail.name,
                remoteVersion: detail.version,
                localVersion: installed ? installed.version : 'not installed',
                path: installed ? installed.module : 'not installed',
            });
        }

        opts.defaultQuery = '[].{name: name, remoteVersion: remoteVersion, localVersion: localVersion}';
        return opts.format(opts, result);
    },
});
