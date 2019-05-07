'use strict';

const ava = require('ava');

require('../../scope/h1');
const tests = require('../../lib/tests');

const now = Date.now();


ava.serial('snapshot life cycle', async t => {
    const vault = await tests.run(`vault create --name vault-snapshot-test-${now} --size 10`);
    const name = `snapshot-test-${now}`;

    await tests.resourceLifeCycle('snapshot', {
        createParams: `--vault ${vault._id} --name ${name}`,
        stateCreated: 'Online',
        skipFqdn: true,
    })(t);


    await tests.remove('vault', vault);
});

ava.serial('snapshot rename', async t => {
    const vault = await tests.run(`vault create --name vault-snapshot-test-${now} --size 10`);
    const name = `snapshot-test-${now}`;

    await tests.resourceRename('snapshot', {
        createParams: `--vault ${vault._id} --name ${name}`,
    })(t);

    await tests.remove('vault', vault);
});
