'use strict';

const { Command } = require('@hyperone/cli-framework');
const readlineTransform = require('readline-transform');
const { Transform } = require('stream');
const fs = require('fs');
const os = require('os');
const {openapi} = require('@hyperone/cli-core');

module.exports = new Command({
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
            description: 'Path of the input text log file (default: stdin)',
            type: path => fs.createReadStream(path),
            required: false,
            defaultValue: process.stdin,
        },
        // tags
    ],
    handler: async (opts) => {
        const optsAll = opts._all || opts;
        const log = await opts.api
            .get(openapi.getUrl(`/insight/pl-waw-1/project/${optsAll.project}/journal/${optsAll.journal}`));
        const token = await opts.auth.getToken(log.fqdn);

        const inStream = optsAll['log-file']
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
            }));
        return opts.http.
            post(`http://${log.fqdn}/log`, {
                body: inStream,
                headers: { authorization: `Bearer ${token}` },
            });
    },
});
