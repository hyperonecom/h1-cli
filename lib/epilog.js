'use strict';

const path = require('path');
const fs = require('fs');

const TerminalRenderer = require('marked-terminal');
const marked = require('marked');

marked.setOptions({ renderer: new TerminalRenderer({ showSectionPrefix: false }) });

exports.examples = (command, dirname) => {
    const filePath = path.join(dirname, 'examples.md');
    const markdown = fs.readFileSync(filePath).toString();

    command.examples = markdown;
    command.epilog = marked(`# Examples\n${markdown}`);

    return command;
};
