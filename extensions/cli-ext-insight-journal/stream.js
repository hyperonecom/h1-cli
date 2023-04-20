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
        const logFile = optsAll['log-file-output'] === 'stdout'
            ? process.stdout
            : fs.createWriteStream(optsAll['log-file-output'])
        ;
        
        const logResp = await opts.api
            .get(openapi.getUrl(`/insight/pl-waw-1/project/${optsAll.project}/journal/${optsAll.journal}`));
        const log = logResp.bodyJson;
        const token = await opts.auth.getToken(log.fqdn);

        const response = await opts.http.get(`https://${log.fqdn}/log`, {
            headers: { authorization: `Bearer ${token}` },
        });

        const reader = response.body.getReader();
        const td = new TextDecoder();
        let count = 0;
        let chunk;

        do {
            chunk = await reader.read();
            if (!chunk.done) {
                const lines = td.decode(chunk.value).split('\n');

                for (const line of lines) {
                    count += 1;
                    logFile.write(line);
                    logFile.write('\n');
                    if (optsAll.head && count >= optsAll.head) {
                        reader.cancel();
                        break;
                    }
                }
            }
        } while (chunk.done === false);
    },
});
