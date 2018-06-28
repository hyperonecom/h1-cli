'use strict';

const ava = require('ava');

require('../../scope/h1');
const tests = require('../../lib/tests');

const now = Date.now();

const createParams = `--name iso-test-${now} --source-url ${tests.iso_url}`;

ava.test.serial('iso life cycle', tests.resourceLifeCycle('iso', createParams));

ava.test.serial('iso rename', tests.resourceRename('iso', createParams));

ava.test.serial('iso access', tests.resourceAccessCycle('iso', createParams));
