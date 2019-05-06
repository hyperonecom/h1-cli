'use strict';
const ava = require('ava');

require('../../scope/h1');
const tests = require('../../lib/tests');

const now = Date.now();

const name = `agent-test-${now}`;
const createParams = '--type container';

ava.serial('agent life cycle', tests.resourceLifeCycle('agent', {
    createParams: `--name ${name} ${createParams}`,
    stateCreated: 'Unknown',
    skipFqdn: true,
}));
