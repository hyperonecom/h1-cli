'use strict';

const fs = require('fs');
const path = require('path');

require(`../scope/${process.env.SCOPE_NAME || 'h1' }`);

const cli = require('../bin');
const lib = require('./lib');
const Cli = require('lib/cli');
const table = require('lib/table').table;

const code = '```';

const scope = process.env.SCOPE_NAME;

const common_arguments_filename = 'common-arguments.md';

function writeElements(output_stream, label, values = {}) {
    const entries = Object.entries(values || {});

    if (entries.length > 0) {
        output_stream.write(`### ${label}\n`);

        const rows = entries.map(([name, value]) => {
            label = lib.getArgumentLabel([name, value]);
            let description = value.description;
            if (value.action === 'append') {
                description = `${description}. The parameter may occur repeatedly`;
            }
            return {
                Name: `${code}${label}${code}`,
                Default: value.default || '',
                Description: description,
            };
        });
        output_stream.write(table(rows));
        output_stream.write('\n');
    }
};

const entry_filename = (entry) => `${entry.name}.md`;

const writeCommandTOC = (stream, entry, prefix, depth) => {
    if (!entry.children) return;
    entry.children.filter(entry => !entry.createOptions.skipDocumentation).forEach(entry => {
        const name = `${prefix} ${entry.name}`;
        const slug = name.replace(/ /g, '-').toLowerCase();
        const depth_prefix = ' '.repeat(depth * 2);

        stream.write(`${depth_prefix}* [${name}](#${slug}) - ${entry.description}\n`);
        if (entry.children) {
            writeCommandTOC(stream, entry, `${prefix} ${entry.name}`, depth + 1);
        }

    });
};

const update_markdown_header = (content, start_level = 1) => {
    const level_prefix = '#'.repeat(start_level);
    content = content.replace(/^(#+)/gm, `${level_prefix}$1`);
    return content;
};

const writeCommandSpecs = (stream, entry, prefix) => {
    stream.write(`## ${prefix} ${entry.name}\n\n`);

    stream.write(`${entry.description}\n\n`);

    if (entry.handler) {
        stream.write('### Syntax\n\n');
        stream.write(`${code}${lib.getCommandHeader(entry, prefix)}${code}\n\n`);
    }

    if (entry.examples) {
        let examples = entry.examples.trimEnd('\n'); // Drop leading empty line to standarize
        examples = update_markdown_header(examples, 3);
        examples = examples.replace(/ +$/m, '');
        const header = examples.startsWith(code) ? 'Example' : 'Examples';
        stream.write(`### ${header}\n\n${examples}\n\n`);
    }
    writeElements(stream, 'Required arguments', entry.optionGroups['Required arguments']);
    writeElements(stream, 'Optional arguments', entry.options);
};

const writeSpecs = (stream, entry, prefix) => {

    entry.children.filter(entry => !entry.createOptions.skipDocumentation).forEach(entry => {
        writeCommandSpecs(stream, entry, prefix);

        if (entry.children) {
            writeSpecs(stream, entry, `${prefix} ${entry.name}`);
        }
    });
};

const write_index = (output_dir) => {
    const index_filename = path.join(output_dir, 'index.md');

    const wstream = fs.createWriteStream(index_filename);

    wstream.write(`* [Common arguments](${common_arguments_filename})\n`);
    wstream.write('* Commands\n');
    cli.children.map(entry => {
        const name = `${scope} ${entry.name}`;
        const slug = entry_filename(entry);
        wstream.write(`  * [${name}](${slug}) - ${entry.description}\n`);
    });

    wstream.end();

    console.log('Saved', index_filename);
};

const write_commands_docs = (output_dir) => {
    cli.children.forEach(entry => {
        const section_filename = path.join(output_dir, entry_filename(entry));

        const wstream = fs.createWriteStream(section_filename);

        wstream.write('# TOC\n\n');
        writeCommandTOC(wstream, entry, `${scope} ${entry.name}`, 1);

        wstream.write('\n\n');

        wstream.write('# Specification\n\n');
        writeCommandSpecs(wstream, entry, scope);
        if (entry.children) {
            writeSpecs(wstream, entry, `${scope} ${entry.name}`);
        }

        wstream.end();

        console.log('Saved', section_filename);
    });
};

const list_active_plugins = () => {
    const active_plugins = [];
    Cli.flatten(cli).forEach(command => active_plugins.push(...command.plugins));
    return active_plugins.filter((x, i, a) => a.indexOf(x) === i);
};

const write_global_parameter_docs = (output_dir) => {
    const filename = path.join(output_dir, common_arguments_filename);

    const wstream = fs.createWriteStream(filename);
    wstream.write('# Common arguments\n');

    list_active_plugins().filter(x => x.dirname).forEach(plugin => {
        const help_filename = path.join(plugin.dirname, 'docs.md');
        let content = fs.readFileSync(help_filename).toString();
        content = `${content.trimEnd('\n')}\n`;  // Standarize leading end line
        content = update_markdown_header(content, 1);
        wstream.write(content);
    });

    wstream.end();
    console.log('Saved', filename);
};

const main = async () => {
    if (process.argv.length < 3) {
        throw `Missing argument. Usage: ${process.argv[0]} ${process.argv[1]} [output_dir]`;
    }
    const output_dir = process.argv[2];

    write_global_parameter_docs(output_dir);
    write_commands_docs(output_dir);
    write_index(output_dir);
};

main().catch((err) => {
    console.error('Something terrible happened.', err);
    process.exit(-1);
});
