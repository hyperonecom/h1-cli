'use strict';

const path = require('path');
const fs = require('fs');

const TerminalRenderer = require('marked-terminal');
const marked = require('marked');

marked.setOptions({ renderer: new TerminalRenderer({ showSectionPrefix: false }) });

exports.examples = dirname => {
    const filePath = path.join(dirname, 'examples.md');
    const markdown = fs.readFileSync(filePath).toString();

    return marked(`# Examples\n${markdown}`);
};
