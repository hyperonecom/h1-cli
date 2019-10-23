'use strict';
const ava = require('ava');

require('../../scope/h1');
const tests = require('../../lib/tests');

const now = Date.now();

const name = `volume-test-${now}`;
const createParams = `--name ${name} --type volume --size 10`;

ava.serial('volume life cycle', tests.resourceLifeCycle('volume', {
    createParams: createParams,
    stateCreated: 'Detached',
    skipFqdn: true,
    skipTransfer: true,
}));
