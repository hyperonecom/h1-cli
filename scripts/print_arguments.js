'use strict';

const cli = require('../bin/index');


const printArguments = (element, prefix) => {
    element.forEach(entry => {
        console.log(getCommandHeader(entry, prefix));
        if (entry.children) {
            printArguments(entry.children, `${prefix} ${entry.name}`);
        }
    });
};

printArguments(cli.children, 'h1');