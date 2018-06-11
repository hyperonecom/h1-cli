'use strict';

const lib = require('./lib');
const cli = require('../bin/index');


const printArguments = (element, prefix) => {
    element.forEach(entry => {
        console.log(lib.getCommandHeader(entry, prefix));
        if (entry.children) {
            printArguments(entry.children, `${prefix} ${entry.name}`);
        }
    });
};

printArguments(cli.children, 'h1');
