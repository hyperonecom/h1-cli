'use strict';

const ava = require('ava');
const fs = require('fs');

require('../../scope/h1');
const tests = require('../../lib/tests');
const ssh = require('../../lib/ssh');

const now = Date.now();

const createUserCredentials = async (t) => {
    const sshKeyPair = await ssh.generateKey();
    const sshFilename = tests.getRandomFile(sshKeyPair.publicKey);

    const name = tests.getName(t.title, 'user-cred');
    await tests.run(`user credentials add --name ${name} --sshkey-file '${sshFilename}'`);
    return {
        file: sshFilename,
        name: name,
        cleanup: async () => {
            fs.unlinkSync(sshFilename);
            await tests.remove('user credentials', name);
        },
    };
};

ava.serial('vault life cycle', async t => {
    const ssh = await createUserCredentials(t);

    await tests.resourceLifeCycle('vault', {
        stateCreated: 'Online',
        createParams: `--name ${tests.getName(t.title)} --size 10 --ssh ${ssh.name}`,
        skipTransfer: true,
    })(t);

    await ssh.cleanup();
});


ava.serial('vault stop & start', async t => {
    const vault = await tests.run(`vault create --name ${tests.getName(t.title)} --size 10`);

    await tests.run(`vault stop --vault ${vault.id}`);
    const vault_stopped = await tests.run(`vault show --vault ${vault.id}`);
    t.true(vault_stopped.state === 'Off');

    await tests.run(`vault start --vault ${vault.id}`);
    const vault_started = await tests.run(`vault show --vault ${vault.id}`);
    t.true(vault_started.state === 'Online');

    await tests.remove('vault', vault);

});


ava.serial('vault resize', tests.resourceResizeCycle('vault', {
    createParams: `--name ${tests.getName('vault-resize')}`,
}));

ava.serial('vault credential credentials life cycle', async t => {
    const vault = await tests.run(`vault create --name ${tests.getName(t.title)} --size 10`);

    await tests.credentialsLifeCycle('vault credential cert', {
        showParams: `--vault ${vault.id}`,
        createParams: `--vault ${vault.id}`,
        listParams: `--vault ${vault.id}`,
        deleteParams: `--vault ${vault.id}`,
        renameParams: `--vault ${vault.id}`,
    })(t);

    await tests.remove('vault', vault);
});

ava.serial('vault recreate from snapshot', async t => {
    const name = tests.getName(t.title);
    const password = await tests.getToken();
    const token = await tests.getToken();
    const vault = await tests.run(`vault create --name ${name} --size 10 --password ${password}`);

    const filename = `${token}.txt`;
    await ssh.execResource(vault, {password}, `touch ~/${filename}`);

    const snapshot = await tests.run(`snapshot create --vault ${vault.id} --name snapshot-${name}`);

    const recreated_vault = await tests.run(`vault create --name ${name} --size 10 --snapshot ${snapshot.name} --password ${password}`);
    t.true(recreated_vault.created);

    const content = await ssh.execResource(recreated_vault, {password}, 'ls -lah ~/');
    t.true(content.includes(filename), `Invalid content: ${content}`);

    await tests.remove('vault', recreated_vault);
    await tests.remove('snapshot', snapshot);
    await tests.remove('vault', vault);
});

ava.serial('vault credential password life cycle', async t => {
    const vault = await tests.run(`vault create --name ${tests.getName(t.title)} --size 10`);
    await tests.passwordLifeCycle(t, 'vault', vault);
    await tests.remove('vault', vault);
});

ava.serial('vault ssh using cert', async t => {
    const { privateKey, publicKey } = await ssh.generateKey();

    const name = tests.getName(t.title);

    const vault = await tests.run(`vault create --name ${name} --size 10 --ssh '${publicKey}'`);

    const content = await ssh.execResource(vault, { privateKey}, 'uptime');
    t.true(content.includes('load average'), content);

    await tests.remove('vault', vault);
});

ava.serial('vault ssh using password', async t => {
    const name = tests.getName(t.title);
    const password = await tests.getToken();

    const vault = await tests.run(`vault create --name ${name} --password ${password} --size 10`);

    const content = await ssh.execResource(vault, {password}, 'uptime');
    t.true(content.includes('load average'));

    await tests.remove('vault', vault);
});
