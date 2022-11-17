import test from 'ava';
import { run, runJson, randomToken } from '../lib/tests.js';

test('config settings set', async t => {
    const output = await run('h1 config settings set --key x --value x');
    t.true(output.includes('Configuration option set'));
});

test('config settings lifecycle', async t => {
    const token = await randomToken();
    const key = 'token-lifecycle';
    const output_set = await run(`h1 config settings set --key ${key} --value ${token}`);
    t.true(output_set.includes('Configuration option set'));
    const output_get = await run(`h1 config settings get --key ${key}`);
    t.true(output_get.includes(token));
    const output_dump = await runJson('h1 config settings dump');
    t.true(output_dump[key] === token);
});
