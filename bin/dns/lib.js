'use strict';
const Cli = require('lib/cli');


const addTrailingDot = name => /\.$/.test(name) || /^[a-f0-9]{24}$/.test(name) ? name : `${name}.`;

const formatRecordName = (name, zone) => {
    const re = new RegExp(`(\\.|${zone})$`);

    if (['@', '.'].includes(name)) {
        return zone;
    } else if (!re.test(name)) {
        name = `${name}.${zone}`;
    } else if (/^@$/.test(name)) {
        name = zone;
    }

    return name;
};

const findRRset = async (resource, args, type) => {
    args.zone = module.exports.addTrailingDot(args.zone);
    const zone = await args.helpers.api.get(resource.url(args));
    args.zone = zone.id;
    const recordsets = await args.helpers.api.get(`${resource.url(args)}/recordset`);
    const rset = recordsets.find(rs => rs.type == type.toUpperCase() && rs.name == module.exports.formatRecordName(args.name, zone.name));

    if (!rset) {
        throw Cli.error.notFound(`Not found ${type.toUpperCase()} '${args.name}' record-set`);
    }
    return rset;
};

module.exports = {
    addTrailingDot,
    formatRecordName,
    findRRset,
};
