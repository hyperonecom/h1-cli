'use strict';
const ava = require('ava');

require('../../scope/h1');
const tests = require('../../lib/tests');
const ssh = require('../../lib/ssh');

const commonCreateParams = '--type website --image h1cr.io/website/php-apache:7.2';

ava.serial('website life cycle', tests.resourceLifeCycle('website', {
    createParams: `--name ${tests.getName('website-life-cycle')} ${commonCreateParams} `,
    stateCreated: 'Running',
}));

const putFileWebsite = (website, auth, path, content) => {
    console.log(new Date(), `Upload content to website ${website.id} at '${path}'`);
    return ssh.putFile(path, content, Object.assign({
        host: website.fqdn,
        username: website.id,
    }, auth));
};

const rmFileWebsite = (website, auth, path) => {
    console.log(new Date(), `Remove file of website ${website.id} at '${path}'`);
    return ssh.rmFile(path, Object.assign({
        host: website.fqdn,
        username: website.id,
    }, auth));
};

const lsWebsite = (website, auth, path) => {
    console.log(new Date(), `List files of website ${website.id} at '${path}'`);
    return ssh.lsFile(path, Object.assign({
        host: website.fqdn,
        username: website.id,
    }, auth));
};

ava.serial('website empty page results', async t => {
    const website = await tests.run(`website create --name ${tests.getName(t.title)} ${commonCreateParams}`);
    // TODO: Validate default page according scope
    await tests.delay(5); // Workaround for full page startup
    const resp = await tests.get(`http://${website.fqdn}/`).ok(res => [403, 200].includes(res.status));
    t.true(resp.text.includes("You don't have permission to access /"));
    await tests.remove('website', website);
});

ava.serial('website put index via SFTP & password', async t => {
    const password = await tests.getToken();
    const website = await tests.run(`website create --name ${tests.getName(t.title)} ${commonCreateParams} --password ${password}`);
    // Upload file
    const token = await tests.getToken();
    await putFileWebsite(website, {password}, 'public/index.html', token);
    const resp = await tests.get(`http://${website.fqdn}/`);
    t.true(resp.text === token);
    await tests.remove('website', website);
});

ava.serial('website management domain', async t => {
    const domain = 'website.h1.jawnosc.tk';
    const rset_cname = 'website-reachable-cname';
    const rset_txt = 'website-reachable-txt';
    const website = await tests.run(`website create --name ${tests.getName(t.title)} ${commonCreateParams}`);
    await tests.run(`website stop --website ${website.id}`);
    const zone = await tests.run(`dns zone show --zone ${domain}`).catch(() => {
        return tests.run(`dns zone create --name ${domain}`);
    });
    try {
        await tests.run(`dns record-set cname create --name ${rset_txt} --zone ${zone.id} --value ${website.fqdn}. --ttl 1`);
        await tests.run(`website domain add --website ${website.id} --domain ${rset_txt}.${zone.name}`);
        let domains = await tests.run(`website domain list --website ${website.id}`);
        t.true(domains.includes(`${rset_txt}.${zone.name}`));
        t.true(!domains.includes(`${rset_cname}.${zone.name}`));
        t.true(domains.length === 1);

        await tests.run(`dns record-set txt create --name ${rset_cname} --zone ${zone.id} --value '\"${website.fqdn}\"' --ttl 1`);
        await tests.run(`website domain add --website ${website.id} --domain ${rset_cname}.${zone.name}`);
        domains = await tests.run(`website domain list --website ${website.id}`);
        t.true(domains.includes(`${rset_txt}.${zone.name}`));
        t.true(domains.includes(`${rset_cname}.${zone.name}`));
        t.true(domains.length === 2);

        await tests.run(`website domain delete --website ${website.id} --domain ${rset_txt}.${zone.name}`);
        domains = await tests.run(`website domain list --website ${website.id}`);
        t.true(!domains.includes(`${rset_txt}.${zone.name}`));
        t.true(domains.includes(`${rset_cname}.${zone.name}`));
        t.true(domains.length === 1);
    } finally {
        await tests.remove('dns zone', zone);
        await tests.remove('website', website);
    }
});

