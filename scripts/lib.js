'use strict';

const Cli = require('../lib/cli');

const getArgumentLabel = ([name, value]) => {
    let label;
    if (value.type !== 'boolean') {
        label = `--${name} ${name.toUpperCase()}`;
    } else {
        label = `--${name}`;
    }

    if (value.action === 'append') {
        label = `${label} [${label} ...]`;
    }
    return label;
};


const getCommandHeader = (entry) => {
    const field = [
        ...Object.entries(entry.optionGroups['Required arguments'] || {}).map(getArgumentLabel),
        ...Object.entries(entry.options || {}).map(x => `[${getArgumentLabel(x)}]`),
    ];
    const field_help = field.join(' ');
    return `${Cli.get_full_name(entry)} | ${field_help}`;
};

module.exports.getArgumentLabel = getArgumentLabel;
module.exports.getCommandHeader = getCommandHeader;
