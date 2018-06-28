'use strict';
const ava = require('ava');

require('../../scope/h1');
const tests = require('../../lib/tests');

const now = Date.now();

ava.test.serial('network life cycle', tests.resourceLifeCycle('network', `--name network-test-${now}`));

ava.test.serial('network ip life cycle', async t => {
    const network = await tests.run(`network create --name network-test-${now}`);
    await tests.resourceLifeCycle('network ip', {
        createParams: `--network ${network._id}`,
        listParams: `--network ${network._id}`,
        showParams: `--network ${network._id}`,
        deleteParams: `--network ${network._id}`,
    })(t);
    await tests.remove('network', network);
});
