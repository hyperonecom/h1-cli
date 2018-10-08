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

const handle = (args) => args.helpers.api
    .get(`${args.$node.parent.config.url(args)}/${args.zone}`)
    .then(async remote_zone => {
        const local_zone = zonefile.parse(fs.readFileSync(args['zone-file'], 'utf-8'));
        const requests = new Set();

        supported_types.forEach(type => {
            const remote_rrset_names = new Set(remote_zone.rrsets
                .filter(rrset => rrset.type === type.toUpperCase())
                .map(record => record.name === remote_zone.name ? '@' : record.name));
            const local_rrset_type = local_zone[type] || [];
            const local_rrset_names = new Set(local_rrset_type.map(x => x.name));

            const need_to_remove = set_difference(remote_rrset_names, local_rrset_names);

            if (args.delete) {
                need_to_remove.forEach(rrset_name => {
                    const remote_name = rrset_name === '@' ? remote_zone.name : rrset_name;
                    const url = `${args.$node.parent.config.url(args)}/${args.zone}/rrsets/${type.toUpperCase()}/${remote_name}`;
                    requests.push(args.helpers.api.delete(url));
                });
            }

            local_rrset_names.forEach(rrset_name => {
                const remote_name = rrset_name === '@' ? remote_zone.name : rrset_name;
                const records = local_rrset_type
                    .filter(rrset => rrset.name === rrset_name)
                    .map(recordTypes[type].to_content)
                    .map(content => ({
                        content: content,
                        disabled: false,
                    }));

                const ttl = local_rrset_type.find(rrset => rrset.name === rrset_name).ttl | local_zone.$ttl;

                const data = {
                    name: formatRecordName(remote_name, remote_zone.name),
                    ttl: ttl,
                    records: records,
                };

                const url = `${args.$node.parent.config.url(args)}/${args.zone}/rrsets/${type.toUpperCase()}`;
                const req = args.helpers.api.post(url, data);
                requests.add(req.then(() => requests.delete(req)));
            });
        });
        await Promise.all(requests);
        return args.helpers.api
            .get(`${args.$node.parent.config.url(args)}/${args.zone}`)
            .then(result => args.helpers.sendOutput(args, result));
    });

module.exports = (resource) => Cli.createCommand('import', {
    description: `Import ${supported_label} records of ${resource.title} from BIND-compatible format`,
    plugins: resource.plugins,
    options: Object.assign({}, options, resource.options),
    handler: handle,
    dirname: __dirname,
});
