'use strict';
const Cli = require('lib/cli');


const handlers = {
    '^([a-zA-Z]+) *= *(.+?)$' : (key, val, data) => data[key] == val,
    '^([a-zA-Z]+) *> *(.+?)$' : (key, val, data) => data[key] > val,
    '^([a-zA-Z]+) *< *(.+?)$' : (key, val, data) => data[key] < val,
    '^([a-zA-Z]+) *~ *(.+?)$' : (key, val, data) => new RegExp(val).test(data[key]),
};


const match = (filter, data) => {
    for (const pattern in handlers) {
        const res = new RegExp(pattern).exec(filter);
        if (!res) {
            continue;
        }
        const handler = handlers[pattern];
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
