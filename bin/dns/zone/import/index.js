'use strict';

const zonefile = require('dns-zonefile');
const fs = require('fs');
const Cli = require('lib/cli');
const formatRecordName = require('../../lib').formatRecordName;
const recordTypes = require('../../recordTypes');

const options = {
    zone: {
        description: 'DNS zone name',
        type: 'string',
        required: true,
    },
    'zone-file': {
        description: 'File of zone in BIND-compatbile format',
        type: 'string',
        required: true,
    },
    delete: {
        description: 'Delete remote record-sets that do not exist locally',
        type: 'boolean',
    },
};

const set_difference = (set1, set2) => new Set([...set1].filter(x => !set2.has(x)));

const supported_types = Object
    .keys(recordTypes)
    .filter(x => recordTypes[x].to_content);

const supported_label = supported_types
    .map(x => x.toUpperCase())
    .join(', ');

const equalRrset = (a, b) => a.record.length == b.record.length &&
    a.record.every(x => b.record.some(y => y.content == x.content)) &&
    b.record.every(x => a.record.some(y => y.content == x.content));

const zonefile2rrset = (fname, dnsName) => {
    const local_zone = zonefile.parse(fs.readFileSync(fname, 'utf-8'));
    const rrset = [];
    for (const rrtype of supported_types) {
        const rrset_type = local_zone[rrtype.toLowerCase()] || [];
        rrset.push(...[...new Set(rrset_type.map(x => x.name))].map(name => {
            const records = rrset_type.filter(x => formatRecordName(x.name, dnsName) === formatRecordName(name, dnsName));
            const ttl = records.length >= 0 ? records[0].ttl || local_zone.$ttl : local_zone.$ttl;

            return {
                name: formatRecordName(name, dnsName),
                type: rrtype.toUpperCase(),
                ttl,
                record: rrset_type.filter(x => x.name === name).map(x => ({
                    content: recordTypes[rrtype].to_content(x, dnsName),
                    enable: true,
                })),
            };
        }));
    }
    return rrset;
};

module.exports = (resource) => Cli.createCommand('import', {
    description: `Import ${supported_label} records of ${resource.title} from BIND-compatible format`,
    plugins: resource.plugins,
    options: Object.assign({}, options, resource.options),
    dirname: __dirname,
    handler: async (args) => {
        Cli.mutually_exclusive_validate(args, 'zone-file', 'nameserver');

        const remote_zone = await args.helpers.api.get(`${resource.url(args)}/${args.zone}`);
        const local_zone = zonefile2rrset(args['zone-file'], remote_zone.dnsName);

        for (const type of supported_types) {
            const remote_rrset_names = new Set(remote_zone.recordset
                .filter(rrset => rrset.type === type.toUpperCase())
                .map(rrset => rrset.name)
            );
            const local_rrset_names = new Set(local_zone
                .filter(rrset => rrset.type === type.toUpperCase())
                .map(rrset => rrset.name)
            );
            const need_to_remove = set_difference(remote_rrset_names, local_rrset_names);

            // Delete
            if (args.delete) {
                for (const rrset_name of need_to_remove) {
                    const rrset = remote_zone.recordset.find(x => x.type === type.toUpperCase() && x.name === rrset_name);
                    const url = `${resource.url(args)}/${args.zone}/recordset/${rrset.id}`;
                    await args.helpers.api.delete(url);
                    console.error(`Delete ${type.toUpperCase()} ${rrset_name}`);
                }
            }

            // Upsert
            const need_to_upsert = set_difference(local_rrset_names, need_to_remove);
            for (const rrset_name of need_to_upsert) {
                const rrset = local_zone
                    .find(rrset =>
                        rrset.type === type.toUpperCase() && rrset.name == rrset_name
                    );

                const remote_rrset = remote_zone.recordset.find(rrset => rrset.type === type.toUpperCase() && rrset.name === rrset_name);
                if (remote_rrset && !equalRrset(rrset, remote_rrset)) {
                    // Update
                    const url = `${resource.url(args)}/${args.zone}/recordset/${remote_rrset.id}`;
                    await args.helpers.api.patch(url, rrset);
                    console.error(`Update ${type.toUpperCase()} ${rrset_name}`);
                } else if (!remote_rrset) {
                    // Add
                    const url = `${resource.url(args)}/${args.zone}/recordset`;
                    await args.helpers.api.post(url, rrset);
                    console.error(`Add ${type.toUpperCase()} ${rrset_name}`);
                } else {
                    console.error(`Skip update ${type.toUpperCase()} ${rrset_name}`);
                }
            }
        }

        return args.helpers.api
            .get(`${resource.url(args)}/${args.zone}`)
            .then(result => args.helpers.sendOutput(args, result));
    },
});
