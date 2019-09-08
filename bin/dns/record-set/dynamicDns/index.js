'use strict';

const Cli = require('lib/cli');

const addTrailingDot = require('../../lib').addTrailingDot;
const formatRecordName = require('../../lib').formatRecordName;

const options = {
    name: {
        description: 'Record set name',
        type: 'string',
        required: true,
    },
};


module.exports = resource => Cli.createCommand('dynamic-dns', {
    dirname: __dirname,
    description: 'Updates or - if not available - creates record set with client IP address',
    plugins: resource.plugins,
    options: Object.assign({}, options, resource.options),
    resource: resource,
    earlyAdoptersOnly: true,
    handler: async args => {
        args.zone = addTrailingDot(args.zone);
        const zone = await args.helpers.api.get(resource.url(args));
        const rrset = {
            name: formatRecordName(args.name, zone.dnsName),
            ttl: args.ttl,
            type: 'A',
            record: [
                { content: '{{REQUEST_IP}}', enabled: true },
            ],
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
