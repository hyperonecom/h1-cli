'use strict';
const ava = require('ava');

require('../../scope/h1');
const tests = require('../../lib/tests');

const now = Date.now();

const name = `firewall-test-${now}`;
const createParams = `--name ${name}`;

ava.serial('firewall life cycle', tests.resourceLifeCycle('firewall', {
    createParams: createParams,
    skipHistoryCreated: true,
    stateCreated: 'Detached',
    skipFqdn: true,
}));

ava.serial('firewall rename', tests.resourceRename('firewall', createParams));

ava.serial('firewall attach & detach', async t => {
    let network = await tests.run(`network create --name network-${name}`);

    const firewall = await tests.run(`firewall create ${createParams}`);
    await tests.run(`firewall attach --firewall ${firewall._id} --network ${network._id}`);

    const refreshed = await tests.run(`firewall show --firewall ${firewall._id}`);
    t.true(refreshed.state === 'Attached');

    network = await tests.run(`network show --network ${network._id}`);
    t.true(network.firewall === firewall._id);

    await tests.run(`firewall detach --firewall ${firewall._id}`);

    network = await tests.run(`network show --network ${network._id}`);
    t.true(!network.firewall);

    await tests.remove('firewall', firewall);
    await tests.remove('network', network);
});

['ingress', 'egress'].forEach(table => {
    ava.serial(`firewall rule ${table} life cycle`, async t => {
        const firewall = await tests.run(`firewall create ${createParams}`);
        const name = `${now}-${table}`;

        const rule = await tests.run(`firewall ${table} add --firewall ${firewall._id} --action allow --priority 300 --filter tcp:80 --external 0.0.0.0/0 --internal 10.177.2.2 --name ${name}`);

        const added_list = await tests.run(`firewall ${table} list --firewall ${firewall._id}`);
        t.true(added_list.some(r => r.name === name));

        const refreshed_rule = await tests.run(`firewall ${table} show --firewall ${firewall._id} --${table} ${rule._id}`);
        t.true(refreshed_rule.name === rule.name && refreshed_rule._id === rule._id);

        await tests.run(`firewall ${table} delete --firewall ${firewall._id} --rule ${rule._id}`);

        const clean_list = await tests.run(`firewall ${table} list --firewall ${firewall._id}`);
        t.true(!clean_list.some(r => r.name === name));

        await tests.remove('firewall', firewall);
    });
});
