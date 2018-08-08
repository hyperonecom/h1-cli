'use strict';

const ava = require('ava');
const fs = require('fs');

require('../../scope/h1');
const tests = require('../../lib/tests');
const ssh = require('../../lib/ssh');

const now = Date.now();

const createUserCredentials = async () => {
    const file = tests.getRandomFile();
    const name = `vault-ssh-${now}`;
    await tests.run(`user credentials add --name ${name} --sshkey-file '${file}'`);
    return {
        file: file,
        name: name,
        cleanup: async () => {
            fs.unlinkSync(file);
            await tests.remove('user credentials', name);
        },
    };
};

const sshVault = (vault, secret, cmd) => {
    console.log(new Date().toISOString(), `[vault: ${vault._id}]`, cmd);
    return ssh.execute(cmd, {
        host: 'vault.pl-waw-1.hyperone.com',
        username: vault._id,
        password: secret,
    });
};

ava.test.serial('vault life cycle', async t => {
    const ssh = await createUserCredentials();

    await tests.resourceLifeCycle('vault', `--name vault-test-${now} --size 10 --ssh ${ssh.name}`)(t);

    await ssh.cleanup();
});

ava.test.serial('vault rename', async t => {
    const ssh = await createUserCredentials();

    await tests.resourceRename('vault', `--name vault-test-${now} --size 10 --ssh ${ssh.name}`)(t);

    await ssh.cleanup();
});


ava.test.serial('vault resize', tests.resourceResizeCycle('vault', {
    createParams: `--name vault-test-${now}`,
}));

ava.test.serial('vault credential credentials life cycle', async t => {
    const vault = await tests.run(`vault create --name vault-test-${now} --size 10`);

    await tests.credentialsLifeCycle('vault credential cert', {
        showParams: `--vault ${vault._id}`,
        createParams: `--vault ${vault._id}`,
        listParams: `--vault ${vault._id}`,
        deleteParams: `--vault ${vault._id}`,
        renameParams: `--vault ${vault._id}`,
    })(t);

    await tests.remove('vault', vault);
});

ava.test.serial('vault recreate from snapshot', async t => {
    const name = `vault-test-${now}`;
    const secret = await tests.getToken();
    const vault = await tests.run(`vault create --name ${name} --size 10 --password ${secret}`);

    const filename = 'my-secret-file.txt';
    await sshVault(vault, secret, `touch ~/${filename}`);

    const snapshot = await tests.run(`snapshot create --vault ${vault._id} --name snapshot-${name}`);

    const recreated_vault = await tests.run(`vault create --name ${name} --size 10 --snapshot ${snapshot.name} --password ${secret}`);
    t.true(recreated_vault.created);

    const content = await sshVault(recreated_vault, secret, 'ls -lah ~/');
    t.true(content.includes(filename));

    await tests.remove('vault', recreated_vault);
    await tests.remove('snapshot', snapshot);
    await tests.remove('vault', vault);
});

ava.test.serial('vault credential password life cycle', async t => {
    const vault = await tests.run(`vault create --name vault-test-${now} --size 10`);
    const name = `vault-password-${now}`;
    const secret = await tests.getToken();

    await tests.run(`vault credential password add --name ${name} --password ${secret} --vault ${vault._id}`);
    const list = await tests.run(`vault credential password list --vault ${vault._id}`);
    t.true(list.some(p => p.name === name));

    const password = await tests.run(`vault credential password show --vault ${vault._id} --password ${name}`);
    await tests.run(`vault credential password rename --vault ${vault._id} --password ${name} --new-name secure-password`);
    await tests.run(`vault credential password show --vault ${vault._id} --password ${password._id}`);

    await tests.remove('vault credential password', password, {
        deleteParams: `--vault ${vault._id}`,
    });
    await tests.remove('vault', vault);
});

['project', 'user'].forEach(type => {
    ava.test.serial(`vault credential ${type} ssh use`, async t => {
        const name = `vault-ssh-${now}`;
        const ssh_file = tests.getRandomFile();

        const ssh_name = `${name}-${type}-key`;
        const credentials = await tests.run(`${type} credentials add --name ${ssh_name} --sshkey-file '${ssh_file}'`);
        const vault = await tests.run(`vault create --name my-vault --size 10 --ssh ${ssh_name}`);

        const list = await tests.run(`vault credential cert list --vault ${vault._id}`);
        t.true(list.some(p => p.name === ssh_name));

        await tests.remove(`${type} credentials`, credentials);
        await tests.remove('vault', vault);

        fs.unlinkSync(ssh_file);
    });
});

['project', 'user'].forEach(type => {
    ava.test.serial(`vault ssh using ${type} ssh-key`, async t => {
        const sshKeyPair = await ssh.generateKey();
        const sshFilename = tests.getRandomFile(sshKeyPair.publicKey);

        const name = `vault-ssh-key-${now}`;
        const ssh_name = `${name}-${type}-key`;

        const credentials = await tests.run(`${type} credentials add --name ${ssh_name} --sshkey-file '${sshFilename}'`);

        const vault = await tests.run(`vault create --name ${name} --size 10 --ssh ${ssh_name}`);

        const content = await ssh.execute('uptime', {
            host: 'vault.pl-waw-1.hyperone.com',
            username: vault._id,
            privateKey: sshKeyPair.privateKey,
        });
        t.true(content.includes('load average'));

        fs.unlinkSync(sshFilename);

        await tests.remove(`${type} credentials`, credentials);
        await tests.remove('vault', vault);
    });
});

ava.test.serial('vault ssh using password', async t => {
    const name = `vault-ssh-key-${now}`;
    const secret = await tests.getToken();

    const vault = await tests.run(`vault create --name ${name} --password ${secret} --size 10`);

    const content = await sshVault(vault, secret, 'uptime');
    t.true(content.includes('load average'));

    await tests.remove('vault', vault);
});
