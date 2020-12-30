const ava = require('ava');
const { run, withTemp } = require('../lib/tests');

const comply = async (cmd) => {
    const output = await run(`h1 config autocomplete comply --cmd '${cmd}'`);
    return output.split('\n');
};

ava('autocomplete comply', async t => {
    const category = await comply('h1 i');
    t.true(category.includes('iam'));

    const command = await comply('h1 iam project crea');
    t.true(command.includes('create'));

    const option = await comply('h1 iam project show --');
    t.true(option.includes('--help'));
    t.true(option.includes('--project'));
});

ava('autocomplete install', withTemp(async (t, tempDir) => {
    const options = {env: {HOME: tempDir}};
    const output = await run('h1 config autocomplete install', options);
    t.true(output.includes(tempDir));
}));
