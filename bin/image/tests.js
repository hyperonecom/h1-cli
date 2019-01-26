'use strict';
const ava = require('ava');

require('../../scope/h1');
const tests = require('../../lib/tests');

const getCommon = async (t, options = {}) => {
    const image = options.image || 'debian';
    const vm_name = tests.getName('vm', t.title);
    const disk_name = tests.getName('disk', t.title);
    const password = await tests.getToken();
    return {
        vm: await tests.run(`vm create --name ${vm_name} --password ${password} --os-disk ${disk_name},ssd,10 --type a1.nano --image ${image}`),
        disk_name: disk_name,
        vm_name: vm_name,
        cleanup: async () => {
            await tests.remove('vm', vm_name);
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

for (const project of [tests.RECIPIENT.project, '*']) {
    ava.serial(`image access: ${project}`, async t => {
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
