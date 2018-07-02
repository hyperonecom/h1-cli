'use strict';
const ava = require('ava');

require('../../scope/h1');
const tests = require('../../lib/tests');

const now = Date.now();

const name = `firewall-test-${now}`;
const createParams = `--name ${name}`;

ava.test.serial('firewall life cycle', tests.resourceLifeCycle('firewall', {
    createParams: createParams,
    skipHistoryCreated: true,
}));

ava.test.serial('firewall attach & detach', async t => {
    const network = await tests.run(`network create --name network-${name}`);

    const firewall = await tests.run(`firewall create ${createParams}`);
    await tests.run(`firewall attach --firewall ${firewall._id} --network ${network._id}`);

    const refreshed = await tests.run(`firewall show --firewall ${firewall._id}`);

    t.true(refreshed.state === 'Attached');
    t.true(refreshed.network === network._id);

    await tests.run(`firewall detach --firewall ${firewall._id}`);

    await tests.remove('firewall', firewall);
    await tests.remove('network', network);
});

['ingress', 'egress'].forEach(table => {
    ava.test.serial(`firewall rule ${table}`, async t => {
        const firewall = await tests.run(`firewall create ${createParams}`);
        const name = `${now}-${table}`;

        await tests.run(`firewall ${table} add --firewall ${firewall._id} --action allow --priority 300 --filter tcp:80 --external 0.0.0.0/0 --internal 10.177.2.2 --name ${name}`);

        const added_list = await tests.run(`firewall ${table} list --firewall ${firewall._id}`);
        const rule = added_list.find(r => r.name === name);
        t.true(!!rule);

        await tests.run(`firewall ${table} delete --firewall ${firewall._id} --rule ${rule._id}`);
        const clean_list = await tests.run(`firewall ${table} list --firewall ${firewall._id}`);
        t.true(!clean_list.some(r => r.name === name));

        await tests.remove('firewall', firewall);
    });
});
