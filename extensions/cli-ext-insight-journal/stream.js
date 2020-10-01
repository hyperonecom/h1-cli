

import { Command } from '@hyperone/cli-framework';
import fs from 'fs';
import { openapi } from '@hyperone/cli-core';
import readlineTransform from 'readline-transform';
import { Transform } from 'stream';

export default new Command({
    name: 'stream',
    summary: 'Stream messages from journal',
    options: [
        { name: 'journal', required: true },
        { name: 'project', required: true, defaultSource: 'project' },
        {
            name: 'log-file',
            description: 'Path of the input json log file (default: stdin)',
            type: path => fs.createWriteStream(path),
            required: false,
            defaultValue: process.stdout,
        },
        {
            name: 'head',
            description: 'Maximum number of lines to show. All if skipped.',
            required: false,
            type: Number,
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
        let lines = 0;

        return new Promise((resolve, reject) => stream.body
            .on('error', err => {
                optsAll['log-file'].close();
                if (err.name !== 'AbortError') {
                    return reject(err);
                }
                return resolve();
            })
            .pipe(new readlineTransform())
            .pipe(new Transform({
                transform(line, encoding, callback) {
                    lines += 1;
                    if (optsAll.head && lines > optsAll.head) {
                        stream.controller.abort();
                        // Discard extra lines
                        return callback(null);
                    }
                    return callback(null, `${line}\n`);
                },
            }))
            .pipe(optsAll['log-file'])
            .on('finish', resolve)
            .on('end', resolve)
        );
    },
});
