'use strict';

const ava = require('ava');

require('../../scope/h1');
const tests = require('../../lib/tests');

ava.todo('user create');

ava.serial('user credentials life cycle', tests.credentialsLifeCycle('user credentials'));

ava.todo('user 2fa');

ava.serial('user env', async t => {
    const content = await tests.run('user env');
    t.true(content.includes('_PROJECT'));
    t.true(content.includes('_ACCESS_TOKEN_ID'));
    t.true(content.includes('_ACCESS_TOKEN_SECRET'));
});

// ava.serial('user access rule life cycle', async t => {
//     await tests.accessRuleLifeCycle(t, 'user access rule');
// });
