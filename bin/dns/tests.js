'use strict';
const ava = require('ava');
require('../../scope/h1');
const tests = require('../../lib/tests');
const dns = require('dns');
const util = require('util');
const fs = require('fs');
const dnsSocket = require('dns-socket');
const punycode = require('punycode');

const now = Date.now();
const dnsResolve = util.promisify(dns.resolve);

const queryNameserver = (hostname, rrtype, nss) => new Promise(async (resolve, reject) => {
    const socket = dnsSocket();
    console.log(`Query DNS ${nss} about ${rrtype} ${hostname}`);
    const resps = await Promise.all(nss.map(ns => dnsResolve(ns, 'A'))).catch(reject);
    const ips = resps.flat();
    // The Node standard library does not support CAA records.
    // See https://github.com/nodejs/node/issues/19239 for details
    socket.query({
        questions: [{
            type: rrtype,
            name: hostname,
        }],
    }, 53, ips, (err, res) => {
        if (err) return reject(err);
        return resolve(res);
    });
});

const fsPromiseUnlink = path => new Promise((resolve, reject) => {
    fs.unlink(path, (err) => {
        if (err) return reject(err);
        resolve(true);
    });
});

ava.serial('dns zone life cycle', tests.resourceLifeCycle('dns zone', {
    createParams: `--type public --name dns-zone-${now}.com`,
    stateCreated: 'Online',
    skipFqdn: true,
    skipTransfer: true,
    schemaRef: '#/components/schemas/zone',
}));

ava.serial('dns zone export', async t => {
    const name = `dns-export-${now}.com`;
    const zone = await tests.run(`dns zone create --type public --name ${name}`);
    const export_content = await tests.run(`dns zone export --zone ${name}`);
    t.true(export_content.includes('hostmaster.hyperone.com.'));
    await tests.remove('dns zone', zone);
});

const recordTypes = {
    a: {
        values: ['127.0.0.2', '127.0.0.3'],
        expected: {
            section: 'answers',
            values: ['127.0.0.2'],
        },

    },
    aaaa: {
        values: ['fdda:5cc1:23:4::1f', 'fdda:5cc1:23:4::1e'],
        expected: {
            section: 'answers',
            values: ['fdda:5cc1:23:4::1f'],
        },
    },
    cname: {
        values: ['cname.example.com.', 'cname2.example.com.'],
        expected: {
            section: 'answers',
            values: ['cname.example.com'],
        },
    },
    txt: {
        values: ['txt.example.com', 'txt2.example.com'],
        expected: {
            section: 'answers',
            values: [
                [Buffer.from('txt.example.com')],
            ],
        },
    },
    mx: {
        values: ['10 mx.example.com.', '5 mx.example.com.'],
        expected: {
            section: 'answers',
            values: [{ preference: 10, exchange: 'mx.example.com' }],
        },
    },
    caa: {
        values: ['0 issue "comodoca.com"'],
        expected: {
            section: 'answers',
            values: [{
                flags: 0,
                tag: 'issue',
                value: 'comodoca.com',
                issuerCritical: false,
            }],
        },
    },
    ns: {
        values: ['ns3.example.com.', 'ns4.example.com.'],
        expected: {
            section: 'authorities',
            values: ['ns3.example.com'],
        },
    },
    srv: {
        values: ['10 1 5060 s1.example.com.', '5 1 5060 s2.example.com.'],
        expected: {
            section: 'answers',
            values: [{ priority: 10, weight: 1, port: 5060, target: 's1.example.com' }],
        },
    },
    soa: {
        values: [
            'pns.hyperone.com. hostmaster.hyperone.com. 2018092401 15 180 1209600 1800',
        ],
        expected: {
            section: 'answers',
            values: [{
                mname: 'pns.hyperone.com',
                rname: 'hostmaster.hyperone.com',
                serial: 2018092401,
                refresh: 15,
                retry: 180,
                expire: 1209600,
                minimum: 1800,
            }],
        },
    },
};


const test_record_values = async (t, zone, type, name, expected_values) => {
    const list = await tests.run(`dns record-set ${type} list --zone ${zone.dnsName}`);
    const record_set = list.find(rs => rs.name === name && rs.type.toLowerCase() === type);
    const received_values = record_set.record.map(r => r.content);
    t.deepEqual(received_values.sort(), expected_values.sort());
};

