'use strict';
const ava = require('ava');

require('../../scope/h1');
const tests = require('../../lib/tests');

const commonCreateParams = '--type container';
const hubImage = 'busybox';
const tagName = 'musl';

const copyImage = async (host, hubImage, tagName) => {
    await tests.runProcess(`docker pull ${hubImage}:${tagName}`);
    const remoteImage = `${host}/${hubImage}`;
    await tests.runProcess(`docker tag ${hubImage}:${tagName} ${remoteImage}:${tagName}`);
    await tests.runProcess(`docker push ${remoteImage}:${tagName}`);
    await tests.runProcess(`docker image rm ${remoteImage}:${tagName}`);
    await tests.runProcess(`docker pull ${host}/${hubImage}:${tagName}`);
    await tests.runProcess(`docker image rm ${host}/${hubImage}:${tagName}`);
};

ava.serial('registry life cycle', tests.resourceLifeCycle('registry', {
    createParams: `--name ${tests.getName('registry-life-cycle')} ${commonCreateParams} `,
    stateCreated: 'Running',
}));

ava.serial('registry reachable through fqdn', async t => {
    const password = await tests.getToken();
    const registry = await tests.run(`registry create --name ${tests.getName(t.title)} --password ${password} ${commonCreateParams}`);
    try {
        await tests.runProcess(`docker login --username anything --password ${password} ${registry.fqdn}`);
        await copyImage(registry.fqdn, hubImage, 'latest');
        const repositories = await tests.run(`registry repository list --registry ${registry.name}`);
        t.true(repositories.some(x => x.id === hubImage));
    } finally {
        await tests.remove('registry', registry);
    }
});

ava.serial('registry manage repositories & tags', async t => {
    const password = await tests.getToken();
    const registry = await tests.run(`registry create --name ${tests.getName(t.title)} --password ${password} ${commonCreateParams}`);
    try {
        await tests.runProcess(`docker login --username anything --password ${password} ${registry.fqdn}`);
        await copyImage(registry.fqdn, hubImage, tagName);
        const repository = await tests.run(`registry repository show --registry ${registry.name} --repository ${hubImage}`);
        t.true(repository._id === hubImage);
        let repositories = await tests.run(`registry repository list --registry ${registry.name}`);
        t.true(repositories.some(x => x.id === hubImage));
        const tag = await tests.run(`registry repository tag show --registry ${registry.name} --repository ${hubImage} --tag ${tagName}`);
        t.true(tag.id === tagName);
        const tags = await tests.run(`registry repository tag list --registry ${registry.name} --repository ${hubImage}`);
        t.true(tags.some(x => x.id === tagName));
        await tests.run(`registry repository tag delete --yes --registry ${registry.name} --repository ${hubImage} --tag ${tagName}`);

        repositories = await tests.run(`registry repository list --registry ${registry.name}`);
        t.true(!repositories.some(x => x.id === hubImage));
    } finally {
        await tests.remove('registry', registry);
    }
});

ava.serial('registry reachable through custom domain', async t => {
    const domain = 'registry.h1.jawnosc.tk';
    const rset = 'registry-reachable';
    const host = `${rset}.${domain}`;
    const password = await tests.getToken();
    const registry = await tests.run(`registry create --name ${tests.getName(t.title)} ${commonCreateParams} --password ${password}`);
    await tests.run(`registry stop --registry ${registry.id}`);
    const zone = await tests.run(`dns zone show --zone ${domain}`).catch(() => {
        return tests.run(`dns zone create --name ${domain}`);
    });
    try {
        await tests.run(`dns record-set cname create --name ${rset} --zone ${zone.id} --value ${registry.fqdn}. --ttl 1`);
        await tests.run(`registry domain add --registry ${registry.id} --domain ${host}`);
        await tests.run(`registry start --registry ${registry.id}`);
        await tests.delay(10000);
        await tests.runProcess(`docker login --username anything --password ${password} ${host}`);
        await copyImage(host, hubImage, tagName);
        const repositories = await tests.run(`registry repository list --registry ${registry.name}`);
        t.true(repositories.some(x => x.id === hubImage));
    } finally {
        await tests.remove('dns zone', zone);
        await tests.remove('registry', registry);
    }
});

ava.serial('registry repository tag delete', async t => {
    const password = await tests.getToken();
    const registry = await tests.run(`registry create --name ${tests.getName(t.title)} --password ${password} ${commonCreateParams}`);
    try {
        await tests.runProcess(`docker login --username anything --password ${password} ${registry.fqdn}`);
        await copyImage(registry.fqdn, hubImage, tagName);
        let repositories = await tests.run(`registry repository list --registry ${registry.name}`);
        t.true(repositories.some(x => x.id === hubImage));
        await tests.run(`registry repository tag delete --yes --registry ${registry.name} --repository ${hubImage} --tag ${tagName}`);
        repositories = await tests.run(`registry repository list --registry ${registry.name}`);
        t.true(!repositories.some(x => x.id === hubImage));
    } finally {
        await tests.remove('registry', registry);
    }
});

ava.serial('registry docker reachable', async t => {
    const output = await tests.runProcess('docker system info');
    t.true(output.includes('Containers: '));
});
