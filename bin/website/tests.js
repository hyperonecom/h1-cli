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
    console.log(new Date(), `Upload content to website ${website._id} at '${path}'`);
    return ssh.putFile(path, content, Object.assign({
        host: `${website.fqdn}`,
        username: website._id,
    }, auth));
};

const rmFileWebsite = (website, auth, path) => {
    console.log(new Date(), `Remove file of website ${website._id} at '${path}'`);
    return ssh.rmFile(path, Object.assign({
        host: `${website.fqdn}`,
        username: website._id,
    }, auth));
};

ava.serial('website default page according scope', async t => {
    const website = await tests.run(`website create --name ${tests.getName(t.title)} --domain ${getDomain(t.title)} ${commonCreateParams}`);
    // TODO: Validate default page according scope
    const resp = await request.get(`http://${website.fqdn}/`).ok(res => [403, 200].includes(res.status));
    t.true(resp.text.includes("You don't have permission to access /"));
    await tests.remove('website', website);
});

ava.serial('website put index via SFTP & password', async t => {
    const password = await tests.getToken();
    const website = await tests.run(`website create --name ${tests.getName(t.title)} --domain ${getDomain(t.title)} ${commonCreateParams} --password ${password}`);
    // Upload file
    const token = await tests.getToken();
    await putFileWebsite(website, {password}, '/public/index.html', token);

    const resp = await request.get(`http://${website.fqdn}/`);
    t.true(resp.text === token);
    await tests.remove('website', website);
});

ava.serial('website reachable through custom domain', async t => {
    const domain = getDomain(t.title);
    const password = await tests.getToken();
    const website = await tests.run(`website create --name ${tests.getName(t.title)} --domain ${domain} ${commonCreateParams} --password ${password}`);
    // Upload file
    const token = await tests.getToken();
    await putFileWebsite(website, {password}, '/public/index.html', token);
    // Test content
    const resp = await request.get(`http://${website.fqdn}/`).set('Host', domain);
    t.true(resp.text === token);

    await tests.remove('website', website);
});

ava.serial('website put index via SFTP & ssh-key', async t => {
    const sshKeyPair = await ssh.generateKey();
    const sshFilename = tests.getRandomFile(sshKeyPair.publicKey);
    const website = await tests.run(`website create --name ${tests.getName(t.title)} --domain ${getDomain(t.title)} ${commonCreateParams} --ssh-file ${sshFilename}`);

    // Upload file
    const token = await tests.getToken();
    await putFileWebsite(website, {privateKey: sshKeyPair.privateKey}, '/public/index.html', token);
    // Test content
    const resp = await request.get(`http://${website.fqdn}/`);
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

const languages = {
    php: '<?php error_reporting(E_ALL); file_put_contents("/data/public/test.txt", "TOKEN"); ?>',
};
const images = {
    'quay.io/hyperone/php-apache:7.2': {
        code: languages.php,
    },
    'quay.io/hyperone/php-apache:5.6': {
        code: languages.php,
    },
};

ava.serial('website runtime access rights match of sftp', async t => {
    const image = 'quay.io/hyperone/php-apache:7.2';
    const password = await tests.getToken();
    const website = await tests.run(`website create --name ${tests.getName(t.title)} --domain ${getDomain(t.title)} ${commonCreateParams} --password ${password}`);
    // Put code on website
    const token = await tests.getToken();
    const content = images[image].code.replace('TOKEN', token);
    await putFileWebsite(website, {password}, '/public/test.php', content);
    // Call script
    const resp_call = await request.get(`http://${website.fqdn}/test.php`);
    t.true(resp_call.text === '');
    // Verify content
    const resp_test = await request.get(`http://${website.fqdn}/test.txt`);
    t.true(resp_test.text === token);
    // Verify permission to remove
    await rmFileWebsite(website, {password}, '/public/test.txt');
    await tests.remove('website', website);
});

ava.todo('website sftp');
ava.todo('website ssh');

ava.serial('website connect via ssh', async t => {
    const password = await tests.getToken();
    const website = await tests.run(`website create --name ${tests.getName(t.title)} --domain ${getDomain(t.title)} ${commonCreateParams} --password ${password}`);
    // Put code on website
    const token = await tests.getToken();
    await ssh.execResource(website, {password}, `echo '${token}' > /public/test.php`);
    const content = await ssh.execResource(website, {password}, 'cat /public/test.php');
    t.true(content === token);
    await tests.remove('website', website);
});
