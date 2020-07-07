'use strict';
const { buildCli } = require('../index');
const fs = require('fs');
const { Command } = require('./../lib/cli/entity');

const documentCommand = (out, cmd, level) => {
    const headerPrefix = '#'.repeat(level);
    out.write(`${headerPrefix} ${cmd.getFullName()}\n`);
    out.write('\n```\n');
    out.write(cmd.getUsage().trim());
    out.write('\n```\n\n');
    if (!cmd.commands) {
        return;
    }
    for (const child of cmd.commands) {
        documentCommand(out, child, level + 1);
    }
};

const main = async () => new Command({
    name: 'print',
    summary: 'Print or write documentation of commands',
    options: [
        { name: 'url', description: 'URL of OpenAPI spec', defaultValue: 'https://api.hyperone.com/v2/openapi.json' },
        { name: 'output-file', description: 'Output file', defaultValue: '-' },
    ],
    handler: async (opts) => {
        const cli = await buildCli({
            openapiUrl: opts.url,
        });
        const out = opts['output-file'] == '-' ? process.stdout : fs.createWriteStream(opts['output-file'], { encoding: 'utf-8' });
        documentCommand(out, cli);
        for (const cmd of cli.commands) {
            documentCommand(out, cmd, 2);
        }
    },
}).exec(process.argv.slice(2));

main().catch(console.error);
