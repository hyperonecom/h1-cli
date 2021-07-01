
const extractId = (value) => {
    if (value.startsWith('/')) return value.split('/').pop();
    return value;
};

function isInteger(value) {
    return /^-?\d+$/.test(value);
}

const nestedValue = schema => value => {
    const result = {};
    for (const v of value.split(',')) {
        const [pkey, pvalue] = v.split(/=/, 2);
        const type = schema.properties[pkey] && schema.properties[pkey].type;
        if (type == 'integer') {
            if (!isInteger(pvalue)) {
                throw new Error(`Invalid value. Required integer for nested value ${pkey}.`);
            }
            result[pkey] = Number(pvalue);
        } else if (type == 'array') {
            if (!result[pkey]) result[pkey] = [];
            result[pkey].push(pvalue);
        } else {
            result[pkey] = pvalue;
        }
    }
    return result;
};

const booleanish = value => {
    if (['true', 't', 'y', 'on'].includes(value.toLowerCase())) {
        return true;
    }
    if (['false', 'f', 'n', 'off'].includes(value.toLowerCase())) {
        return false;
    }
    throw new Error('Invalid value. Require \'true\' or \'false\'');
};

export default {
    extractId,
    nestedValue,
    booleanish,
};

