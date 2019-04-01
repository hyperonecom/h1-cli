'use strict';
const ava = require('ava');

require('../../scope/h1');
const tests = require('../../lib/tests');

const getCommon = async (t, options = {}) => {
    const image = options.image || 'debian';
    const vm_name = tests.getName('vm', t.title);
    const disk_name = tests.getName('disk', t.title);
    const password = await tests.getToken();
    const vm = await tests.run(`vm create --name ${vm_name} --password ${password} --os-disk ${disk_name},ssd,10 --type a1.nano --image ${image}`);
    return {
        vm, disk_name, vm_name,
        cleanup: async () => {
            await tests.remove('vm', vm._id);
            await tests.remove('disk', disk_name);
        },
    };
};

ava.serial('image life cycle', async t => {
    const common = await getCommon(t);
    try {
        await tests.resourceLifeCycle('image', {
            createParams: `--vm ${common.vm._id} --name ${tests.getName(t.title)}`,
            stateCreated: 'Online',
        })(t);
    } finally {
        await common.cleanup();
    }
});

ava.serial('image rename', async t => {
    const common = await getCommon(t);
    try {
        await tests.resourceRename('image', `--vm ${common.vm._id} --name ${tests.getName(t.title)}`)(t);
    } finally {
        await common.cleanup();
    }
});

ava.serial('image disk download', async t => {
    const common = await getCommon(t);
    try {
        const image = await tests.run(`image create --vm ${common.vm._id} --name ${tests.getName(t.title)}`);
        const disks = await tests.run(`image disk list --image ${image._id}`);
        t.true(disks.length > 0);
        await tests.run(`image disk show --image ${image._id} --disk ${disks[0]._id}`);
        const filename = tests.randomFileName();
        await tests.run(`image disk download --image ${image._id} --disk ${disks[0]._id} --destination-file ${filename}`);
        const disk = await tests.run(`disk create --namee ${tests.getName(t.title)} --source-file ${filename}`);
        await tests.remove('image', image);
        await tests.remove('disk', disk);
    } finally {
        await common.cleanup();
    }
});

for (const [name, project] of Object.entries(tests.access_test_case)) {
    ava.serial(`image access: ${name}`, async t => {
        const common = await getCommon(t);
        try {
            await tests.resourceAccessCycle('image', project, `--vm ${common.vm._id} --name ${tests.getName(t.title)}`)(t);
        } finally {
            await common.cleanup();
        }
    });
}
ava.serial('image resolver prefer server', async t => {
    const image = await tests.run('image show --image ubuntu');
    const description = JSON.parse(image.description);
    t.true(description.edition === 'server');
    t.true(description.distro === 'ubuntu');
});

ava.serial('image transfer', async t => {
    const common = await getCommon(t);

    try {
        await tests.transferLifeCycle('image', {
            createParams: `--vm ${common.vm._id} --name ${tests.getName(t.title)}`,
        })(t);
    } finally {
        await common.cleanup();
    }
});
