'use strict';

const ava = require('ava');

require('../../scope/h1');
const tests = require('../../lib/tests');

const now = Date.now();

ava.serial('ip life cycle', tests.resourceLifeCycle('ip', {
    createParams: '',
    skipHistoryCreated: true,
    stateCreated: 'Unallocated',
}));

ava.serial('ip ptr update', async t => {
    const fresh_ip = await tests.run('ip create');
    const updated_ip = await tests.run(`ip ptr --ip ${fresh_ip.id} --value mail.host.example.com`);
    t.true(updated_ip.ptrRecord === 'mail.host.example.com');
    await tests.remove('ip', updated_ip);
});

ava.serial('ip create with initial ptr', async t => {
    const ip = await tests.run('ip create --ptr-record mail.host.example.com');
    t.true(ip.ptrRecord === 'mail.host.example.com');
    await tests.remove('ip', ip);
});


ava.serial('ip associate & disassociate', async t => {
    const ip = await tests.run('ip create');

    const password = await tests.getToken();

    const network = await tests.run(`network create --name net-ip-test-${now}`);
    const vm = await tests.run(`vm create --type a1.nano --no-start --name vm-ip-test-${now} --network ${network.id} --password ${password}`);
    const nic_list = await tests.run(`vm nic list --vm ${vm.id}`);
    const ip_private = nic_list[0].ip[0];

    const result = await tests.run(`ip associate --ip ${ip.address} --private-ip ${ip_private.id}`);

    t.true(result.state === 'Associated');

    const disassociated = await tests.run(`ip disassociate --ip ${ip.address}`);
    t.true(disassociated.state === 'Unallocated');

    await tests.remove('vm', vm);
    await tests.remove('network', network);

    await tests.remove('ip', ip);
});