Object.entries(recordTypes).forEach(([type, { expected, values }]) => {
    ava.serial(`dns record-set ${type} life cycle`, async t => {
        const zone = await tests.run(`dns zone create --type public --name ${type}.dns-record-set-${now}.com`);
        const name = `${type}-${now}`;
        const full_name = `${name}.${zone.dnsName}`;

        // Create record-set
        await tests.run(`dns record-set ${type} create --name ${name} --zone ${zone.dnsName} --value '${values[0]}'`);
        await test_record_values(t, zone, type, full_name, [values[0]]);

        if (values.length > 1) {
            // Add record to record-set
            await tests.run(`dns record-set ${type} add-record --name ${name} --zone ${zone.dnsName} --value '${values[1]}'`);
            await test_record_values(t, zone, type, full_name, [values[0], values[1]]);

            // Delete record from record-set
            await tests.run(`dns record-set ${type} delete-record --name ${name} --zone ${zone.dnsName} --value '${values[1]}'`);
            await test_record_values(t, zone, type, full_name, [values[0]]);

            // Upsert record-set
            await tests.run(`dns record-set ${type} upsert --name ${name} --zone ${zone.dnsName} --value '${values[0]}'`);
            await test_record_values(t, zone, type, full_name, [values[0]]);
        }
        // Remove record-set at all
        await tests.run(`dns record-set ${type} delete --name ${name} --zone ${zone.dnsName}`);
        const list = await tests.run(`dns record-set ${type} list --zone ${zone.dnsName}`);
        t.false(list.some(r => r.name === full_name));

        // Clean up
        await tests.remove('dns zone', zone);
    });

    ava.serial(`dns record-set ${type} response`, async t => {
        const zone = await tests.run(`dns zone create --type public --name ${type}.dns-record-set-${now}.com`);
        try {
            const name = `${type}-${now}`;
            const full_name = `${name}.${zone.dnsName}`;

            // Create record-set
            await tests.run(`dns record-set ${type} create --name ${name} --zone ${zone.dnsName} --value '${values[0]}'`);
            await test_record_values(t, zone, type, full_name, [values[0]]);
            await tests.delay(5 * 1000);
            const response = await queryNameserver(full_name, type.toUpperCase(), zone.nameserver);
            t.true(response[expected.section].length > 0);
            t.deepEqual(
                response[expected.section].filter(x => x.type === type.toUpperCase()).map(x => x.data.toString('utf-8')),
                expected.values.map(x => x.toString('utf-8'))
            );
        } finally {
            // Clean up
            await tests.remove('dns zone', zone);
        }
    });

    ava.serial(`dns exports-import record type ${type}`, async t => {
        const zone = await tests.run(`dns zone create --type public --name ${type}.export-${now}.com`);
        const zone_import = await tests.run(`dns zone create --type public --name ${type}.import-${now}.com`);
        try {
            const name = `${type}-${now}`;

            const recordset_start = await tests.run(`dns record-set ${type} list --zone ${zone.dnsName}`);
            const zone_start_content = await tests.run(`dns zone export --zone ${zone.dnsName}`);
            const argv = values.map(x => `--value '${x}'`);
            await tests.run(`dns record-set ${type} create --name ${name} --zone ${zone.dnsName} ${argv.join(' ')}`);
            // Validates that export works
            const content = await tests.run(`dns zone export --zone ${zone.dnsName}`);
            for (const value of values) {
                t.true(content.includes(value.split(/\s+/)[0].replace(/ /g, '\t')));
            }

            const zone_file = tests.getRandomFile(content.replace(new RegExp(zone.dnsName, 'g'), zone_import.name));
            await tests.run(`dns zone import --zone ${zone_import.name} --zone-file ${zone_file}`);

            // Validates that import works via validated export
            const content_export = await tests.run(`dns zone export --zone ${zone_import.name}`);
            for (const value of values) {
                t.true(content_export.includes(value.split(/\s+/)[0].replace(/ /g, '\t')));
            }
            const recordset_imported = await tests.run(`dns record-set ${type} list --zone ${zone.dnsName}`);
            t.true(recordset_imported.length > recordset_start.length);

            // Validates that import deletes records
            const zone_start_file = tests.getRandomFile(zone_start_content.replace(new RegExp(zone.dnsName, 'g'), zone_import.name));
            await tests.run(`dns zone import --zone ${zone_import.name} --zone-file ${zone_start_file} --delete`);
            const recordset_end = await tests.run(`dns record-set ${type} list --zone ${zone_import.name}`);
            t.true(recordset_start.length === recordset_end.length);

            await fsPromiseUnlink(zone_file);
        } finally {
            await tests.remove('dns zone', zone);
            await tests.remove('dns zone', zone_import);
        }
    });
});

ava.serial('import zone from file', async t => {
    const zone_file = tests.getRandomFile(`$TTL 7600
@                   IN SOA     ns1.example.com.    hostmaster.ns.webcorp.co.uk. ( 2004080901 21600 7200 1209600 172800 )
                    IN NS      ns1.example.com.
                    IN NS      ns2.example.com.
                    IN MX      0 mx0.example.com.
*.wildcard          IN A       123.123.123.123
@                   IN A       121.121.121.121
@                   IN CAA     0 issue "ca.example.net"
`);

    const zone = await tests.run(`dns zone create --type public --name import-file-${now}.com`);
    await tests.run(`dns zone import --zone ${zone.dnsName} --zone-file ${zone_file}`);
    await test_record_values(t, zone, 'a', `*.wildcard.${zone.dnsName}`, ['123.123.123.123']);
    await test_record_values(t, zone, 'a', zone.dnsName, ['121.121.121.121']);
    await test_record_values(t, zone, 'mx', zone.dnsName, ['0 mx0.example.com.']);
    await test_record_values(t, zone, 'caa', zone.dnsName, ['0 issue "ca.example.net"']);
    await tests.remove('dns zone', zone);
    await fsPromiseUnlink(zone_file);
});

