'use strict';

const ava = require('ava');
const fs = require('fs');

require('../../scope/h1');
const tests = require('../../lib/tests');

const now = Date.now();

const createUserCredentials = async () => {
    const file = tests.getRandomFile();
    const name = `vault-ssh-${now}`;
    await tests.run(`user credentials add --name ${name} --sshkey-file ${file}`);
    return {file: file, name: name};
};

ava.test.serial('vault life cycle', async t => {
    const ssh = await createUserCredentials();

    await tests.resourceLifeCycle('vault', `--name vault-test-${now} --size 10 --ssh ${ssh.name}`)(t);

    fs.unlinkSync(ssh.file);
});

ava.test.serial('vault rename', async t => {
    const ssh = await createUserCredentials();

    await tests.resourceRename('vault', `--name vault-test-${now} --size 10 --ssh ${ssh.name}`)(t);

    fs.unlinkSync(ssh.file);
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
