'use strict';

const Cli = require('lib/cli');

const addTrailingDot = require('../../lib').addTrailingDot;
const formatRecordName = require('../../lib').formatRecordName;
const recordOptions = require('../common').recordOptions;

const options = {
    name: {
        description: 'Record set name',
        type: 'string',
        required: true,
    },
    ttl: {
        description: 'Record set Time To Live (TTL)',
        type: 'int',
        defaultValue: 3600,
    },
};

module.exports = (resource, type) => Cli.createCommand('upsert', {
    dirname: __dirname,
    description: 'Upsert record set',
    plugins: resource.plugins,
    options: Object.assign({}, options, resource.options, recordOptions),
    priority: 25,
    resource: resource,
    handler: async args => {
        args.zone = addTrailingDot(args.zone);
        const zone = await args.helpers.api.get(resource.url(args));
        const rrset = {
            name: formatRecordName(args.name, zone.name),
            ttl: args.ttl,
            type: type.toUpperCase(),
            record: args.values.map(value => ({
                content: value,
                enabled: true,
            })),
        };

        const remote_rrset = zone.recordset.find(x => x.type === rrset.type && x.name === rrset.name);

        if (remote_rrset) {
            const url = `${resource.url(args)}/recordset/${remote_rrset.id}`;
            return args.helpers.api.patch(url, rrset)
                .then(result => args.helpers.sendOutput(args, result));
        }

        const url = `${resource.url(args)}/recordset`;
        return args.helpers.api.post(url, rrset)
            .then(result => args.helpers.sendOutput(args, result));
    },
});
