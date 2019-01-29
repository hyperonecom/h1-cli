'use strict';

const ava = require('ava');
const fs = require('fs');

require('../../scope/h1');
const tests = require('../../lib/tests');

const createParams = `--source-url ${tests.iso_url}`;

ava.serial('iso life cycle', tests.resourceLifeCycle('iso', {
    createParams: `--name ${tests.getName('iso-life-cycle')}  ${createParams}`,
    stateCreated: 'Online',
}));

ava.serial('iso rename', tests.resourceRename('iso', `--name ${tests.getName('iso-rename')}  ${createParams}`));

for (const [name, project] of Object.entries(tests.access_test_case)) {
    ava.serial(`iso access: ${name}`, tests.resourceAccessCycle('iso', project, `--name ${tests.getName('iso-access')}  ${createParams}`));
}


ava.serial('iso local upload', async t => {
    const filename = await tests.downloadFile(tests.iso_url);
    await tests.resourceLifeCycle('iso', {
        stateCreated: 'Online',
        createParams: `--name ${tests.getName(t.title)} --source-file ${filename}`,
    })(t);
    fs.unlinkSync(filename);
});

ava.serial('iso use in vm local uploaded', async t => {
    const filename = await tests.downloadFile(tests.iso_url);

    const iso = await tests.run(`iso create --name ${tests.getName(t.title)} --source-file ${filename}`);
    const secret = await tests.getToken();

    const vm = await tests.run(`vm create --name ${tests.getName(t.title)} --type a1.nano --password ${secret} --no-start`);
    await tests.run(`vm dvd insert --vm ${vm._id} --iso ${iso._id}`);

    await tests.run(`vm start --vm ${vm._id}`);
    const vm_started = await tests.run(`vm show --vm ${vm._id}`);

    t.true(vm_started.state === 'Running');
    await tests.run(`vm dvd eject --yes --vm ${vm._id}`);

    await tests.remove('iso', iso);
    await tests.remove('vm', vm);
    fs.unlinkSync(filename);
});

ava.serial(
    'iso transfer',
    tests.transferLifeCycle('iso', `--name ${tests.getName('iso-transfer')}  ${createParams}`)
);
