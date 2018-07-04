'use strict';

const displayRow = (row, config = {}) => {
    const separator = config.seperator || '|';
    return `${separator} ${row.join(` ${separator} `)} ${separator}`;
};

module.exports.table = (rows, config = {}) => {
    if (rows.length === 0) throw 'At least one row is required to generate a table.';
    const header = config.header || Object.keys(rows[0]);
    const newline = config.newline || '\n';

    const results = [];
    results.push(header);
    results.push(header.map(el => '-'.repeat(el.length)));
    results.push(...rows.map(row => header.map(x => row[x])));

    const content = results.map(el => displayRow(el, config)).join(newline);
    return `\n${content}\n`;
};
