'use strict';
const request = require('superagent');

const ava = require('ava');

require('../../scope/h1');
const tests = require('../../lib/tests');

const commonCreateParams = '--type website --image quay.io/hyperone/php-apache:7.2';


const getDomain = (...args) => `${tests.getName(...args)}.com`;

ava.serial('website life cycle', tests.resourceLifeCycle('website', {
    createParams: `--name ${tests.getName('website-life-cycle')} --domain ${getDomain('website-life-cycle')} ${commonCreateParams} `,
    stateCreated: 'running', // TODO: Change to "Running"
    skipOpenApi: true, // TODO: Reenable test
}));

ava.serial('website reachable HTTP', async t => {
    const website = await tests.run(`website create --name ${tests.getName(t.title)} --domain ${getDomain('website-life-cycle')} ${commonCreateParams}`);
    // TODO: Use property from public-API
    const domain = `${website._id}.website.${website.project}.pl-waw-1.hyperone.cloud`;
    const url = `http://${domain}/`;
    // TODO: Validate default page according scope
    // const resp = await request.get(url);
    // t.true(resp.text.includes('HyperOne'));
    const resp = await request.get(url).ok(res => [403, 200].includes(res.status));
    t.true(resp.text.includes("You don't have permission to access /"));
    await tests.remove('website', website);
});

ava.serial('website credential credentials life cycle', async t => {
    const website = await tests.run(`website create --name ${tests.getName(t.title)} --domain ${getDomain('website-life-cycle')} ${commonCreateParams}`);

    await tests.credentialsLifeCycle('website credential cert', {
        showParams: `--website ${website._id}`,
        createParams: `--website ${website._id}`,
        listParams: `--website ${website._id}`,
        deleteParams: `--website ${website._id}`,
        renameParams: `--website ${website._id}`,
    })(t);

    await tests.remove('website', website);
});
