const ava = require('ava');
const { run } = require('./../lib/tests');

ava('display version command output', async t => {
    const output = await run('h1 version');
    t.true(output.includes('2.0'));
});

ava('display version option output', async t => {
    const output = await run('h1 -v');
    t.true(output.includes('h1 version 2'));
});

ava('display category', async t => {
    const output = await run('h1 iam');
    t.true(output.includes('Management of project resource'));
});

ava('display command help', async t => {
    const output = await run('h1 iam project create --help');
    t.true(output.includes('Show help message and exit.'));
});

ava('display error for missing parameter', async t => {
    const err = await t.throwsAsync(run('h1 config settings set'));
    t.true(err.output.includes('--key'));
    t.true(err.output.includes('--value'));
});
