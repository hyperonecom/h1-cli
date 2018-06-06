'use strict';

const cli = require('../bin/index');
const lib= require('./lib');


const code = "```";


function printElement(label, values, f) {
    if (Object.keys(values || {}).length > 0) {
        console.log(label);
        Object.entries(values).map(([name, value]) => {
            label = f(name, value);
            console.log(`* ${code}${label}${code} - ${value.description}`);
        })
    }
}


const printTOC = (element, prefix) => {

    element.forEach(entry => {
        const name = `${prefix} ${entry.name}`;
        const clean_name = name.replace(/ /, '-').toLowerCase();

        console.log(`* [${name}](#${clean_name})`);

    });
};
const printDocs = (element, prefix) => {

    element.forEach(entry => {
        console.log(`# ${prefix} ${entry.name}`);

        console.log(`Syntax: ${code}${lib.getCommandHeader(entry, prefix)}${code}`);

        console.log("");

        printElement("Arguments:", entry.options, (name, value) => {
            const label = `--${name} ${name.toUpperCase()}`;
            if (!value.required) {
                return `[${label}]`
            }
            return label;
        });

        console.log("");

        printElement("Parameters:", entry.params, (name, value) => {
            const label = `${name}`;
            if (!value.required) {
                return `[${label}]`
            }
            return label;
        });

        console.log("");
        // console.log(`Usage: ${entry.epilog}`);

        if (entry.children) {
            return printDocs(entry.children, `${prefix} ${entry.name}`);
        }

    });
};

printTOC(cli.children, 'h1');
printDocs(cli.children, 'h1');