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

const printDocs = (element, prefix) => {
    element.forEach(entry => {
        console.log(`# ${prefix} ${entry.name}\n`);

        console.log(`Syntax: ${code}${lib.getCommandHeader(entry, prefix)}${code}`);

        console.log("");

        printElement("Arguments:", entry.options, (name, value) => {
            label = `--${name} ${name.toUpperCase()}`;
            if (!value.required) {
                return `[${label}]`
            }
            return label;
        });

        console.log("");

        printElement("Parameters:", entry.params, (name, value) => {
            label = `${name}`;
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

printDocs(cli.children, 'h1');