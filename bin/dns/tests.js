'use strict';
const ava = require('ava');

require('../../scope/h1');
const tests = require('../../lib/tests');

const now = Date.now();

ava.test.serial('dns zone life cycle', tests.resourceLifeCycle('dns zone', {
    createParams: `--name zone-${now}.example.com`,
    skipCreated: true,
    skipHistory: true
}));

ava.test.serial('dns zone export', async t => {
    const name = `${now}.example.com`;
    const zone = await tests.run(`dns zone create --name ${name}`);
    const export_content = await tests.run(`dns zone export --zone-name ${name}`);
    t.true(export_content.indexOf('hostmaster.hyperone.com.') > -1);
    await tests.remove('dns zone', zone);
});

const recordTypes = {
    a: ['127.0.0.2', '127.0.0.3'],
    cname: ['cname.example.com.', 'cname2.example.com.'],
    txt: ['"txt.example.com"', '"txt2.example.com"'],
    mx: ['10 mx.example.com.', '5 mx2.example.com.'],
    ns: ['ns3.example.com.', 'ns4.example.com.'],
    srv: ['10 5 11 s1.example.com.', '10 5 11 s2.example.com.'],
};


const test_record_values = async (t, zone, type, name, expected_values) => {
    const list = await tests.run(`dns record-set ${type} list --zone ${zone.name}`);
    const record_set = list.find(rs => rs.name === name && rs.type.toLowerCase() === type);
    const received_values = record_set.records.map(r => r.content);
    t.deepEqual(received_values.sort(), expected_values.sort());
};

Object.entries(recordTypes).forEach(([type, values]) => {
    ava.test.serial(`dns zone record-set ${type}`, async t => {
        const zone = await tests.run(`dns zone create --name ${now}.${type}.example.com`);
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
});
