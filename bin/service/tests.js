'use strict';
const ava = require('ava');

require('../../scope/h1');
const tests = require('../../lib/tests');

ava.serial('service all', async t => {
    const list = await tests.run('service list');
    t.true(list.some(d => d.resource === 'vm' && d.type === 'flavour'));

    const service = await tests.show('service', list[0]);

    t.true(service.name === list[0].name);
    t.true(service.id === list[0].id);
});

ava.serial('service project', async t => {
    const list = await tests.run('service list --resource project');
    t.true(list.length > 0);
});
