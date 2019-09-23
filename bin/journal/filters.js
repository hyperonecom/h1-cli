'use strict';
const Cli = require('lib/cli');
const { get } = require('../../lib/transform');

const handlers = {
    '^([a-zA-Z0-9\.]+)\s*=~\s*(.+?)$': (key, val, data) => new RegExp(val).test(get(data, key)),
    '^([a-zA-Z0-9\.]+)\s*=\s*(.+?)$': (key, val, data) => get(data, key) == val,
    '^([a-zA-Z0-9\.]+)\s*>\s*(.+?)$': (key, val, data) => get(data, key) > val,
    '^([a-zA-Z0-9\.]+)\s*<\s*(.+?)$': (key, val, data) => get(data, key) < val,
};

const match = (filter, data) => {
    for (const [pattern, handler] of Object.entries(handlers)) {
        const res = new RegExp(pattern).exec(filter);
        if (!res) {
            continue;
        }
        return handler(res[1], res[2], data);
    }
    throw Cli.error.cancelled(`Unable to parse query '${filter}'`);
};

const matches =  (filters, data) => {
    for (const filter of filters) {
        if (!match(filter, data)) {
            return false;
        }
    }
    return true;
};

module.exports = {
    match,
    matches,
};
