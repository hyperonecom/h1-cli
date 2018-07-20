'use strict';

const ava = require('ava');

require('../../scope/h1');
const tests = require('../../lib/tests');

const now = Date.now();

ava.test.serial('log life cycle', tests.resourceLifeCycle('log', `--name vault-test-${now} --retention 30`));

ava.test.serial('log credential password life cycle', async t => {
    const log = await tests.run(`log create --name vault-test-${now} --retention 10`);
    await tests.passwordLifeCycle(t, 'log', log);
    await tests.remove('log', log);
});
