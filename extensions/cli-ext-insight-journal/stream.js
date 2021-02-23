

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
            name: 'log-file-output',
            description: 'Path of the output json log file. "stdout" is a specially handled file.',
            required: false,
            defaultValue: 'stdout',
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
        const logResp = await opts.api
            .get(openapi.getUrl(`/insight/pl-waw-1/project/${optsAll.project}/journal/${optsAll.journal}`));
        const log = logResp.bodyJson;
        const token = await opts.auth.getToken(log.fqdn);

        const stream = await opts.http.get(`https://${log.fqdn}/log`, {
            headers: { authorization: `Bearer ${token}` },
        });
        let lines = 0;
        const logFile = optsAll['log-file-output'] == 'stdout' ? process.stdout : fs.createWriteStream(optsAll['log-file-output']);
        return new Promise((resolve, reject) => stream.body
            .on('error', err => {
                logFile.close();
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
            .pipe(logFile)
            .on('finish', resolve)
            .on('end', resolve)
        );
    },
});