ava.serial('dns record-set a dynamic-dns', async t => {
    const zone = await tests.run(`dns zone create --name ddns-${now}.com --type public`);
    const rrset = await tests.run(`dns record-set a dynamic-dns --name my-home-${now} --zone ${zone.dnsName}`);
    const ip = await tests.get('https://api.ipify.org?format=json').then(resp => resp.body.ip);
    await test_record_values(t, zone, 'a', rrset.name, [ip]);
    const response = await queryNameserver(rrset.name, 'A', zone.nameserver);
    t.true(response.answers.length > 0);
    t.deepEqual(response.answers.map(x => x.data), [ip]);
    await tests.remove('dns zone', zone);
});

ava.serial('dns manage record-set after rename', async t => {
    const zone = await tests.run(`dns zone create --type public --name A.dns-record-set-${now}.com`);
    await tests.run(`dns zone rename --zone ${zone.id} --new-name 'renamed.com.'`);
    const name = `my-name.${zone.dnsName}`;
    const rrset = await tests.run(`dns record-set a create --name ${name} --zone ${zone.id} --value '1.1.1.1'`);
    t.true(rrset.name == name);
    await tests.remove('dns zone', zone);
});

ava.serial('dns responds on wildcard requests', async t => {
    const value = '2.2.2.2';
    const zone = await tests.run(`dns zone create --type public --name A.dns-record-set-${now}.com`);
    await tests.run(`dns record-set a create --name '*.wildcard' --zone ${zone.id} --value ${value}`);
    const response = await queryNameserver(`anything.wildcard.${zone.dnsName}`, 'A', zone.nameserver);
    t.deepEqual(response.answers.map(x => x.data), [value]);
    await tests.remove('dns zone', zone);
});

ava.serial('dns punycode encoded', async t => {
    const name = `${now}-zażółć-gęślą-jaźń.com.`;
    const value = '3.3.3.3';
    const zone = await tests.run(`dns zone create --type public --name ${name}`);
    t.true(zone.name === name);
    t.true(zone.dnsName === punycode.toASCII(zone.name));
    await tests.run(`dns record-set a create --name x --zone ${zone.id} --value ${value}`);
    const response = await queryNameserver(`x.${zone.dnsName}`, 'A', zone.nameserver);
    t.deepEqual(response.answers.map(x => x.data), [value]);
    await tests.remove('dns zone', zone);
});

ava.serial('dns create with probing', async t => {
    const name = `${tests.getName(t.title)}.probing.${tests.test_zone}.`;
    await tests.run(`dns zone create --type public --name ${name} --dns-probing`);
    const zone = await tests.run(`dns zone show --zone ${name}`);
    t.true(zone.name === name);
    await test_record_values(t, zone, 'txt', zone.dnsName, ['test-content']);
    await test_record_values(t, zone, 'a', `api.${zone.dnsName}`, ['8.8.8.8']);
    await tests.remove('dns zone', zone);
});

ava.serial('dns resolve cname at apex', async t => {
    const ip = '2.2.2.2';

    const content = await tests.getToken();
    const zone = await tests.run(`dns zone create --type public --name ${tests.getName(t.title)}.com`);

    await tests.run(`dns record-set cname create --name '@' --zone ${zone.id} --value ${ip}.nip.io`);
    await tests.run(`dns record-set txt create --name '@' --zone ${zone.id} --value ${content}`);

    const responseA = await queryNameserver(zone.dnsName, 'A', zone.nameserver);
    t.deepEqual(
        responseA.answers.filter(x => x.type === 'A').map(x => x.data),
        [ip]
    );

    const responseTXT = await queryNameserver(zone.dnsName, 'TXT', zone.nameserver);
    t.deepEqual(
        responseTXT.answers.filter(x => x.type === 'TXT').map(x => x.data.toString('utf-8')),
        [content]
    );

    const responseCNAME = await queryNameserver(zone.dnsName, 'CNAME', zone.nameserver);
    t.true(responseCNAME.answers.length == 0);

    await tests.remove('dns zone', zone);
});

ava.serial('dns NS record-set match nameservers', async t => {
    const zone = await tests.run(`dns zone create --type public --name ${tests.getName(t.title)}.com`);
    try {
        await test_record_values(t, zone, 'ns', zone.dnsName, zone.nameserver.map(x => `${x}.`));
    } finally {
        await tests.remove('dns zone', zone);

    }
});
