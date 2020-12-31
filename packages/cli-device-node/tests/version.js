const ava = require('ava');
const { run } = require('./../lib/tests');

ava('version check', async t => {
    const output = await run('h1 version check');
    t.true(output.includes('You are using the latest version.'));
});

ava('version upgrade', async t => {
    const {output} = await t.throwsAsync(run('h1 version upgrade'));
    t.true(output.includes('Only official release files can be updated'));
});
