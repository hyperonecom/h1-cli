'use strict';

const extractId = (value) => {
    if (value.startsWith('/')) return value.split('/').pop();
    return value;
};

const nestedValue = value => {
    const result = {};
    for (const v of value.split(',')) {
        const [pkey, pvalue] = v.split(/=/, 2);
        result[pkey] = pvalue;
    }
    return result;
};

module.exports = {
    extractId,
    nestedValue,
};

