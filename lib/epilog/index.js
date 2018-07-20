'use strict';

const path = require('path');
const fs = require('fs');
const Cli = require('../cli');

const TerminalRenderer = require('marked-terminal');
const marked = require('marked');

marked.setOptions({renderer: new TerminalRenderer({showSectionPrefix: false})});

const truncateQuote = text => text.substring(1, text.length - 1);

const template_render = (content, context) => content.replace(
    /\{\{(.+?)\}\}/gm,
    (match, p1) => {
        let name = p1.trim();
        let defaultValue = match;
        if (match.includes('|')) {
            const parts = p1.split('|', 2);
            name = parts[0].trim();
            defaultValue = parts[1].trim();
        }
        if (name in context) {
            // Handle:
            // txt: {{A}}
            // context: {A:'replaced'}
            // result: replaced
            return context[name];
        }
        if (defaultValue.startsWith("'") && defaultValue.endsWith("'")) {
            // Handle:
            // txt: {{A|'replaced'}}
            // context: {}
            // result: replaced
            return truncateQuote(defaultValue);
        }
        if (defaultValue in context) {
            // Handle:
            // txt: {{A|B}}
            // context: {B:'replaced'}
            // result: replaced
            return context[defaultValue];
        }
        // Handle:
        // txt: {{A}}
        // context: {}
        // result: {{A}}
        throw new Error(`Unknown variable '${match}' in '${content}`);
        // return match;
    }
);

exports.template_render = template_render;

exports.examples = (command, dirname, context = {epilog: 'default'}) => {
    const filePath = path.join(dirname, 'examples.md');
    try {
        let markdown = fs.readFileSync(filePath).toString();
        markdown = template_render(markdown, context);
        command.examples = markdown;
        command.epilog = marked(`# Examples\n${markdown}`);
    } catch (err) {
        console.error(`Unable to generate examples for ${Cli.get_full_name(command)}.`, err.stack);
    }


    return command;
};
