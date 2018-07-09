'use strict';

require('../scope/h1');

const cli = require('../bin');
const Cli = require('../lib/cli');
const defaults = require('bin/generic/defaults');

const main = async () => {

    Cli.flatten(cli).forEach(node => {
        if (node.parent === null) {
            return;
        }
        if (node.constructor.name !== 'Category') {
            return;
        }
        for (const command of defaults.commands) {
            if (!node.children.some(x => x.name === command)) {
                console.log(`Missing ${Cli.get_full_name(node)} ${command}`);
            }
        }

    });

};

main().catch((err) => {
    console.error('Something terrible happened.', err);
    process.exit(-1);
});
