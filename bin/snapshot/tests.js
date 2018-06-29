'use strict';

const ava = require('ava');

require('../../scope/h1');
const tests = require('../../lib/tests');

const now = Date.now();


ava.test.serial('snapshot create & list & show & rename & delete', async t => {
    const vault = await tests.run(`vault create --name vault-snapshot-test-${now} --size 10`);
    const name = `snapshot-test-${now}`;
    await tests.run(`snapshot create --vault ${vault._id} --name ${name}`);

    const list  = await tests.run('snapshot list');
    const snapshot = list.find(x => x.name === name);
    t.true(!!snapshot);

    const new_name = `${name}-renamed`;
    await tests.run(`snapshot rename --snapshot ${snapshot._id} --new-name ${new_name}`);

    const fresh = await tests.run(`snapshot show --snapshot ${snapshot._id}`);
    t.true(fresh._id === snapshot._id);
    t.true(fresh.name === new_name);

    await tests.remove('snapshot', snapshot);
    await tests.remove('vault', vault);
});
