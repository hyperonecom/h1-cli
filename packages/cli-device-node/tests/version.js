import test from 'ava';
import { run } from '../lib/tests.js';

test('version check', async t => {
    const output = await run('h1 version check');
    t.true(output.includes('You are using the latest version.'));
});

test('version upgrade', async t => {
    const { output } = await t.throwsAsync(run('h1 version upgrade'));
    t.true(output.includes('Only official release files can be updated'));
});
