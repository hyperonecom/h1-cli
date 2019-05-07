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
    // The resource is available earlier than it will be charged.
    // The resource is not in an optimal state before charging.
    // We wait a certain period for charging.
    delayStateTest: 4 * 60 * 1000,
}));

ava.skip('reservation assign limits', async t => {
    const reservation = await tests.run(`reservation create --name ${tests.getName(t.title)} --type '${reservation_flavour}'`);

    const reversation_list = await tests.run('reservation list');
    t.true(reversation_list.some(x => x._id === reservation._id));
    const token = await tests.getToken();

    const common_vm_params = `--type ${vm_flavour} --no-start --password ${token}`;
    const vm_wrong_type = await tests.run(`vm create --name ${tests.getName(t.title, 'vm wrong type')} ${common_vm_params}`);
    const vm_valid = await tests.run(`vm create --name ${tests.getName(t.title, 'vm valid')} ${common_vm_params} `);
    const vm_over_limit = await tests.run(`vm create --name ${tests.getName(t.title, 'vm wrong type')} ${common_vm_params}`);
    await tests.delay(4 * 60 * 1000);
    await tests.run(`reservation assign --reservation ${reservation.name} --resource ${vm_valid._id}`);
    await t.throwsAsync(() => tests.run(`reservation assign --reservation ${reservation.name} --resource ${vm_over_limit._id}`));
    await t.throwsAsync(() => tests.run(`reservation assign --reservation ${reservation.name} --resource ${vm_wrong_type._id}`));

    const assigned = await tests.run(`reservation show --reservation ${reservation._id}`);
    t.true(assigned.assigned === vm_valid._id);
    t.true(assigned.state === 'Attached');

    await tests.remove('vm', vm_valid);
    await tests.remove('vm', vm_over_limit);
    await tests.remove('vm', vm_wrong_type);
});

ava.skip('reservation extend', async t => {
    const reservation = await tests.run(`reservation create --name ${tests.getName(t.title, 'vm-wrong-type')} --type '${reservation_flavour}'`);
    await tests.delay(4 * 60 * 1000);
    t.true(reservation.state === 'Detached');
    await tests.run(`reservation extend --reservation ${reservation.name}`);
    await t.throwsAsync(() => tests.run(`reservation extend --reservation ${reservation.name}`));
    // TODO: Add verification real change of billing period
});
