
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

