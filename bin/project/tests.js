'use strict';
const ava = require('ava');

require('../../scope/h1');
const tests = require('../../lib/tests');
const config = require('lib/config');

const now = Date.now();

const active_project = config.get('profile.project._id');

ava.test.todo('project delete');

ava.test.todo('project select');

ava.test.serial('project show', async t => {
    const project = await tests.run(`project show --project ${active_project}`);
    t.true(project._id === active_project);
});

ava.test.serial('project rename', async t => {
    const name = `Tenant for monitoring public API - ${now}`;

    await tests.run(`project rename --project ${active_project} --new-name '${name}'`);

    const project = await tests.run(`project show --project ${active_project}`);
    t.true(project._id === active_project);
    t.true(project.name === name);
});


ava.test.serial('project limits', async t => {
    const limits = await tests.run('project limit');
    t.true(limits.some(d => d.resource === 'vm' && d.limit === 'count'));
});

ava.test.serial('project list', async t => {
    const list = await tests.run('project list');
    t.true(list.length > 0);
});

['user', 'owner', 'billing'].forEach(role => {
    ava.test.serial(`project access ${role} cycle`, async t => {
        const actions = [
            {name: 'grant', result: true, params: `--role ${role}`},
            {name: 'revoke', result: false},
        ];

        for (const action of actions) {
            await tests.run(`project access ${action.name} --email ${tests.RECIPIENT.user} --project ${active_project} ${action.params || ''}`);
            const list = await tests.run('project access list');
            t.true(list.some(d => d.role === role && d.id === tests.RECIPIENT.user) === action.result);
        }
    });
});

ava.test.serial('project token life cycle', async t => {
    const name = `test-project-token-${now}`;

    const commonParams = `--project ${active_project}`;
    const token = await tests.run(`project token add ${commonParams} --name ${name}`);

    const tokenParams = `${commonParams} --token ${token._id}`;

    const token_list = await tests.run('project token list');
    t.true(token_list.some(d => d.name === name));

    await tests.run(`project token rename ${tokenParams} --new-name renamed-${name}`);

    const refreshed_token = await tests.run(`project token show ${tokenParams}`);
    t.true(token._id === refreshed_token._id);

    await tests.remove('project token', token);
});

ava.test.serial('project token access life cycle', async t => {
    const token = await tests.run(`project token add --project ${active_project} --name test-project-token-${now}`);
    const access = await tests.run(`project token access add --project ${active_project} --method POST --path 'vault/' --token ${token._id}`);

    const tokenParams = `--project ${active_project} --token ${token._id}`;
    const access_list = await tests.run(`project token access list ${tokenParams}`);
    t.true(access_list.some(d => d._id === access._id));

    const refreshed_access = await tests.run(`project token access show ${tokenParams} --access ${access._id}`);
    t.true(access._id === refreshed_access._id);

    await tests.run(`project token access delete ${tokenParams} --access ${access._id} --yes`);

    const access_list_deleted = await tests.run(`project token access list ${tokenParams}`);
    t.false(access_list_deleted.some(d => d._id === access._id));

    await tests.remove('project token', token);
});


ava.test.serial('project credentials cycle', tests.credentialsLifeCycle('project credentials', {
    createParams: `--project ${active_project}`,
    listParams: `--project ${active_project}`,
}));
