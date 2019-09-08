'use strict';
const fs = require('fs');
const ava = require('ava');

require('../../scope/h1');
const tests = require('../../lib/tests');

const now = Date.now();

ava.serial('journal life cycle', tests.resourceLifeCycle('journal', {
    createParams: `--name journal-life-cycle-${now}`,
    schemaRef: '#/components/schemas/logArchive',
}));

ava.serial('journal credential password life cycle', async t => {
    const journal = await tests.run(`journal create --name journal-credential-${now}`);
    await tests.passwordLifeCycle(t, 'journal', journal);
    await tests.remove('journal', journal);
});

ava.serial('journal logger & stream', async t => {
    const token = await tests.getToken();
    const content = await tests.getToken();
    const log_file = tests.getRandomFile(content);
    const output_file = tests.randomFileName();
    const journal = await tests.run(`journal create --name log-logger-${now}`);
    await tests.run(`journal credential password add --journal ${journal.id} --name my-token --password ${token}`);
    await tests.run(`journal logger --journal ${journal.id} --token ${token} --log-file ${log_file}`);
    let log_content;
    for (let i = 0; i <= 3; i++) {
        await tests.delay(1000); // to receive message
        await tests.run(`journal stream --head 1 --journal ${journal.id} --jsonl-file ${output_file}`);
        log_content = fs.readFileSync(output_file, 'utf-8');
        if (log_content) {
            break;
        }
    }
    t.true(!!log_content);
    t.true(JSON.parse(log_content).line === content);
    await tests.remove('journal', journal);
});
