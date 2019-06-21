'use strict';
const ava = require('ava');

require('../../scope/h1');
const tests = require('../../lib/tests');
const config = require('lib/config');

const active_project = config.get('profile.project._id');

ava.serial('organisation life cycle', async t => {
    const project = await tests.run(`project show --project ${active_project}`);
    const organization_id = project.organisation;
    const organisation = await tests.run(`organisation show --organisation ${organization_id}`);

    await tests.resourceLifeCycle('organisation', {
        resource: organisation,
        stateCreated: 'Active',
        skipHistoryCreated: true,
        skipService: true,
        skipCreate: true,
        skipDelete: true,
        skipFqdn: true,
        skipTransfer: true,
    })(t);
});

ava.serial('organization access of user cycle', async t => {
    const project = await tests.run(`project show --project ${active_project}`);
    const organization_id = project.organisation;

    await tests.resourceAccessOfUser('organisation', `--organisation ${organization_id}`)(t);
});
