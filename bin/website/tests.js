'use strict';
const request = require('superagent');

const ava = require('ava');

require('../../scope/h1');
const tests = require('../../lib/tests');
const ssh = require('../../lib/ssh');

const commonCreateParams = '--type website --image quay.io/hyperone/php-apache:7.2';


const getDomain = (...args) => `${tests.getName(...args)}.com`;

ava.serial('website life cycle', tests.resourceLifeCycle('website', {
    createParams: `--name ${tests.getName('website-life-cycle')} --domain ${getDomain('website-life-cycle')} ${commonCreateParams} `,
    stateCreated: 'Running',
}));

const putFileWebsite = (website, auth, path, content) => {
    console.log(`Upload content to website ${website._id} at '${path}'`);
    return ssh.putFile(path, content, Object.assign({
        // TODO: Use property from public-API
        host: `${website._id}.website.${website.project}.pl-waw-1.hyperone.cloud`,
        username: website._id,
    }, auth));
};

ava.serial('website default page according scope', async t => {
    const website = await tests.run(`website create --name ${tests.getName(t.title)} --domain ${getDomain(t.title)} ${commonCreateParams}`);
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

ava.serial('website put index via SFTP & password', async t => {
    const password = await tests.getToken();
    const website = await tests.run(`website create --name ${tests.getName(t.title)} --domain ${getDomain(t.title)} ${commonCreateParams}`);
    await tests.run(`website credential password add --website ${website._id} --name ${tests.getName('password', t.title)} --password ${password}`);
    // Upload file
    const token = await tests.getToken();
    await putFileWebsite(website, {password}, '/public/index.html', token);

    // TODO: Use property from public-API
    const domain = `${website._id}.website.${website.project}.pl-waw-1.hyperone.cloud`;
    const resp = await request.get(`http://${domain}/`);
    t.true(resp.text === token);
    await tests.remove('website', website);
});

ava.serial('website put index via SFTP & ssh-key', async t => {
    const sshKeyPair = await ssh.generateKey();
    const sshFilename = tests.getRandomFile(sshKeyPair.publicKey);
    const website = await tests.run(`website create --name ${tests.getName(t.title)} --domain ${getDomain(t.title)} ${commonCreateParams}`);
    await tests.run(`website credential cert add --website ${website._id} --name ${tests.getName('cert', t.title)} --sshkey-file ${sshFilename}`);

    // Upload file
    const token = await tests.getToken();
    await putFileWebsite(website, {privateKey: sshKeyPair.privateKey}, '/public/index.html', token);

    // TODO: Use property from public-API
    const domain = `${website._id}.website.${website.project}.pl-waw-1.hyperone.cloud`;
    const resp = await request.get(`http://${domain}/`);
    t.true(resp.text === token);
    await tests.remove('website', website);
});


ava.serial('website credentials cert life cycle', async t => {
    const website = await tests.run(`website create --name ${tests.getName(t.title)} --domain ${getDomain(t.title)} ${commonCreateParams}`);

    await tests.credentialsLifeCycle('website credential cert', {
        showParams: `--website ${website._id}`,
        createParams: `--website ${website._id}`,
        listParams: `--website ${website._id}`,
        deleteParams: `--website ${website._id}`,
        renameParams: `--website ${website._id}`,
    })(t);

    await tests.remove('website', website);
});

ava.serial('website credentials password life cycle', async t => {
    const website = await tests.run(`website create --name ${tests.getName(t.title)} --domain ${getDomain(t.title)} ${commonCreateParams}`);

    await tests.passwordLifeCycle(t, 'website', website);

    await tests.remove('website', website);
});


ava.serial('website stop & start', async t => {
    const website = await tests.run(`website create --name ${tests.getName(t.title)} --domain ${getDomain(t.title)} ${commonCreateParams}`);
    await tests.run(`website stop --website ${website._id}`);
    const stopped_website = await tests.run(`website show --website ${website._id}`);
    t.true(stopped_website.state === 'Off');
    await tests.run(`website start --website ${website._id}`);
    const started_website = await tests.run(`website show --website ${website._id}`);
    t.true(started_website.state === 'Running');
    await tests.remove('website', website);
});

ava.todo('website sftp');
