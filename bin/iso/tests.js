'use strict';

const ava = require('ava');
const fs = require('fs');

require('../../scope/h1');
const tests = require('../../lib/tests');

const now = Date.now();

const createParams = `--source-url ${tests.iso_url}`;


ava.serial('iso life cycle', tests.resourceLifeCycle('iso', `--name iso-life-cycle-${now}  ${createParams}`));

ava.serial('iso rename', tests.resourceRename('iso', `--name iso-rename-${now}  ${createParams}`));

ava.serial('iso access', tests.resourceAccessCycle('iso', `--name iso-access-${now}  ${createParams}`));

ava.serial('iso local upload', async t => {
    const filename = await tests.downloadFile(tests.iso_url);
    await tests.resourceLifeCycle('iso', `--name iso-local-upload-${now} --source-file ${filename}`)(t);
    fs.unlinkSync(filename);
});

ava.serial('iso use in vm local uploaded', async t => {
    const filename = await tests.downloadFile(tests.iso_url);

    const iso = await tests.run(`iso create --name iso-use-vm-${now} --source-file ${filename}`);
    const secret = await tests.getToken();

    const vm = await tests.run(`vm create --name test-vm --type a1.nano --password ${secret} --no-start`);
    await tests.run(`vm dvd insert --vm ${vm._id} --iso ${iso._id}`);

    await tests.run(`vm start --vm ${vm._id}`);
    const vm_started = await tests.run(`vm show --vm ${vm._id}`);

    t.true(vm_started.state === 'Running');
    await tests.run(`vm dvd eject --yes --vm ${vm._id}`);

    await tests.remove('iso', iso);
    await tests.remove('vm', vm);
    fs.unlinkSync(filename);
});


ava.serial('iso transfer', tests.transferLifeCycle('iso', {
    createParams: `--name iso-transfer-${now}  ${createParams}`,
}));
