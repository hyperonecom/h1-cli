'use strict';

const ava = require('ava');

require('../../scope/h1');
const tests = require('../../lib/tests');

ava.test.todo('user create');

ava.test.serial('user credentials life cycle', tests.credentialsLifeCycle('user credentials'));

ava.test.todo('user 2fa');

ava.test.serial('user access rule life cycle', async t => {
    await tests.accessRuleLifeCycle(t, 'user access rule');
});
