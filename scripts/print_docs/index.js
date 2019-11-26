'use strict';

process.env.HYPERONE_PROJECT = 'dummy-project';
process.env.HYPERONE_EARLY_ADOPTERS = '1';
process.env.HYPERONE_ACCESS_TOKEN_SECRET = '1';

process.argv.push('--help');
require(`../../scope/${process.env.SCOPE_NAME || 'h1' }`);

const cli = require('../../bin/index');

const doc_global_parameters = require('./doc_global_parameters');
const doc_resources = require('./doc_resources');
const doc_index = require('./doc_index');

const get_param = (name, defaultValue=undefined) => {
    if (process.argv.indexOf(name) > -1)
        return process.argv[process.argv.indexOf(name) + 1];
    return defaultValue;
};

const themes = {
    repo: {
        tableOfContent: true,
        scopeHeader: true,
    },
    site: {
        tableOfContent: false,
        showScope: false,
        shortArgumentTitle: true,
        skipScopeInHeader: true,
        indexTitle: true,
    },
};


const main = async () => {
    if (process.argv.length < 3) {
        throw `Missing argument. Usage: ${process.argv[0]} ${process.argv[1]} [output_dir]`;
    }

    const theme_name = get_param('--theme', 'repo');
    const options = {
        cli: cli,
        output_dir: process.argv[2],
        theme: themes[theme_name],
        common_arguments: 'common-arguments.md',
    };

    console.log(`Generate using theme ${theme_name}`);
    doc_global_parameters(options);
    doc_resources(options);
    doc_index(options);
};

main().catch((err) => {
    console.error('Something terrible happened.', err);
    process.exit(-1);
});
