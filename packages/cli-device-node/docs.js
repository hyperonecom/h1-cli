/* eslint-disable no-console */
import { buildCli } from '@hyperone/cli-core';
import { Command } from '@hyperone/cli-framework';
import { NodeDevice } from './device';
import path from 'path';
import fs from 'fs';
import table from 'markdown-table';

const header = (level, value) => `\n${'#'.repeat(level)} ${value}\n\n`;
const quote = (value) => `\`\`\`${value}\`\`\``;

const renderOption = option => {
    const parts = [];
    if (option.alias) {
        parts.push(`--${option.alias},`);
    }
    parts.push(`--${option.name}`);
    if (option.type !== Boolean) {
        parts.push(`{${option.typeLabel || option.name}}`);
    }
    return parts.join(' ');
};

const getPath = (dir, cmd, ...args) => {
    const parents = [cmd];
    while (cmd.parent) {
        parents.push(cmd.parent);
        cmd = cmd.parent;
    }
    return path.join(dir, ...parents.reverse().map(x => x.name), ...args);
};

const documentCommand = async (cmd, dir) => {
    const name = cmd.getFullName();
    console.log(`Processing command ${name}`);
    await fs.promises.mkdir(getPath(dir, cmd), { recursive: true });
    const help = await cmd.renderUsage();
    let bonus = 0;
    const out = [];
    for (const entry of help) {
        out.push(header(bonus + 1, entry.header));
        if (entry.optionList) {
            const header = ['Option name', 'Description'];
            const rows = entry.optionList.map(option => [
                quote(renderOption(option)),
                option.description ? option.description.replace(/\n/g, '<br>') : '-',
            ]);
            out.push(`${table([header, ...rows])}`);
        } else if (entry.examples) {
            for (const example of entry.examples) {
                out.push(header(bonus + 2, example.title));
                out.push(quote(example.command.replace('{name}', name)));
            }
        } else if (entry.content) {
            if (entry.format) {
                out.push(quote(`${entry.format}\n${entry.content.trim()}\n`));
            } else {
                out.push(entry.content);
            }
        }
        out.push('\n');
        bonus = 1;
    }

    if (cmd.loadCommands) {
        const commands = await cmd.loadCommands();
        if (commands) {
            out.push(header(bonus, 'Available commands'));
            for (const command of commands) {
                out.push(`* [${command.getFullName()}](./${command.name}/README.md)\n`);
                await documentCommand(command, dir);
            }
        }
    }

    if (cmd.parent) {
        out.push(header(bonus, 'Parent commands'));
        let parent_cmd = cmd;
        let parent_cmd_depth = 0;
        while (parent_cmd.parent) {
            parent_cmd = parent_cmd.parent;
            parent_cmd_depth += 1;
            const parent_path = ['.', ...Array(parent_cmd_depth).fill('..'), 'README.md'].join('/');
            out.push(`* [${parent_cmd.getFullName()}](${parent_path})\n`);

        }
    }
    await fs.promises.writeFile(getPath(dir, cmd, 'README.md'), out.join(''));
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

export default async (options = {}) => new Command({
    name: 'print',
    summary: 'Print or write documentation of commands',
    options: [
        { name: 'url', description: 'URL of OpenAPI spec', defaultValue: options.openapiUrl || 'https://api.hyperone.com/v2/openapi.json' },
        { name: 'output', description: 'Output directory', required: true },
        { name: 'scope', description: 'Output scope', defaultValue: options.scope || 'h1' },
    ],
    handler: async (opts) => {
        const { program } = await buildCli({
            openapiUrl: opts._all.url,
            device: new DocumentationDevice(opts._all.scope),
        });
        console.log(program.getFullName());
        await program.loadCommands();
        console.log('Root commands loaded');
        await documentCommand(program, opts._all.output);
    },
}).exec(options.argv || process.argv.slice(2));
