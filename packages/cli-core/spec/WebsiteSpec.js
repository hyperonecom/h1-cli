/* eslint-disable no-console */
import openapi from '../../../lib/openapi';
import { buildProgram } from '../lib/cli/dynamic';
const shell_quote = require('shell-quote');

jasmine.getEnv().defaultTimeoutInterval = 10 * 1000;

const run = async (cmd) => {
    cmd = Array.isArray(cmd) ? cmd : shell_quote.parse(cmd);
    console.log(new Date(), shell_quote.quote(['./bin/h1', ...cmd]));
    const program = await buildProgram();
    return program.exec(cmd);
};

const runAuth = (cmd) => run([
    ...Array.isArray(cmd) ? cmd : shell_quote.parse(cmd),
    '--passport-file', '~/.h1/passport.json',
]);

const project = '5af0bbbcb7802508ad844caa';
const location = 'pl-waw-1';

const getName = (...names) => [...names, Date.now().toString()]
    .join('-')
    .replace(/[^a-zA-Z0-9]/g, '-');

describe('storage', function () {
    beforeEach(async function () {
        await openapi.init('https://api.hyperone.com/v2/openapi.json');
    });

    it('show', async function () {
        const output = await run('storage');
        expect(output).toMatch(/Management of disk/);
    });
});

describe('storage.disk.collection', function () {
    beforeEach(async function () {
        await openapi.init('https://api.hyperone.com/v2/openapi.json');
        this.ctx = `--location ${location} --project ${project}`;
    });

    it('disk life cycle', async function () {
        const name = getName();
        const disks = await runAuth(`storage disk list ${this.ctx}`);
        expect(disks.length).toBeGreaterThan(1);
        const disk = await runAuth(`storage disk create ${this.ctx} --name ${name} --size 10 --service ssd`);
        expect(disk.name).toEqual(name);
        const updated_disks = await runAuth(`storage disk list ${this.ctx}`);
        expect(updated_disks.length).toBeGreaterThan(disks.length);
    }, 10 * 1000);
});

describe('storage.disk.instance', function () {
    beforeEach(async function () {
        await openapi.init('https://api.hyperone.com/v2/openapi.json');
    });

    beforeEach(async function () {
        this.ctx = `--location ${location} --project ${project}`;
        this.disk = await runAuth(`storage disk create ${this.ctx} --name ${getName()} --size 10 --service ssd`);
    }, 10 * 1000);

    it('disk rename', async function () {
        const new_value = getName('resized');
        const new_disk = await runAuth(`storage disk update ${this.ctx} --disk ${this.disk.uri} --name ${new_value}`);
        expect(new_disk.name).toEqual(new_value);
    }, 10 * 1000);

    it('disk resize', async function () {
        const new_value = 25;
        const new_disk = await runAuth(`storage disk resize ${this.ctx} --disk ${this.disk.uri} --size ${new_value}`);
        expect(new_disk.size).toEqual(new_value);
    });

    afterEach(async function () {
        await runAuth(`storage disk delete ${this.ctx} --disk ${this.disk.uri}`);
    });
});
