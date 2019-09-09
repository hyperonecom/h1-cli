'use strict';
const ava = require('ava');

require('../../scope/h1');
const tests = require('../../lib/tests');

const now = Date.now();

ava.serial('netgw life cycle', async t => {
    const ip = await tests.run('ip create');
    await tests.resourceLifeCycle('netgw', {
        createParams: `--name netgw-test-${now} --ip ${ip.id}`,
        stateCreated: 'Detached',
        skipFqdn: true,
        skipTransfer: true,
    })(t);
    await tests.remove('ip', ip);
});

ava.serial('netgw rename', async t => {
    const ip = await tests.run('ip create');
    await tests.resourceRename('netgw', `--name netgw-test-${now} --ip ${ip.id}`)(t);
    await tests.remove('ip', ip);
});

ava.serial('netgw attach & detach', async t => {
    const ip = await tests.run('ip create');
    const network = await tests.run(`network create --name netgw-test-${now}`);
    const netgw = await tests.run(`netgw create --name netgw-test-${now} --ip ${ip.id}`);

    await tests.run(`netgw attach --netgw ${netgw.id} --network ${network.id}`);

    const attached_netgw = await tests.run(`netgw show --netgw ${netgw.id}`);
    t.true(attached_netgw.state == 'Attached');
    t.true(attached_netgw.network === network.id);

    await tests.run(`netgw detach --netgw ${netgw.id}`);

    await tests.remove('netgw', netgw);
    await tests.remove('network', network);
    await tests.remove('ip', ip);
});