ava.serial('website reachable through custom domain', async t => {
    const domain = 'website.h1.jawnosc.tk';
    const rset = 'website-reachable';
    const password = await tests.getToken();
    const website = await tests.run(`website create --name ${tests.getName(t.title)} ${commonCreateParams} --password ${password}`);
    await tests.run(`website stop --website ${website.id}`);
    const zone = await tests.run(`dns zone show --zone ${domain}`).catch(() => {
        return tests.run(`dns zone create --name ${domain}`);
    });
    try {
        await tests.run(`dns record-set cname create --name ${rset} --zone ${zone.id} --value ${website.fqdn}. --ttl 1`);
        await tests.run(`website domain add --website ${website.id} --domain ${rset}.${zone.name}`);
        await tests.run(`website start --website ${website.id}`);
        // Upload file
        const token = await tests.getToken();
        const files = await lsWebsite(website, {password}, '/data');
        t.true(files.some(f => f.filename === 'public'));
        await ssh.execResource(website, {password}, 'ls -lah /data/public');
        await putFileWebsite(website, {password}, 'public/index.html', token);
        await tests.delay(5 * 1000);
        // Test content
        for (const proto of ['http', 'https']) {
            const resp = await tests.get(`${proto}://${rset}.${domain}/`);
            t.true(resp.text === token);
        }
    } finally {
        await tests.remove('dns zone', zone);
        await tests.remove('website', website);
    }
});

ava.serial('website put index via SFTP & ssh-key', async t => {
    const sshKeyPair = await ssh.generateKey();
    const sshFilename = tests.getRandomFile(sshKeyPair.publicKey);
    const website = await tests.run(`website create --name ${tests.getName(t.title)} ${commonCreateParams} --ssh-file ${sshFilename}`);

    // Upload file
    const token = await tests.getToken();
    await putFileWebsite(website, {privateKey: sshKeyPair.privateKey}, 'public/index.html', token);
    // Test content
    const resp = await tests.get(`http://${website.fqdn}/`);
    t.true(resp.text === token);

    await tests.remove('website', website);
});


ava.serial('website credential cert life cycle', async t => {
    const website = await tests.run(`website create --name ${tests.getName(t.title)} ${commonCreateParams}`);

    await tests.credentialsLifeCycle('website credential cert', {
        showParams: `--website ${website.id}`,
        createParams: `--website ${website.id}`,
        listParams: `--website ${website.id}`,
        deleteParams: `--website ${website.id}`,
        renameParams: `--website ${website.id}`,
    })(t);

    await tests.remove('website', website);
});

ava.serial('website credential password life cycle', async t => {
    const website = await tests.run(`website create --name ${tests.getName(t.title)} ${commonCreateParams}`);

    await tests.passwordLifeCycle(t, 'website', website);

    await tests.remove('website', website);
});


ava.serial('website stop & start', async t => {
    const website = await tests.run(`website create --name ${tests.getName(t.title)} ${commonCreateParams}`);
    await tests.run(`website stop --website ${website.id}`);
    const stopped_website = await tests.run(`website show --website ${website.id}`);
    t.true(stopped_website.state === 'Off');
    await tests.run(`website start --website ${website.id}`);
    const started_website = await tests.run(`website show --website ${website.id}`);
    t.true(started_website.state === 'Running');
    await tests.remove('website', website);
});

const languages = {
    php: '<?php error_reporting(E_ALL); file_put_contents("/data/public/test.txt", "TOKEN"); ?>',
};
const images = {
    'h1cr.io/website/php-apache:7.2': {
        code: languages.php,
    },
    'h1cr.io/website/php-apache:5.6': {
        code: languages.php,
    },
};

