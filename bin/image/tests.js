'use strict';
const ava = require('ava');

require('../../scope/h1');
const tests = require('../../lib/tests');

const now = Date.now();

const name = `image-test-${now}`;

const getCommon = async (test_name, options = {}) => {
    const image = options.image || 'debian';
    const name = `image-test-${test_name}-${now}`.replace(/[^\w]/g, '-');
    const password = await tests.getToken();
    const disk_name = `disk-${name}`;
    return {
        vm: await tests.run(`vm create --name ${name} --password ${password} --os-disk ${disk_name},ssd,10 --type a1.nano --image ${image}`),
        disk_name: disk_name,
        vm_name: name,
        cleanup: async () => {
            await tests.remove('vm', name);
            await tests.remove('disk', disk_name);
        },
    };
};

ava.serial('image rename', async t => {
    const common = await getCommon(t.title);

    await tests.resourceRename('image', {
        createParams: `--vm ${common.vm._id} --name ${name}`,
    })(t);

    await common.cleanup();
});

ava.serial('image disk list', async t => {
    const common = await getCommon(t.title);
    const image = await tests.run(`image create --vm ${common.vm._id} --name ${name}`);

    const list = await tests.run(`image disk --image ${image._id}`);
    t.true(list.some(d => d.type === 'ssd' && d.size === 10));

    await common.cleanup();
    await tests.remove('image', image);

});

ava.serial('image access', async t => {
    const common = await getCommon(t.title);

    await tests.resourceAccessCycle('image', `--vm ${common.vm._id} --name ${name}`)(t);

    await common.cleanup();
});

ava.serial('image resolver prefer server', async t => {
    const image = await tests.run('image show --image ubuntu');
    const description = JSON.parse(image.description);
    t.true(description.edition === 'server');
    t.true(description.distro === 'ubuntu');
});

ava.serial('image transfer', async t => {
    const common = await getCommon(t.title);

    try {
        await tests.transferLifeCycle('image', {
            createParams: `--vm ${common.vm._id} --name ${name}-transfer`,
        })(t);
    } finally {
        await common.cleanup();
    }
});
