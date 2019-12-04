'use strict';
const fs = require('fs').promises;
const ava = require('ava');

require('../../scope/h1');
const tests = require('../../lib/tests');

const now = Date.now();

ava.serial('journal life cycle', tests.resourceLifeCycle('journal', {
    createParams: `--name journal-life-cycle-${now}`,
    schemaRef: '#/components/schemas/journal',
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
    const journal = await tests.run(`journal create --name ${tests.getName(t.title)}`);
    try {
        await tests.run(`journal credential password add --journal ${journal.id} --name my-token --password ${token}`);
        await tests.run(`journal logger --journal ${journal.id} --token ${token} --log-file ${log_file}`);
        await tests.delay(3 * 1000);
        await tests.run(`journal stream --head 1 --journal ${journal.id} --jsonl-file ${output_file}`);
        const log_content = await fs.readFile(output_file, 'utf-8');
        t.true(!!log_content);
        t.true(JSON.parse(log_content).message === content);
    } finally {
        await tests.remove('journal', journal);
    }
});


ava.serial('journal logger & stream with tags', async t => {
    const token = await tests.getToken();
    const content_with_tag = await tests.getToken();
    const log_file_with_tag = tests.getRandomFile(content_with_tag);
    const content_without_tag = await tests.getToken();
    const log_file_without_tag = tests.getRandomFile(content_without_tag);
    const output_file = tests.randomFileName();
    const journal = await tests.run(`journal create --name ${tests.getName(t.title)} --password ${token}`);
    try {
        await tests.run(`journal logger --journal ${journal.id} --token ${token} --log-file ${log_file_with_tag} --tag host=123`);
        await tests.run(`journal logger --journal ${journal.id} --token ${token} --log-file ${log_file_without_tag}`);
        await tests.delay(3 * 1000);
        await tests.run(`journal stream --journal ${journal.id} --jsonl-file ${output_file} --tag host=123`);
        const log_content = await fs.readFile(output_file, 'utf-8');
        t.true(!!log_content);
        const logs = log_content.split('\n').filter(x => !!x).map(x => JSON.parse(x));
        t.true(logs.some(x => x.message === content_with_tag));
        t.true(!logs.some(x => x.message === content_without_tag));
    } finally {
        await tests.remove('journal', journal);
    }
});

ava.serial('journal retention update', async t => {
    const journal = await tests.run(`journal create --name ${now} --retention 25`);
    try {
        t.true(journal.retention === 25);
        await tests.run(`journal retention --journal ${journal.id} --retention 25`);
        const journal_updated = await tests.run(`journal show --journal ${journal.id}`);
        t.true(journal_updated.retention === 25);
    } finally {
        await tests.remove('journal', journal);
    }
});
