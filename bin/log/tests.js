'use strict';
const fs = require('fs');
const ava = require('ava');

require('../../scope/h1');
const tests = require('../../lib/tests');

const now = Date.now();

ava.serial('log life cycle', tests.resourceLifeCycle('log', `--name log-life-cycle-${now}`));

ava.serial('log credential password life cycle', async t => {
    const log = await tests.run(`log create --name log-credential-${now}`);
    await tests.passwordLifeCycle(t, 'log', log);
    await tests.remove('log', log);
});

ava.serial('log logger & stream', async t => {
    const token = await tests.getToken();
    const content = await tests.getToken();
    const log_file = tests.getRandomFile(content);
    const output_file = tests.randomFileName();
    const log = await tests.run(`log create --name log-logger-${now}`);
    await tests.run(`log credential password add --log ${log._id} --name my-token --password ${token}`);
    await tests.run(`log logger --log ${log._id} --token ${token} --log-file ${log_file}`);
    let log_content;
    for (let i=0; i<=3; i++) {
        await tests.delay(1000); // to receive message
        await tests.run(`log stream --log ${log._id} --jsonl-file ${output_file}`);
        log_content = fs.readFileSync(output_file, 'utf-8');
        if (log_content) {
            break;
        }
    }
    t.true(!!log_content);
    t.true(JSON.parse(log_content).data === content);
    await tests.remove('log', log);
});
