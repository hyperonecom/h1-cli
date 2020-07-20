

import { Command } from '@hyperone/cli-framework';
import fs from 'fs';
import { openapi } from '@hyperone/cli-core';

export default new Command({
    name: 'stream',
    summary: 'Stream messages from journal',
    options: [
        { name: 'journal', required: true },
        { name: 'project', required: true, defaultSource: 'project' },
        {
            name: 'log-file',
            description: 'Path of the input json log file (default: stdin)',
            type: path => fs.createReadStream(path),
            required: false,
            defaultValue: process.stdout,
        },
        // tags
    ],
    handler: async (opts) => {
        const optsAll = opts._all || opts;
        const log = await opts.api
            .get(openapi.getUrl(`/insight/pl-waw-1/project/${optsAll.project}/journal/${optsAll.journal}`));
        const token = await opts.auth.getToken(log.fqdn);

        const stream = await opts.http.get(`http://${log.fqdn}/log`, {
            headers: { authorization: `Bearer ${token}` },
        });
        return new Promise((resolve, reject) => stream
            .pipe(optsAll['log-file'])
            .on('finish', resolve)
            .on('error', reject)
        );
    },
});
