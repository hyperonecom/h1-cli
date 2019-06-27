'use strict';
const path = require('path');
const fs = require('fs');

const Cli = require('lib/cli');
const table = require('lib/table').table;

const lib = require('../lib');
const utils = require('./utils');


function writeArguments(wstream, label, values = {}) {
    const entries = Object.entries(values || {});

    if (entries.length > 0) {
        wstream.write(`### ${label}\n`);

        const rows = entries.map(([name, value]) => {
            label = lib.getArgumentLabel([name, value]);
            let description = value.description;
            if (value.action === 'append') {
                description = `${description}. The parameter may occur repeatedly`;
            }
            return {
                Name: `${utils.code}${label}${utils.code}`,
                Default: value.default || '',
                Description: description,
            };
        });
        wstream.write(table(rows));
        wstream.write('\n');
    }
}

const writeCommandSpecs = (wstream, entry, options, depth=1) => {
    if (options.theme.skipScopeInHeader) {
        wstream.write(utils.getHeader(depth, Cli.get_full_name(entry).split(' ').slice(1).join(' ')));
    } else {
        wstream.write(utils.getHeader(depth, Cli.get_full_name(entry)));
    }

    wstream.write(`${entry.description}\n\n`);

    if (entry.createOptions.earlyAdoptersOnly) {
        wstream.write(utils.getHeader(depth + 1, 'Note'));
        wstream.write('The functionality is available as part of the *Early adopters* program. Operation and interface may be changed in a non-backward compatibility manner.\n\n');
    }

    if (entry.handler) {
        wstream.write(utils.getHeader(depth + 1, 'Syntax'));
        wstream.write(`${utils.code}${lib.getCommandHeader(entry)}${utils.code}\n`);
    }

    if (entry.examples) {
        let examples = entry.examples.trimEnd('\n'); // Drop leading empty line to standarize
        examples = utils.update_markdown_header(examples, depth + 1);
        examples = examples.replace(/ +$/m, '');
        const header = examples.startsWith(utils.code) ? 'Example' : 'Examples';
        wstream.write(`${utils.getHeader(depth + 1, header)}${examples}\n\n`);
    }

    writeArguments(wstream, 'Required arguments', entry.optionGroups['Required arguments']);
    writeArguments(wstream, 'Optional arguments', entry.options);
};

const writeCommandTOC = (wstream, entry, depth = 1) => {
    Cli.sort(entry.children).filter(entry => !entry.createOptions.skipDocumentation).forEach(entry => {
        const name = Cli.get_full_name(entry);
        const slug = name.replace(/ /g, '-').toLowerCase();
        const depth_prefix = ' '.repeat(depth * 2);

        wstream.write(`${depth_prefix}* [${name}](#${slug}) - ${entry.description}\n`);
        if (entry.children) {
            writeCommandTOC(wstream, entry, depth + 1);
        }

    });
};

module.exports = (options) => {
    Cli.sort(options.cli.children).forEach(entry => {
        const section_filename = path.join(options.output_dir, utils.entry_filename(entry));

        const subcommands = Cli
            .flatten(entry);

        const wstream = fs.createWriteStream(section_filename);

        const command_depth = 2;
        let category_depth = 1;
        if (options.theme.tableOfContent && entry.children) {
            wstream.write('# TOC\n\n');
            writeCommandTOC(wstream, entry);
            wstream.write('\n\n');
            category_depth += 1;
        }

        if (options.theme.tableOfContent) {
            wstream.write('# Specification\n\n');
        }

        const category = subcommands.shift();

        writeCommandSpecs(wstream, category, options, category_depth);
        subcommands.forEach(subcommand => writeCommandSpecs(wstream, subcommand, options, command_depth));

        wstream.end();

        console.log('Saved', section_filename);
    });
};
