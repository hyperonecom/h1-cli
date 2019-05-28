'use strict';

const ava = require('ava');

require('../../scope/h1');
const tests = require('../../lib/tests');

ava.serial('env', async t => {
    const content = await tests.run('env');

    t.true(content.includes('_PROJECT'));
    t.true(content.includes('_ACCESS_TOKEN_ID'));
    t.true(content.includes('_ACCESS_TOKEN_SECRET'));
    await tests.envOutput(t, content);
});
