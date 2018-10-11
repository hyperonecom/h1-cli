'use strict';
const path = require('path');
const fs = require('fs');
const Cli = require('lib/cli');
const utils = require('./utils');
const epilog = require('lib/epilog');


const list_active_plugins = (cli) => {
    const active_plugins = [];
    Cli.flatten(cli).forEach(command => active_plugins.push(...command.plugins));
    return active_plugins.filter((x, i, a) => a.indexOf(x) === i);
};

module.exports = (options) => {
    const filename = path.join(options.output_dir, options.common_arguments);

    const wstream = fs.createWriteStream(filename);
    wstream.write('# Common arguments\n');

    list_active_plugins(options.cli)
        .sort()
        .filter(x => x.dirname)
        .forEach(plugin => {
            Object.keys(plugin.options).forEach(argument => {
                const help_filename = path.join(plugin.dirname, `${argument}.md`);

                const context = {
                    scope: process.env.SCOPE_NAME,
                };

                let header;
                if (options.theme.shortArgumentTitle) {
                    header = argument;
                } else {
                    header = `Argument ${utils.code}--${argument}${utils.code}`;
                }
                let content = fs.readFileSync(help_filename).toString();
                content = epilog.template_render(content, context).trimEnd('\n');
                content = utils.update_markdown_header(content, 2);
                content = `# ${header}\n${content}\n`;  // Standarize leading end line
                content = utils.update_markdown_header(content, 1);

                wstream.write(content);
            });
        });

    wstream.end();
    console.log('Saved', filename);
};
