'use strict';
const ava = require('ava');
const request = require('superagent');

require('../../scope/h1');
const tests = require('../../lib/tests');

const now = Date.now();

const name = `container-test-${now}`;
const createParams = '--image nginx --type b1.nano';

ava.serial('container life cycle', tests.resourceLifeCycle('container', {
    createParams: `--name ${name} ${createParams}`,
    stateCreated: 'Running',
    skipTransfer: true,
}));

ava.serial('container start stop', async t => {
    const container = await tests.run(`container create --name ${tests.getName(t.title)} ${createParams}`);
    try {
        await tests.run(`container stop --container ${container.name}`);
        const container_stop = await tests.run(`container show --container ${container.name}`);
        t.true(container_stop.state === 'Off');

        await tests.run(`container start --container ${container.name}`);
        const container_start = await tests.run(`container show --container ${container.name}`);
        t.true(container_start.state === 'Running');
    } finally {
        await tests.remove('container', container);
    }
});


ava.serial('container restart', async t => {
    const container = await tests.run(`container create --name ${tests.getName(t.title)} ${createParams}`);
    try {
        await tests.run(`container restart --container ${container.name}`);
        const container_restart = await tests.run(`container show --container ${container.name}`);
        t.true(container_restart.state === 'Running');
    } finally {
        await tests.remove('container', container);
    }
});

ava.serial('container process list', async t => {
    const container = await tests.run(`container create --name ${tests.getName(t.title)} ${createParams}`);
    try {
        await tests.run(`container process list --container ${container.name}`);
        const ps = await tests.run(`container process list --container ${container.name}`);
        t.true(ps.length > 1);
    } finally {
        await tests.remove('container', container);
    }
});

ava.serial('container log', async t => {
    const container = await tests.run(`container create --name ${tests.getName(t.title)} ${createParams} --expose 80:80`);
    try {
        await tests.logStreamProcess(t, 'container', container,
            (id_request) => tests.get(`http://${container.fqdn}/?${id_request}`)
        );
    } finally {
        await tests.remove('container', container);
    }
});

ava.serial('container create with volume', async t => {
    const volume = await tests.run(`volume create --name ${tests.getName(t.title, 'volume')} --type volume --size 1`);
    try {
        const container = await tests.run(`container create --name ${tests.getName(t.title)} ${createParams} --expose 80:80 --volume ${volume._id}/path:/usr/share/nginx/html`);
        try {
            const res = await request.get(`http://${container.fqdn}/`).ok(res => res.status === 403);
            t.true(res.status === 403);
        } finally {
            await tests.remove('container', container);
        }
    } finally {
        await tests.remove('volume', volume);
    }
});
