'use strict';

const path = require('path');
const os = require('os');
const fsPromises = require('fs').promises;

const ava = require('ava');

require('../../scope/h1');
const tests = require('../../lib/tests');

const now = Date.now();

const download = (resource, destination) => tests.run(`disk download
                                                       --disk ${resource._id}
                                                       --destination-file ${destination}
                                                       --no-progress`);

['archive', 'ssd', 'volume'].forEach(type => {
    const createParams = `--name disk-test-${now} --type ${type} --size 100`;
    ava.test.serial(`disk life cycle ${type}`, tests.resourceLifeCycle('disk', createParams));
    ava.test.serial(`disk rename ${type}`, tests.resourceRename('disk', createParams));
});

// TODO find a way to stop disk upload
ava.test.todo('disk resume');

ava.test.serial('disk add & download', async t => {
    const tmp_filename = path.join(os.tmpdir(), `cli-disk-${now}.vhdx`);
    const createParams = `--name disk-test-${now} --size 1 --type ssd`;
    const fresh_disk = await tests.run(`disk create ${createParams}`);
    t.true(fresh_disk.created);

    await download(fresh_disk, tmp_filename);
    await fsPromises.access(tmp_filename);

    await tests.remove('disk', fresh_disk);

    const recreated_disk = await tests.run(`disk create ${createParams} --no-progress --source-file ${tmp_filename}`);
    t.true(recreated_disk.created);
    await tests.remove('disk', recreated_disk);

    await fsPromises.unlink(tmp_filename);
    // TODO: Make the test that the re-downloaded disk is identical.
    // Take into account that the file will differ in metadata.
});

ava.test.serial('disk resize', tests.resourceResizeCycle('disk', {
    createParams: `--name disk-test-${now} --type ssd`,
}));
