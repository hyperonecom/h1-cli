'use strict';

const zonefile = require('dns-zonefile');

const Cli = require('lib/cli');
const recordTypes = require('../../recordTypes');

const options = {
    zone: {
        description: 'DNS zone name',
        type: 'string',
        required: true,
    },
};

const supported_types = Object
    .keys(recordTypes)
    .filter(x => recordTypes[x].to_bind);

const supported_label = [...supported_types, 'soa']
    .map(x => x.toUpperCase())
    .join(', ');

const handle = (args) => args.helpers.api.get(
    `${args.$node.parent.config.url(args)}/${args.zone}`, {
        name: args.zone,
    }).then(result => {

    const zone = {
        $origin: result.name,
        $ttl: 3600,
    };

    const soa_rrset = result.recordset.find(x => x.type === 'SOA');

    if (soa_rrset && soa_rrset.record.length) {
        const parts = soa_rrset.record[0].content.split(' ');
        zone.soa = {
            mname: parts[0],
            rname: parts[1],
            serial: parts[2],
            refresh: parts[3],
            retry: parts[4],
            expire: parts[5],
            minimum: parts[6],
        };
    }

    supported_types
        .forEach(type => {
            zone[type] = [];
            result.recordset
                .filter(x => x.type === type.toUpperCase())
                .map(rrset => {
                    zone[type].push(...rrset.record.map(record => Object.assign(
                        {
                            ttl: rrset.ttl,
                            name: rrset.name !== result.name ? rrset.name : null,
                        },
                        recordTypes[type].to_bind(record.content)
                    )));
                });
        });
    return zonefile.generate(zone);
});

module.exports = (resource) => Cli.createCommand('export', {
    description: `Export ${supported_label} records of ${resource.title} in BIND-compatible format`,
    plugins: resource.plugins,
    options: Object.assign({}, options, resource.options),
    handler: handle,
    dirname: __dirname,
});
