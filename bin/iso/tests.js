'use strict';

const ava = require('ava');
const os = require('os');
const path = require('path');
const fs = require('fs');
const superagent = require('superagent');

require('../../scope/h1');
const tests = require('../../lib/tests');

const now = Date.now();

const createParams = `--name iso-test-${now} --source-url ${tests.iso_url}`;

const randomFileName = () => path.join(os.tmpdir(), `test-h1-cli-${now}-${Math.random()}`);

ava.test.serial('iso life cycle', tests.resourceLifeCycle('iso', createParams));

ava.test.serial('iso rename', tests.resourceRename('iso', createParams));

ava.test.serial('iso access', tests.resourceAccessCycle('iso', createParams));


const downloadFile = (filename, url) => new Promise((resolve, reject) => {
    const stream = fs.createWriteStream(filename);
    stream.on('finish', resolve);
    stream.on('error', reject);
    superagent.get(url).pipe(stream);
});

ava.test.serial('iso local upload', async t => {
    const filename = randomFileName();
    await downloadFile(filename, tests.iso_url);

    await tests.resourceLifeCycle('iso', `--name iso-test-${now} --source-file ${filename}`)(t);

    fs.unlinkSync(filename);
});

ava.test.serial('iso use in vm local uploaded', async t => {
    const filename = randomFileName();
    await downloadFile(filename, tests.iso_url);

    const iso = await tests.run(`iso create --name iso-test-${now} --source-file ${filename}`);
    const secret = await tests.getToken();

    const vm = await tests.run(`vm create --name test-vm --type a1.nano --password ${secret} --no-start`);
    await tests.run(`vm dvd insert --vm ${vm._id} --iso ${iso._id}`);

    await tests.run(`vm start --vm ${vm._id}`);
    const vm_started = await tests.run(`vm show --vm ${vm._id}`);

    t.true(vm_started.state === 'Running');
    await tests.run(`vm dvd eject --vm ${vm._id}`);

    await tests.remove('iso', iso);
    await tests.remove('vm', vm);
    fs.unlinkSync(filename);
});
