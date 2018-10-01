'use strict';
const path = require('path');
const fs = require('fs');
const utils = require('./utils');
const Cli = require('lib/cli');

module.exports = (options) => {
    const index_filename = path.join(options.output_dir, 'index.md');

    const wstream = fs.createWriteStream(index_filename);

    if (options.theme.indexTitle) {
        wstream.write(`# ${process.env.SCOPE_NAME}-cli\n\n`);
    }

    wstream.write(`* [Common arguments](${options.common_arguments})\n`);
    wstream.write('* Commands\n');

    options.cli.children.forEach(entry => {
        const name = Cli.get_full_name(entry);
        const slug = utils.entry_filename(entry);
        wstream.write(`  * [${name}](${slug}) - ${entry.description}\n`);
    });

    wstream.end();

    console.log('Saved', index_filename);
};
