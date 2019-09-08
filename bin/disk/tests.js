'use strict';
const fs = require('fs');
const path = require('path');
const os = require('os');
const fsPromises = require('fs').promises;

const ava = require('ava');

require('../../scope/h1');
const tests = require('../../lib/tests');
const ssh = require('../../lib/ssh');

const now = Date.now();

const download = (resource, destination) => tests.run(`disk download
                                                       --disk ${resource.id}
                                                       --destination-file '${destination}'
                                                       --no-progress`);

['archive', 'ssd', 'volume'].forEach(type => {
    const createParams = `--name disk-test-${now} --type ${type} --size 100`;
    ava.serial(`disk life cycle ${type}`, tests.resourceLifeCycle('disk', {
        createParams: createParams,
        stateCreated: 'Detached',
        skipFqdn: true,
    }));
});

// TODO find a way to stop disk upload
ava.todo('disk resume');

ava.serial('disk add & download', async t => {
    const tmp_filename = path.join(os.tmpdir(), `cli-disk-${now}.vhdx`);
    const createParams = `--name disk-test-${now} --size 1 --type ssd`;
    const fresh_disk = await tests.run(`disk create ${createParams}`);
    t.true(fresh_disk.created);

    await download(fresh_disk, tmp_filename);
    await fsPromises.access(tmp_filename);

    await tests.remove('disk', fresh_disk);

    const recreated_disk = await tests.run(`disk create ${createParams} --no-progress --source-file '${tmp_filename}'`);
    t.true(recreated_disk.created);
    await tests.remove('disk', recreated_disk);

    await fsPromises.unlink(tmp_filename);
    // TODO: Make the test that the re-downloaded disk is identical.
    // Take into account that the file will differ in metadata.
});

ava.serial('disk local upload', async t => {
    const filename = await tests.downloadFile(tests.disk_url);

    const disk = await tests.run(`disk create --name disk-upload-${now} --no-progress --type ssd --source-file '${filename}'`);
    t.true(disk.state === 'Detached');
    await tests.remove('disk', disk);
    fs.unlinkSync(filename);
});

ava.serial('disk resize', tests.resourceResizeCycle('disk', {
    createParams: `--name disk-test-${now} --type ssd`,
}));

['offline', 'online'].forEach(mode => {
    ava.serial(`disk create from other disk - ${mode}`, async t => {
        const osDisk = tests.getName('os-disk', t.title);
        const cloneDisk = tests.getName('disk-clone', t.title);
        const testFilePath = `~/${tests.getName('consistency-test')}.txt`;
        const sshKeyPair = await ssh.generateKey();
        const sshFilename = tests.getRandomFile(sshKeyPair.publicKey);

        const vm = await tests.run(`vm create --name ${tests.getName(t.title)} --os-disk ${osDisk},ssd,10 --type a1.nano --image debian --ssh-file ${sshFilename}`);
        const consistent_content = await tests.getToken();
        await ssh.execVm(vm, {privateKey: sshKeyPair.privateKey}, `echo '${consistent_content}' > ${testFilePath}; sync;`);
        if (mode === 'offline') {
            await tests.run(`vm stop  --vm ${vm.id}`);
        }
        await tests.run(`disk create --name ${cloneDisk} --source-disk ${osDisk}`);
        if (mode === 'online') {
            await tests.run(`vm stop  --vm ${vm.id}`);
        }
        await tests.run(`vm disk detach --disk ${osDisk} --vm ${vm.id}`);
        await tests.run(`vm disk attach --disk ${cloneDisk} --vm ${vm.id}`);
        await tests.run(`vm start --vm ${vm.id}`);
        const readable_content = await ssh.execVm(vm, {privateKey: sshKeyPair.privateKey},  `cat ${testFilePath}`);

        t.true(readable_content.trim() === consistent_content.trim());

        await tests.remove('vm', vm);
        await tests.remove('disk', cloneDisk);
        await tests.remove('disk', osDisk);
    });
});
