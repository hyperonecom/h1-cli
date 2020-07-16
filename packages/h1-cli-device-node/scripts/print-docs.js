/* eslint-disable no-console */
'use strict';
const { buildCli } = require('h1-cli-core');
const fs = require('fs');
const { Command } = require('h1-cli-framework');
const Device = require('../device');

const documentCommand = async (out, cmd, level) => {
    const headerPrefix = '#'.repeat(level);
    out.write(`${headerPrefix} ${cmd.getFullName()}\n`);
    out.write('\n```\n');
    const help = await cmd.getUsage();
    out.write(help.trim());
    out.write('\n```\n\n');
    if (!cmd.commands) {
        return;
    }
    for (const child of await cmd.commands) {
        await documentCommand(out, child, level + 1);
    }
};

const main = async () => new Command({
    name: 'print',
    summary: 'Print or write documentation of commands',
    options: [
        { name: 'url', description: 'URL of OpenAPI spec', defaultValue: 'https://api.hyperone.com/v2/openapi.json' },
        { name: 'output-file', description: 'Output file', defaultValue: '-' },
        { name: 'scope', description: 'Output scope', defaultValue: 'h1' },
    ],
    handler: async (opts) => {
        const {program} = await buildCli({
            openapiUrl: opts.url,
            device: new Device('h1'),
        });
        const out = opts._all['output-file'] == '-' ? process.stdout : fs.createWriteStream(opts['output-file'], { encoding: 'utf-8' });
        await documentCommand(out, program);
        for (const cmd of program.commands) {
            await documentCommand(out, cmd, 2);
        }
    },
}).exec(process.argv.slice(2));

main().catch(console.error);
