'use strict';
const ava = require('ava');

require('../../scope/h1');
const tests = require('../../lib/tests');
const config = require('lib/config');

const now = Date.now();

const project = config.get('profile.project._id');

ava.test.todo('project show');

ava.test.todo('project delete');

ava.test.todo('project select');

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
            await tests.run(`project access ${action.name} --email ${tests.RECIPIENT.user} --project ${project} ${action.params || ''}`);
            const list = await tests.run('project access list');
            t.true(list.some(d => d.role === role && d.id === tests.RECIPIENT.user) === action.result);
        }
    });
});

ava.test.serial('project token life cycle', async t => {
    const name = `test-project-token-${now}`;

    // TODO: Remove get element via https://github.com/hyperonecom/h1-cli/issues/67
    const token = (await tests.run(`project token add --project ${project} --name ${name}`))[0];

    const token_list = await tests.run('project token list');
    t.true(token_list.some(d => d.name === name));

    await tests.remove('project token', token);
});

ava.test.serial('project token access life cycle', async t => {
    const token = (await tests.run(`project token add --project ${project} --name test-project-token-${now}`))[0];

    const access = (await tests.run(`project token access add --project ${project} --method POST --path 'vault/' --token ${token._id}`))[0];

    const access_list = await tests.run(`project token access list --project ${project} --token ${token._id}`);
    t.true(access_list.some(d => d._id === access._id));

    await tests.run(`project token access delete --project ${project} --token ${token._id} --access ${access._id} --yes`);

    const access_list_deleted = await tests.run(`project token access list --project ${project} --token ${token._id}`);
    t.false(access_list_deleted.some(d => d._id === access._id));

    await tests.remove('project token', token);
});


ava.test.serial('project credentials cycle', tests.credentialsLifeCycle('project credentials', {
    createParams: `--project ${project}`,
    listParams: `--project ${project}`,
}));
