const ava = require('ava');
const { withVariable, run, runJson, getName, downloadCachedFile } = require('./../lib/tests');

ava('openapi:resource create help', async (t) => {
    const output = await run('h1 storage disk create --help ');
    t.true(output.includes('storage_project_disk:create'));
    t.true(output.includes('--service'));
    t.true(output.includes('--source'));
    t.true(output.includes('--vm'));
    t.true(output.includes('--location'));
    t.true(output.includes('--project'));
});

ava('openapi:resource list help', async (t) => {
    const output = await run('h1 storage disk list --help');
    t.true(output.includes('storage_project_disk:list'));
    t.true(output.includes('--location'));
    t.true(output.includes('--project'));
});

ava('openapi:resource show help', async (t) => {
    const output = await run('h1 storage disk show --help');
    t.true(output.includes('storage_project_disk:get'));
    t.true(output.includes('--location'));
    t.true(output.includes('--project'));
    t.true(output.includes('--disk'));
});

ava('openapi:resource delete help', async (t) => {
    const output = await run('h1 storage disk delete --help');
    t.true(output.includes('storage_project_disk:delete'));
    t.true(output.includes('--location'));
    t.true(output.includes('--project'));
    t.true(output.includes('--disk'));
});

ava('openapi:resource lifecycle execute', withVariable(['project'], async (t, project) => {
    const name = await getName(t.title);
    const output_create = await runJson(`h1 iam project role create --project ${project} --name ${name}`);
    t.true(output_create.name === name);
    const output_list = await runJson(`h1 iam project role list --project ${project}`);
    t.true(output_list.some(x => x.name === name));

    const output_show = await runJson(`h1 iam project role show --project ${project} --role ${output_create.id}`);
    t.true(output_show.name === name);

    await run(`h1 iam project role delete --project ${project} --role ${output_create.id}`);
}));

ava('openapi:resource create:uri-upload', withVariable(['project'], async (t, project) => {
    const name = await getName(t.title);
    const iso_url = 'http://www.tinycorelinux.net/9.x/x86/release/Core-current.iso';
    const filepath = await downloadCachedFile(iso_url);
    const output_create = await runJson(`h1 storage iso create --project ${project} --name ${name} --source file://${filepath}`);
    t.true(output_create.state === 'Online');
    await run(`h1 storage iso delete --project ${project} --iso ${output_create.id}`);
}));
