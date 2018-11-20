'use strict';
const ava = require('ava');

require('../../scope/h1');
const tests = require('../../lib/tests');

const now = Date.now();

ava.serial('reservation life cycle', tests.resourceLifeCycle('reservation', {
    createParams: `--name reservation-life-cycle-${now} --type "m2.tiny, 1 year"`,
    stateCreated: 'Detached',
    skipDelete: true,
}));

ava.serial('reservation assign limits', async t => {
    const reservation = await tests.run(`reservation create --name reservation-${now} --type 'm2.tiny, 1 year'`);
    t.true(reservation.state === 'Detached');

    const reversation_list = await tests.run('reservation list');
    t.true(reversation_list.some(x => x._id === reservation._id));
    const token = await tests.getToken();

    const common_vm_params = `--os-disk ssd,10 --type m2.tiny --image debian --password ${token}`;
    const vm_wrong_type = await tests.run(`vm create --name reservation-vm-wrong-type-${now} ${common_vm_params}`);
    const vm_valid = await tests.run(`vm create --name reservation-vm-${now} ${common_vm_params} `);
    const vm_over_limit = await tests.run(`vm create --name reservation-vm-over-limit-${now} ${common_vm_params}`);

    await t.throwsAsync(() => tests.run(`reservation assign --reservation ${reservation.name} --resource ${vm_valid._id}`));
    await tests.run(`reservation assign --reservation ${reservation.name} --resource ${vm_over_limit._id}`);
    await t.throwsAsync(() => tests.run(`reservation assign --reservation ${reservation.name} --resource ${vm_wrong_type._id}`));

    const assigned = await tests.run(`reservation show --reservation ${reservation._id}`);
    t.true(assigned.assigned ===vm_valid._id);
    await tests.remove('vm', vm_valid);
    await tests.remove('vm', vm_over_limit);
    await tests.remove('vm', vm_wrong_type);
});

ava.serial('reservation extend', async t => {
    const reservation = await tests.run(`reservation create --name reservation-${now} --type 'm2.tiny, 1 year'`);
    t.true(reservation.state === 'Detached');
    await tests.run(`reservation extend --reservation ${reservation.name}`);
    await t.throwsAsync(() => tests.run(`reservation extend --reservation ${reservation.name}`));
    // TODO: Add verification real change of billing period
});
