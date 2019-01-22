'use strict';
const ava = require('ava');
// const requests = require('superagent');

require('../../scope/h1');
const tests = require('../../lib/tests');
const fs = require('fs');

const now = Date.now();

const fsPromiseUnlink = path => new Promise((resolve, reject) => {
    fs.unlink(path, (err) => {
        if (err) return reject(err);
        resolve(true);
    });
});

ava.serial('dns zone life cycle', tests.resourceLifeCycle('dns zone', {
    createParams: `--name dns-zone-${now}.com`,
    stateCreated: 'Online',
    skipCreated: true,
    skipHistory: true,
    skipTag: true,
    skipService: true,
    skipOpenApi: true,
}));

ava.serial('dns zone export', async t => {
    const name = `dns-export-${now}.com`;
    const zone = await tests.run(`dns zone create --name ${name}`);
    const export_content = await tests.run(`dns zone export --zone ${name}`);
    t.true(export_content.includes('hostmaster.hyperone.com.'));
    await tests.remove('dns zone', zone);
});

const recordTypes = {
    a: ['127.0.0.2', '127.0.0.3'],
    aaaa: ['fdda:5cc1:23:4::1f', 'fdda:5cc1:23:4::1e'],
    cname: ['cname.example.com.', 'cname2.example.com.'],
    txt: ['"txt.example.com"', '"txt2.example.com"'],
    mx: ['10 mx.example.com.', '5 mx2.example.com.'],
    ns: ['ns3.example.com.', 'ns4.example.com.'],
    srv: ['10 5 11 s1.example.com.', '10 5 11 s2.example.com.'],
    soa: [
        'pns.hyperone.com. hostmaster.hyperone.com. 2018092401 15 180 1209600 1800',
        'pns.hyperone.com. hostmaster.hyperone.com. 2018092401 15 90 1209600 1800',
    ],
};


const test_record_values = async (t, zone, type, name, expected_values) => {
    const list = await tests.run(`dns record-set ${type} list --zone ${zone.name}`);
    const record_set = list.find(rs => rs.name === name && rs.type.toLowerCase() === type);
    const received_values = record_set.records.map(r => r.content);
    t.deepEqual(received_values.sort(), expected_values.sort());
};

Object.entries(recordTypes).forEach(([type, values]) => {
    ava.serial(`dns zone record-set ${type} life cycle`, async t => {
        const zone = await tests.run(`dns zone create --name ${type}.dns-record-set-${now}.com`);
        const name = `${type}-${now}`;
        const full_name = `${name}.${zone.name}`;

        // Create record-set
        await tests.run(`dns record-set ${type} create --name ${name} --zone ${zone.name} --value '${values[0]}'`);
        await test_record_values(t, zone, type, full_name, [values[0]]);

        // Add record to record-set
        await tests.run(`dns record-set ${type} add-record --name ${name} --zone ${zone.name} --value '${values[1]}'`);
        await test_record_values(t, zone, type, full_name, [values[0], values[1]]);

        // Delete record from record-set
        await tests.run(`dns record-set ${type} delete-record --name ${name} --zone ${zone.name} --value '${values[1]}'`);
        await test_record_values(t, zone, type, full_name, [values[0]]);

        // Remove record-set at all
        await tests.run(`dns record-set ${type} delete --name ${name} --zone ${zone.name}`);
        const list = await tests.run(`dns record-set ${type} list --zone ${zone.name}`);
        t.false(list.some(r => r.name === full_name));

        // Clean up
        await tests.remove('dns zone', zone);
    });

    ava.serial(`dns exports-import record type ${type}`, async t => {
        const zone = await tests.run(`dns zone create --name ${type}.export-${now}.com`);
        const zone_import = await tests.run(`dns zone create --name ${type}.import-${now}.com`);
        const name = `${type}-${now}`;

        await tests.run(`dns record-set ${type} create --name ${name} --zone ${zone.name}
                         --value '${values[0]}' --value '${values[1]}'`);

        // Validates that export works
        const content = await tests.run(`dns zone export --zone ${zone.name}`);
        t.true(content.includes(values[0].split(/\s+/)[0].replace(/ /g, '\t')));
        t.true(content.includes(values[1].split(/\s+/)[0].replace(/ /g, '\t')));

        const zone_file = tests.getRandomFile(content.replace(new RegExp(zone.name, 'g'), zone_import.name));
        await tests.run(`dns zone import --zone ${zone_import.name} --zone-file ${zone_file}`);

        // Validates that import works via validated export
        const content_export = await tests.run(`dns zone export --zone ${zone_import.name}`);
        t.true(content_export.includes(values[0].split(/\s+/)[0].replace(/ /g, '\t')));
        t.true(content_export.includes(values[1].split(/\s+/)[0].replace(/ /g, '\t')));

        await fsPromiseUnlink(zone_file);
        await tests.remove('dns zone', zone);
        await tests.remove('dns zone', zone_import);
    });
});

ava.serial('import zone from file', async t => {
    const zone_file = tests.getRandomFile(`$TTL 7600
@                   IN SOA     ns1.example.com.    hostmaster.ns.webcorp.co.uk. ( 2004080901 21600 7200 1209600 172800 )
                    IN NS      ns1.example.com.
                    IN NS      ns2.example.com.
                    IN MX      0 mx0.example.com.
*                   IN A       123.123.123.123
@                   IN A       121.121.121.121`);

    const zone = await tests.run(`dns zone create --name import-file-${now}.com`);
    await tests.run(`dns zone import --zone ${zone.name} --zone-file ${zone_file}`);

    await test_record_values(t, zone, 'a', `*.${zone.name}`, ['123.123.123.123']);
    await test_record_values(t, zone, 'a', zone.name, ['121.121.121.121']);
    await test_record_values(t, zone, 'mx', zone.name, ['0 mx0.example.com.']);
    await tests.remove('dns zone', zone);
    await fsPromiseUnlink(zone_file);
});

// ava.serial('dns record-set a dynamic-dns', async t => {
//     const zone = await tests.run(`dns zone create --name ddns-${now}.com`);
//     await tests.run(`dns record-set a dynamic-dns --name my-home --zone ${zone.name}`);
//     const ip = await requests.get('https://api.ipify.org?format=json')
//         .then(resp => resp.body.ip);
//     await test_record_values(t, zone, 'a', `my-home.${zone.name}`, [ip]);
//
//     await tests.remove('dns zone', zone);
// });
