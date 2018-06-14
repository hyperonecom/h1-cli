'use strict';

module.exports.addTrailingDot = name => /\.$/.test(name) ? name : `${name}.`;

module.exports.formatRecordName = (name, zone) => {
    const re = new RegExp(`(\\.|${zone})$`);

    if (name === '.') {
        return zone;
    } else if (!re.test(name)) {
        name = `${name}.${zone}`;
    } else if (/^@$/.test(name)) {
        name = zone;
    }

    return name;
};
