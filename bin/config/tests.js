'use strict';
const ava = require('ava');

require('../../scope/h1');
const tests = require('../../lib/tests');

const now = Date.now();

ava.test('config set & get & show & unset', async t => {
    const key = 'vm.create.name';
    const value = `my-home-${now}`;
    await tests.run(`config set --key ${key} --value ${value}`);

    const result = await tests.run(`config get --key ${key}`);
    t.true(result === value);

    const content = await tests.run('config show');
    t.true(content.vm.create.name === value);

    await tests.run(`config unset --key ${key}`);
    const missing = await tests.run(`config get --key ${key}`);
    t.true(missing === 'key not set');
});
