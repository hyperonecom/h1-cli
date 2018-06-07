'use strict';

const cli = require('../bin/index');
const lib= require('./lib');
const path = require('path');
const _ = require('lodash');
const fs = require('fs');

const code = "```";


function writeElements(output_stream, label, values, label_fn) {
    const entries = Object.entries(values);

    if (entries.length > 0) {
        output_stream.write(`## ${label}\n\n`);
        output_stream.write(`| Name | Default | Description | \n`);
        output_stream.write(`| ---- | ------- | ----------- |\n`);

        entries.forEach(([name, value]) => {
            label = label_fn(name, value);
            let description = value.description;
            if(value.action === 'append'){
                description = `${description}. The parameter may occur repeatedly`
            }
            output_stream.write(`| ${code}${label}${code} | ${value.default || ''} | ${description} |\n`);
        });

        output_stream.write(`\n`);
    }
}


const writeTOC = (wstream, element, prefix) => {
    element.map(entry => {
        const name = `${prefix} ${entry.name}`;
        const slug = name.replace(/ /, '-').toLowerCase();
        wstream.write(`* [${name}](#${slug})\n`)
    })
};



const writeDocs = function(stream, entries, prefix) {
    entries.forEach(entry => {
        stream.write(`# ${prefix} ${entry.name}\n\n`);

        stream.write(`## Syntax\n\n`);
        stream.write(`${code}${lib.getCommandHeader(entry, prefix)}${code}\n\n`);

        const options = entry.options || {};

        const required_options = _.pickBy(options || {}, (name, option) => option.required);
        const optional_options = _.pickBy(options || {}, (name, option) => !option.required);

        const getOptionLabel = (name, value) => `--${name} ${name.toUpperCase()}`;

        writeElements(stream, "Required options", required_options, getOptionLabel);
        writeElements(stream, "Optional options", optional_options, getOptionLabel);

        writeElements(stream, "Parameters (DEPRECATED)", entry.params || {}, (name, value) => {
            const label = `${name}`;
            if (!value.required) {
                return `[${label}]`
            }
            return label;
        });

        if(entry.children){
            writeDocs(stream, entry.children, `${prefix} ${entry.name}`)
        }
    });
};

const main = async () => {
    if(process.argv.length < 3){
        throw `Missing argument. Usage: ${process.argv[0]} ${process.argv[1]} [output_dir]`
    }
    const output_dir = process.argv[2];

    const index_filename = path.join(output_dir, `index.md`);

    const wstream = fs.createWriteStream(index_filename);

    writeTOC(wstream, cli.children, 'h1');
    wstream.end();
    console.log("Saved", index_filename);

    cli.children.forEach(entry => {
        const section_filename = path.join(output_dir, `${entry.name}.md`);
        const wstream = fs.createWriteStream(section_filename);
        writeDocs(wstream, [entry], 'h1');
        wstream.end()
        console.log("Saved", section_filename);

    });

};

main().catch((err) => {
    console.error('Something terrible happened.', err);
    process.exit(-1)
});
