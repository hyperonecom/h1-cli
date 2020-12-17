/* eslint-disable no-console */
import { buildCli } from '@hyperone/cli-core';
import fs from 'fs';
import { Command } from '@hyperone/cli-framework';
import { NodeDevice } from '../device';
import path from 'path';
import stripAnsiStream from 'strip-ansi-stream';

const documentCommand = async (out, cmd, level = 1) => {
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

class DocumentationDevice extends NodeDevice {
    configLoad() {
        return {
            parameter: {
                location: {
                    value: 'pl-waw-1',
                },
            },
        };
    }
}

const main = async () => new Command({
    name: 'print',
    summary: 'Print or write documentation of commands',
    options: [
        { name: 'url', description: 'URL of OpenAPI spec', defaultValue: 'https://api.hyperone.com/v2/openapi.json' },
        { name: 'output', description: 'Output directory', required: true },
        { name: 'scope', description: 'Output scope', defaultValue: 'h1' },
    ],
    handler: async (opts) => {
        const { program } = await buildCli({
            openapiUrl: opts._all.url,
            device: new DocumentationDevice('h1'),
        });
        console.log(program.getFullName());
        await program.loadCommands();
        console.log('Root commands loaded');
        for (const cmd of program.commands) {
            console.log('Processing command:', cmd.getFullName());
            const outFile = path.join(opts._all.output, `${cmd.name}.md`);
            const out = stripAnsiStream();
            out.pipe(fs.createWriteStream(outFile, { encoding: 'utf-8' }));
            await documentCommand(out, cmd, 2);
            out.end();
        }
    },
}).exec(process.argv.slice(2));

main().catch(console.error);
