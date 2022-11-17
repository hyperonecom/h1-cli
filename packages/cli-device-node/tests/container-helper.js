import test from 'ava';
import { run, runJson, withTemp, withVariable } from '../lib/tests.js';
import { promisify } from 'node:util';
import child_process from 'node:child_process';
const exec = promisify(child_process.exec);

// test have known isolation issue on CI
const skipIfCi = process.env.CI ? test.skip : test;

skipIfCi('container helper lifecycle', withVariable(['project'], withTemp(async (t, project, tmpDir) => {
    const options = {
        env: {
            ...process.env,
            PATH: `${tmpDir}:${process.env.PATH}`,
        },
    };

    const name = 'busybox';

    const resource = await runJson(`h1 container registry create --project ${project} --name test-cli-container-helper-lifecycle --service /billing/project/platform/service/5d08b8c36f76391808dffc3d`, options);
    try {
        await run(`h1 container registry helper install --output-directory ${tmpDir}`, options);
        await run(`h1 container registry helper setup --project ${project} --registry ${resource.id}`, options);

        const { stdout: stdoutHelper } = await exec('docker-credential-h1 --help', options);
        t.true(stdoutHelper.includes('--help'));
        t.true(stdoutHelper.includes('Show help message and exit.'));

        const { stdout: stdoutPull } = await exec(`docker pull ${name}`, options);
        t.true(stdoutPull.includes(`docker.io/library/${name}`));

        await exec(`docker tag ${name} ${resource.fqdn}/${name}`);

        const { stdout: stdoutPush } = await exec(`docker push ${resource.fqdn}/${name}`, options);
        t.true(stdoutPush.includes('Pushed'));

        const output_list = await runJson(`h1 container registry repository list --project ${project} --registry ${resource.id}`);
        t.true(output_list.some(x => x.name === name));
    } finally {
        await run(`h1 container registry delete --project ${project} --registry ${resource.id}`, options);
    }
})));
