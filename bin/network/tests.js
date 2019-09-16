'use strict';
const ava = require('ava');

require('../../scope/h1');
const tests = require('../../lib/tests');

const now = Date.now();

ava.serial('network life cycle', tests.resourceLifeCycle('network', {
    createParams: `--name network-test-${now}`,
    skipTransfer: true,
    skipFqdn: true,
}));

ava.serial('network ip life cycle', async t => {
    const network = await tests.run(`network create --name network-test-${now}`);
    await tests.resourceLifeCycle('network ip', {
        createParams: `--network ${network.id}`,
        listParams: `--network ${network.id}`,
        showParams: `--network ${network.id}`,
        deleteParams: `--network ${network.id}`,
        tagParams: `--network ${network.id}`,
        serviceListParams: `--network ${network.id}`,
        serviceShowParams: `--network ${network.id}`,
        skipHistory: true,
        stateCreated: 'Unallocated',
        schemaRef: '#/components/schemas/ip',
        skipTransfer: true,
        skipFqdn: true,
        skipRename: true,
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
    const network_with_firewall = await tests.run(`network show --network ${network.id}`);
    t.true(network_with_firewall.firewall === firewall.id);

    await tests.run(`network firewall remove --network ${network.name}`);

    await tests.remove('network', network);
    await tests.remove('firewall', firewall);
});
