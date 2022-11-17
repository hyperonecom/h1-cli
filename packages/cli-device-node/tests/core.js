import test from 'ava';
import { run } from '../lib/tests.js';

test('display version option output', async t => {
    const output = await run('h1 -v');
    t.true(output.includes('h1 version 2'));
});

test('display category', async t => {
    const output = await run('h1 iam');
    t.true(output.includes('Management of project resource'));
});

test('display command help', async t => {
    const output = await run('h1 iam project create --help');
    t.true(output.includes('Show help message and exit.'));
});

test('display error for missing parameter', async t => {
    const err = await t.throwsAsync(run('h1 config settings set'));
    t.true(err.output.includes('--key'));
    t.true(err.output.includes('--value'));
});
