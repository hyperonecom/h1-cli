const ava = require('ava');
const { withVariable, run, runJson, getName } = require('./../lib/tests');

ava.skip('openapi:resource create help', async (t) => {
    const output = await run('h1 storage disk create --help ');
    t.true(output.includes('storage_project_disk_create'));
    t.true(output.includes('--service'));
    t.true(output.includes('--source'));
    t.true(output.includes('--vm'));
    t.true(output.includes('--location'));
    t.true(output.includes('--project'));
});

ava.skip('openapi:resource list help', async (t) => {
    const output = await run('h1 storage disk list --help');
    t.true(output.includes('storage_project_disk_list'));
    t.true(output.includes('--location'));
    t.true(output.includes('--project'));
});

ava.skip('openapi:resource show help', async (t) => {
    const output = await run('h1 storage disk show --help');
    t.true(output.includes('storage_project_disk_get'));
    t.true(output.includes('--location'));
    t.true(output.includes('--project'));
    t.true(output.includes('--disk'));
});

ava.skip('openapi:resource delete help', async (t) => {
    const output = await run('h1 storage disk delete --help');
    t.true(output.includes('storage_project_disk_delete'));
    t.true(output.includes('--location'));
    t.true(output.includes('--project'));
    t.true(output.includes('--disk'));
});

ava.skip('openapi:resource lifecycle execute', withVariable(['project'], async (t, project) => {
    const name = await getName(t.title);
    const output_create = await runJson(`h1 iam project role create --project ${project} --name ${name}`);
    t.true(output_create.name == name);
    const output_list = await runJson(`h1 iam project role list --project ${project}`);
    t.true(output_list.some(x => x.name == name));

    const output_show = await runJson(`h1 iam project role show --project ${project} --role ${output_create.id}`);
    t.true(output_show.name == name);

    await run(`h1 iam project role delete --project ${project} --role ${output_create.id}`);
}));