ava.serial('website runtime access rights match of sftp', async t => {
    const image = 'h1cr.io/website/php-apache:7.2';
    const password = await tests.getToken();
    const website = await tests.run(`website create --name ${tests.getName(t.title)} ${commonCreateParams} --password ${password}`);
    // Put code on website
    const token = await tests.getToken();
    const content = images[image].code.replace('TOKEN', token);
    await putFileWebsite(website, {password}, 'public/test.php', content);
    // Call script
    const resp_call = await tests.get(`http://${website.fqdn}/test.php`);
    t.true(resp_call.text === '');
    // Verify content
    const resp_test = await tests.get(`http://${website.fqdn}/test.txt`);
    t.true(resp_test.text === token);
    // Verify permission to remove
    await rmFileWebsite(website, {password}, 'public/test.txt');
    await tests.remove('website', website);
});

ava.todo('website sftp');
ava.todo('website ssh');

ava.serial('website connect via ssh', async t => {
    const password = await tests.getToken();
    const website = await tests.run(`website create --name ${tests.getName(t.title)} ${commonCreateParams} --password ${password}`);
    try {
        const hostname = await ssh.execResource(website, {password}, 'hostname');
        t.true(hostname.trim() === website.id);
    } finally {
        await tests.remove('website', website);
    }
});

ava.serial('website snapshot management', async t => {
    const password = await tests.getToken();
    const website = await tests.run(`website create --name ${tests.getName(t.title)} ${commonCreateParams} --password ${password}`);
    try {
        const snapshotName = 'my-snapshot';
        await tests.run(`website snapshot create --website ${website.name} --name ${snapshotName}`);
        const snapshot = await tests.run(`website snapshot show --website ${website.name} --snapshot ${snapshotName}`);
        t.true(snapshot.id === snapshotName);
        let snapshots = await tests.run(`website snapshot list --website ${website.name}`);
        t.true(snapshots.some(x => x.id === snapshotName));
        await tests.run(`website snapshot delete --yes --website ${website.name} --snapshot ${snapshotName}`);
        t.true(snapshots.some(x => x.id === snapshotName));
        snapshots = await tests.run(`website snapshot list --website ${website.name}`);
        t.true(!snapshots.some(x => x.id === snapshotName));
        await tests.delay(5);
    } finally {
        await tests.remove('website', website);
    }
});

ava.serial('website snapshot restore', async t => {
    const password = await tests.getToken();
    const website = await tests.run(`website create --name ${tests.getName(t.title)} ${commonCreateParams} --password ${password}`);
    const content = await tests.getToken();
    await putFileWebsite(website, {password}, 'public/test.txt', content);
    const snapshotName = tests.getName('snapshot', t.title);
    await tests.run(`website snapshot create --website ${website.name} --name ${snapshotName}`);
    const websiteRestored = await tests.run(`website create --name ${tests.getName('restored', t.title)} ${commonCreateParams} --password ${password} --source-website ${website.id} --source-snapshot ${snapshotName}`);
    await tests.run(`website snapshot delete --yes --website ${website.name} --snapshot ${snapshotName}`);
    const contentRestored = await ssh.execResource(website, {password}, 'cat public/test.txt');
    t.true(contentRestored.trim() === content);
    await tests.remove('website', website); // remove source of snapshot first
    await tests.remove('website', websiteRestored);
});

ava.serial('website log', async t => {
    const password = await tests.getToken();
    const website = await tests.run(`website create --name ${tests.getName(t.title)} ${commonCreateParams} --password ${password}`);
    try {
        await putFileWebsite(website, {password}, 'public/test.txt', await tests.getToken());
        await tests.logStreamProcess(t, 'website', website,
            (id_request) => tests.get(`http://${website.fqdn}/test.txt?${id_request}`)
        );
    } finally {
        await tests.remove('website', website);
    }
});
