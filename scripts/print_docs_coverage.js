'use strict';

require('../scope/h1');

const cli = require('../bin');
const Cli = require('../lib/cli');

const main = async () => {
    const examples = {
        Category: 0,
        Command: 0,
    };
    const total = {
        Category: 0,
        Command: 0,
    };

    Cli.flatten(cli).forEach(node => {
        const type = node.constructor.name;
        if (node.examples) {
            examples[type] += 1;
        } else {
            console.log(`Missing documentation for ${Cli.get_full_name(node)} (${type})`);
        }
        total[type] += 1;
    });

    Object.keys(examples).forEach(type => {
        const coverage = Math.round(examples[type] / total[type] * 100);
        console.log(`${examples[type]} ${type} has examples out of ${total[type]} (${coverage} % coverage).`);
    });
};

main().catch((err) => {
    console.error('Something terrible happened.', err);
    process.exit(-1);
});
