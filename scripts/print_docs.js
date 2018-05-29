const cli = require('../bin/index');
const lib= require('./lib');


const code = "```";

const printDocs = (element, prefix) => {
    element.forEach(entry => {
        console.log(`# ${prefix} ${entry.name}\n`);

        console.log(`Syntax: ${code}${lib.getCommandHeader(entry, prefix)}${code}`);

        console.log("");

        if (typeof entry.options !== "undefined" && Object.keys(entry.options).length > 0) {
            console.log("Arguments:");

            Object.entries(entry.options).map(([name, value]) => {
                label = `--${name} ${name.toUpperCase()}`;
                if (!value.required) {
                    label = `[${label}]`
                }
                console.log(`* ${code}${label}${code} - ${value.description}`);
            });
        }

        console.log("");

        if (typeof entry.params !== "undefined" && Object.keys(entry.params).length > 0) {
            console.log("Parameters:");
            Object.entries(entry.params).map(([name, value]) => {
                label = `${name}`;
                if (!value.required) {
                    label = `[${label}]`
                }
                console.log(`* ${code}${label}${code} - ${value.description}`);
            })
        }

        if (entry.children) {
            return printDocs(entry.children, `${prefix} ${entry.name}`);
        }

    });
};

printDocs(cli.children, 'h1');