const ava = require('ava');
const { run, runJson, runPty, withTemp, withVariable } = require('./../lib/tests');

ava.skip('display user profile', async t => {
    const output = await runJson('h1 auth me');
    t.true(output.aud.includes('https://api.hyperone.com/v2'));
});

ava.skip('auth user', withTemp(withVariable(['username', 'password'], async (t, tmpDir, username, password) => {
    const options = { env: { HOME: tmpDir } };
    const output = await run(`h1 auth user --username ${username} --password ${password}`, options);
    t.true(output.includes('Token successfully updated.'));
    const me = await runJson('h1 auth me', options);
    t.true(me.sub.includes(username));
})));

ava.skip('auth aws', withTemp(withVariable(['aws-access-key', 'aws-secret-key'], async (t, tmpDir, access_key, secret_key) => {
    const options = { env: { HOME: tmpDir } };
    const output = await run(`h1 auth aws --access-key-id ${access_key} --secret-access-key ${secret_key}`, options);
    t.true(output.includes('Token successfully updated.'));
    const me = await runJson('h1 auth me', options);
    t.true(me.sub.includes('https://sts.amazonaws.com/'));
})));

ava('auth user interactive', withTemp(withVariable(['username', 'password'], async (t, tmpDir, username, password) => {
    const options = { env: { HOME: tmpDir } };
    const output = await runPty('h1 auth user', [username, password].map(x => `${x}\r`), options);
    t.true(output.includes('Token successfully updated.'));
    const me = await runJson('h1 auth me', options);
    t.true(me.sub.includes(username));
})));
