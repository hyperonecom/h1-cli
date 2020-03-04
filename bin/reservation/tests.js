'use strict';
const ava = require('ava');

require('../../scope/h1');
const tests = require('../../lib/tests');

const reservation_flavour = '_dev.pico, 1 day';
const vm_flavour = '_dev.pico';

ava.serial('reservation life cycle', tests.resourceLifeCycle('reservation', {
    createParams: `--name ${tests.getName('reservation life cycle')} --type "${reservation_flavour}"`,
    stateCreated: 'Detached',
    skipDelete: true,
    skipFqdn: true,
    skipTransfer: true,
    // The resource is available earlier than it will be charged.
    // The resource is not in an optimal state before charging.
    // We wait a certain period for charging.
    delayStateTest: tests.DELAY.reservation_bill,
}));

ava.serial('reservation assign limits', async t => {
    const reservation = await tests.run(`reservation create --name ${tests.getName(t.title)} --type '${reservation_flavour}'`);

    const reservation_list = await tests.run('reservation list');
    t.true(reservation_list.some(x => x.id === reservation.id));
    const token = await tests.getToken();

    const common_vm_params = `--no-start --password ${token}`;
    const vm_wrong_type = await tests.run(`vm create --name ${tests.getName(t.title, 'vm wrong type')} --no-image --type a1.nano ${common_vm_params}`);
    const vm_valid = await tests.run(`vm create --name ${tests.getName(t.title, 'vm valid')} --no-image --type ${vm_flavour} ${common_vm_params} `);
    const vm_over_limit = await tests.run(`vm create --name ${tests.getName(t.title, 'vm wrong type')} --no-image --type ${vm_flavour} ${common_vm_params}`);

    await tests.delay(tests.DELAY.resource_bill); // billing item need to be created

    await t.throwsAsync(() => tests.run(`reservation assign --reservation ${reservation.name} --resource ${vm_wrong_type.id}`));
    await tests.run(`reservation assign --reservation ${reservation.name} --resource ${vm_valid.id}`);
    await t.throwsAsync(() => tests.run(`reservation assign --reservation ${reservation.name} --resource ${vm_over_limit.id}`));

    const assigned = await tests.run(`reservation show --reservation ${reservation.id}`);
    t.true(assigned.assigned === vm_valid.id);
    t.true(assigned.state === 'Attached', `State of resource: ${assigned.state}`);

    await tests.remove('vm', vm_valid);
    await tests.remove('vm', vm_over_limit);
    await tests.remove('vm', vm_wrong_type);
});

ava.serial('reservation extend', async t => {
    const reservation = await tests.run(`reservation create --name ${tests.getName(t.title, 'vm-wrong-type')} --type '${reservation_flavour}'`);
    await tests.delay(tests.DELAY.reservation_bill);
    const refreshed = await tests.run(`reservation show --reservation ${reservation.id}`);
    t.true(refreshed.state === 'Detached');
    await tests.run(`reservation extend --reservation ${reservation.name}`);
    await t.throwsAsync(() => tests.run(`reservation extend --reservation ${reservation.name}`));
    // TODO: Add verification real change of billing period
});
