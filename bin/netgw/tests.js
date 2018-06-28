'use strict';
const ava = require('ava');

require('../../scope/h1');
const tests = require('../../lib/tests');

const now = Date.now();

ava.test.serial('netgw life cycle', async t => {
    const ip = await tests.run('ip create');
    await tests.resourceLifeCycle('netgw', `--name netgw-test-${now} --ip ${ip._id}`)(t);
    await tests.remove('ip', ip);
});

ava.test.serial('netgw attach & detach', async t => {
    const ip = await tests.run('ip create');
    const network = await tests.run(`network create --name netgw-test-${now}`);
    const netgw = await tests.run(`netgw create --name netgw-test-${now} --ip ${ip._id}`);

    await tests.run(`netgw attach --netgw ${netgw._id} --network ${network._id}`);

    const attached_netgw = await tests.run(`netgw show --netgw ${netgw._id}`);
    t.true(attached_netgw.network === network._id);

    await tests.run(`netgw detach --netgw ${netgw._id}`);

    await tests.remove('netgw', netgw);
    await tests.remove('network', network);
    await tests.remove('ip', ip);
});

ava.test.todo('netgw access');
