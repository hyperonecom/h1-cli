'use strict';

const resolvePointer = (data, path) => {
    let pos = data;
    path.split('/').slice(1).forEach(x => {
        pos = pos[x];
    });
    return pos;
};

const serializeValue = (value) => {
    if (typeof value == 'object') {
        return Object.entries(value).map(([name, value]) => `${name}=${value}`).join(',');
    }
    return value;
};

module.exports = {
    resolvePointer,
    serializeValue,
};
