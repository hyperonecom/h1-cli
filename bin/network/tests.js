'use strict';
const ava = require('ava');

require('../../scope/h1');
const tests = require('../../lib/tests');

const now = Date.now();

ava.test.serial('network life cycle', tests.resourceLifeCycle('network', `--name network-test-${now}`));

ava.test.serial('network rename', tests.resourceRename('network', `--name network-test-${now}`));

ava.test.serial('network ip life cycle', async t => {
    const network = await tests.run(`network create --name network-test-${now}`);
    await tests.resourceLifeCycle('network ip', {
        createParams: `--network ${network._id}`,
        listParams: `--network ${network._id}`,
        showParams: `--network ${network._id}`,
        deleteParams: `--network ${network._id}`,
        skipHistory: true,
        stateCreated: 'Unallocated',
    })(t);
    await tests.remove('network', network);
});

ava.test.serial('network using custom ip', async t => {
    const private_ip = '10.214.180.10';
    const name = `my-ip-network-${now}`;
    const network = await tests.run(`network create --name ${name}  --address 10.214.180.0/24 --gateway ${private_ip}`);

    await tests.run(`network ip create --network ${name} --address ${private_ip}`);

    const list = await tests.run(`network ip list --network ${name}`);
    t.true(list.some(x => x.address === private_ip));

    await tests.remove('network', network);
});
