'use strict';

const ava = require('ava');

require('../../scope/h1');
const tests = require('../../lib/tests');

const now = Date.now();

ava.test.serial('ip life cycle', tests.resourceLifeCycle('ip', ''));

ava.test.serial('ip ptr update', async t => {
    const fresh_ip = await tests.run('ip create');
    const updated_ip = await tests.run(`ip ptr --ip ${fresh_ip._id} --value mail.host.example.com`);
    t.true(updated_ip.ptrRecord === 'mail.host.example.com');
    await tests.remove('ip', updated_ip);
});

ava.test.serial('ip associate & disassociate', async t => {
    const ip = await tests.run('ip create');

    const password = await tests.getToken();

    const network = await tests.run(`network create --name net-ip-test-${now}`);
    const vm = await tests.run(`vm create --type a1.nano --no-start --name vm-ip-test-${now} --network ${network._id} --password ${password}`);
    const nic_list = await tests.run(`vm nic list --vm ${vm._id}`);
    const ip_private = nic_list[0].ip[0];

    const result = await tests.run(`ip associate --ip ${ip.address} --private-ip ${ip_private.address}`);

    t.true(result.state === 'Associated');

    const disassociated = await tests.run(`ip disassociate --ip ${ip.address}`);
    t.true(disassociated.state === 'Unallocated');

    await tests.remove('vm', vm);
    await tests.remove('network', network);

    await tests.remove('ip', ip);
});
