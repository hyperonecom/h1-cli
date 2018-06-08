'use strict';

const cli = require('../bin');
const lib = require('./lib');
const path = require('path');
const _ = require('lodash');
const fs = require('fs');

const code = '```';


function writeElements(output_stream, label, values, label_fn, filter) {
    const entries = Object.entries(_.pickBy(values|| {}, filter));
    if (entries.length > 0) {
        output_stream.write(`### ${label}\n\n`);
        output_stream.write('| Name | Default | Description | \n');
        output_stream.write('| ---- | ------- | ----------- |\n');

        entries.forEach(([name, value]) => {
            label = label_fn([name, value]);
            let description = value.description;
            if (value.action === 'append') {
                description = `${description}. The parameter may occur repeatedly`;
            }
            output_stream.write(`| ${code}${label}${code} | ${value.default || ''} | ${description} |\n`);
        });

        output_stream.write('\n');
    }
}

const entry_filename = (entry) => `${entry.name}.md`;

const writeTOC = (wstream, element, prefix) => {
    element.map(entry => {
        const name = `${prefix} ${entry.name}`;
        const slug = entry_filename(entry);
        wstream.write(`* [${name}](${slug}) - ${entry.description}\n`);
    });
};


function writeCommandTOC(stream, entry, prefix, depth) {
    if (!entry.children) return;
    entry.children.forEach(entry => {
        const name = `${prefix} ${entry.name}`;
        const slug = name.replace(/ /g, '-').toLowerCase();
        const depth_prefix = ' '.repeat(depth);

        stream.write(`${depth_prefix}* [${name}](#${slug}) - ${entry.description}\n`);
        if (entry.children) {
            writeCommandTOC(stream, entry, `${prefix} ${entry.name}`, depth + 1);
        }

    });
}

function writeCommandSpecs(stream, entry, prefix) {
    stream.write(`## ${prefix} ${entry.name}\n\n`);

    stream.write(`${entry.description}\n\n`);

    if (entry.handler) {
        stream.write('### Syntax\n\n');
        stream.write(`${code}${lib.getCommandHeader(entry, prefix)}${code}\n\n`);
    }

    writeElements(stream, 'Required options', entry.options || {}, lib.getOptionLabel, (name, option) => !option.required);
    writeElements(stream, 'Optional options', entry.options || {}, lib.getOptionLabel, (name, option) => option.required);
    writeElements(stream, 'Parameters (DEPRECATED)', entry.params || {}, lib.getParamLabel, () => true);
}

const writeSpecs = function (stream, entry, prefix) {

    entry.children.forEach(entry => {
        writeCommandSpecs(stream, entry, prefix);

        if (entry.children) {
            writeSpecs(stream, entry, `${prefix} ${entry.name}`);
        }
    });
};

const main = async () => {
    if (process.argv.length < 3) {
        throw `Missing argument. Usage: ${process.argv[0]} ${process.argv[1]} [output_dir]`;
    }
    const output_dir = process.argv[2];

    const index_filename = path.join(output_dir, 'index.md');

    const wstream = fs.createWriteStream(index_filename);

    writeTOC(wstream, cli.children, 'h1', 1);

    wstream.end();

    console.log('Saved', index_filename);

    cli.children.forEach(entry => {
        const section_filename = path.join(output_dir, entry_filename(entry));

        const wstream = fs.createWriteStream(section_filename);

        wstream.write('# TOC\n\n');
        writeCommandTOC(wstream, entry, `h1 ${entry.name}`, 1);

        wstream.write('\n\n');

        wstream.write('# Specification\n\n');
        writeCommandSpecs(wstream, entry, 'h1');
        if (entry.children) {
            writeSpecs(wstream, entry, `h1 ${entry.name}`);
        }

        wstream.end();

        console.log('Saved', section_filename);
    });

};

main().catch((err) => {
    console.error('Something terrible happened.', err);
    process.exit(-1);
});
