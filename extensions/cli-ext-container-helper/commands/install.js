import { Command } from '@hyperone/cli-framework';
import fs from 'fs';
import path from 'path';

export default new Command({
    name: 'install',
    summary: 'Install Docker credential helper',
    options: [
        { name: 'output-directory', required: true },
    ],
    handler: async (opts, cmd) => {
        opts = opts._all || opts;
        const template = [
            '#!/bin/sh',
            `exec ${process.argv[0]} ${process.argv[1]} container registry helper $@`,
        ].join('\n');
        const helper = `docker-credential-${cmd.device.getName()}`;
        const filename = path.join(opts['output-directory'], helper);
        await fs.promises.writeFile(filename, template, {
            mode: 0o755,
        });
        return `File saved in path ${filename}`;
    },
});
