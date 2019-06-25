'use strict';
const ava = require('ava');

require('../../scope/h1');
const tests = require('../../lib/tests');

const now = Date.now();

ava.serial('network life cycle', tests.resourceLifeCycle('network', {
    createParams: `--name network-test-${now}`,
    skipFqdn: true,
}));

ava.serial('network rename', tests.resourceRename('network', `--name network-test-${now}`));

ava.serial('network ip life cycle', async t => {
    const network = await tests.run(`network create --name network-test-${now}`);
    await tests.resourceLifeCycle('network ip', {
        createParams: `--network ${network._id}`,
        listParams: `--network ${network._id}`,
        showParams: `--network ${network._id}`,
        deleteParams: `--network ${network._id}`,
        tagParams: `--network ${network._id}`,
        serviceListParams: `--network ${network._id}`,
        serviceShowParams: `--network ${network._id}`,
        skipHistory: true,
        stateCreated: 'Unallocated',
        schemaRef: '#/components/schemas/ip',
        skipFqdn: true,
        skipTransfer: true,
    })(t);
    await tests.remove('network', network);
});

ava.serial('network using custom ip', async t => {
    const private_ip = '10.214.180.10';
    const name = `my-ip-network-${now}`;
    const network = await tests.run(`network create --name ${name}  --address 10.214.180.0/24 --gateway ${private_ip}`);

    await tests.run(`network ip create --network ${name} --address ${private_ip}`);

    const list = await tests.run(`network ip list --network ${name}`);
    t.true(list.some(x => x.address === private_ip));

    await tests.remove('network', network);
});

ava.serial('network firewall', async t => {
    const network = await tests.run(`network create --name ${tests.getName(t.title)}`);
    const firewall = await tests.run(`firewall create --name ${tests.getName(t.title)}`);

    await tests.run(`network firewall add --firewall ${firewall.name} --network ${network.name}`);
    const network_with_firewall = await tests.run(`network show --network ${network._id}`);
    t.true(network_with_firewall.firewall === firewall._id);

    await tests.run(`network firewall remove --network ${network.name}`);

    await tests.remove('network', network);
    await tests.remove('firewall', network);
});
