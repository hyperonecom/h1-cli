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

module.exports = (resource) => Cli.createCommand('import', {
    description: `Import ${supported_label} records of ${resource.title} from BIND-compatible format`,
    plugins: resource.plugins,
    options: Object.assign({}, options, resource.options),
    dirname: __dirname,
    handler: (args) => args.helpers.api
        .get(`${args.$node.parent.config.url(args)}/${args.zone}`)
        .then(async remote_zone => {
            const local_zone = zonefile.parse(fs.readFileSync(args['zone-file'], 'utf-8'));

            for (const type of supported_types) {
                const remote_rrset_names = new Set(remote_zone.recordset
                    .filter(rrset => rrset.type === type.toUpperCase())
                    .map(record => record.name));

                const local_rrset_type = local_zone[type.toLowerCase()] || [];
                const local_rrset_names = new Set(local_rrset_type.map(x => formatRecordName(x.name, remote_zone.name)));
                const need_to_remove = set_difference(remote_rrset_names, local_rrset_names);
                // Delete
                if (args.delete) {
                    for (const rrset_name of need_to_remove) {
                        const rrset = remote_zone.recordset.find(x => x.type === type.toUpperCase() && formatRecordName(x.name, remote_zone.name) === rrset_name);
                        const url = `${resource.url(args)}/${args.zone}/recordset/${rrset.id}`;
                        await args.helpers.api.delete(url);
                        console.error(`Delete ${type.toUpperCase()} ${rrset_name}`);
                    }
                }

                // Upsert
                const need_to_upsert = set_difference(local_rrset_names, need_to_remove);
                for (const rrset_name of need_to_upsert) {
                    const records = local_rrset_type
                        .filter(rrset => rrset.name === rrset_name)
                        .map(record => recordTypes[type].to_content(record, remote_zone))
                        .map(content => ({
                            content: content,
                            disabled: false,
                        }));

                    const ttl = local_rrset_type.find(rrset => formatRecordName(rrset.name, remote_zone.name) === rrset_name).ttl | local_zone.$ttl;

                    const data = {
                        name: rrset_name,
                        ttl: ttl,
                        type: type.toUpperCase(),
                        record: records,
                    };

                    const remote_rrset = remote_zone.recordset.find(rrset => rrset.type === type.toUpperCase() && rrset.name === rrset_name);
                    if (remote_rrset) {
                        // Update
                        const url = `${resource.url(args)}/${args.zone}/recordset/${remote_rrset.id}`;
                        await args.helpers.api.patch(url, data);
                        console.error(`Update ${type.toUpperCase()} ${rrset_name}`);
                    } else {
                        // Add
                        const url = `${resource.url(args)}/${args.zone}/recordset`;
                        await args.helpers.api.post(url, data);
                        console.error(`Add ${type.toUpperCase()} ${rrset_name}`);
                    }
                }
            }
            return args.helpers.api
                .get(`${resource.url(args)}/${args.zone}`)
                .then(result => args.helpers.sendOutput(args, result));
        }),
});
