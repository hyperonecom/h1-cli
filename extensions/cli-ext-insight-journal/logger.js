import { Command } from '@hyperone/cli-framework';
import readlineTransform from './ReadlineTransform.js';
import { Transform } from 'stream';
import fs from 'fs';
import os from 'os';
import {openapi} from '@hyperone/cli-core';

export default new Command({
    name: 'logger',
    summary: 'Log messages to journal',
    options: [
        { name: 'journal', required: true },
        { name: 'project', required: true, defaultSource: 'project' },
        {
            name: 'hostname',
            required: !os.hostname(),
            defaultValue: os.hostname(),
        },
        {
            name: 'log-file',
            description: 'Path of the input text log file. "stdin" is a specially handled file.',
            required: false,
            defaultValue: 'stdin',
        },
        // tags
    ],
    handler: async (opts) => {
        const optsAll = opts._all || opts;
        const logResp = await opts.api
            .get(openapi.getUrl(`/insight/pl-waw-1/project/${optsAll.project}/journal/${optsAll.journal}`));
        const log = logResp.bodyJson;
        const token = await opts.auth.getToken(log.fqdn);
        const logFile = optsAll['log-file'] === 'stdin' ? process.stdin : fs.createReadStream(optsAll['log-file']);
        const inStream = logFile
            .pipe(new readlineTransform())
            .pipe(new Transform({
                transform(line, encoding, callback) {
                    this.push(JSON.stringify({
                        host: opts.hostname,
                        message: line.toString('utf-8'),
                    }));
                    this.push('\n');
                    return callback(null);
                },
            }))
        ;
        
        const response = await opts.http.post(`https://${log.fqdn}/log`, {
            body: inStream,
            headers: { authorization: `Bearer ${token}` },
        });

        return response.bodyText;
    },
});
