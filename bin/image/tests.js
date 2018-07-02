'use strict';
const ava = require('ava');

require('../../scope/h1');
const tests = require('../../lib/tests');

const now = Date.now();

const name = `image-test-${now}`;

const getCommon = async (test_name, options) => {
    const image = options.image || 'debian';
    const name = `image-test-${test_name}-${now}`.replace(/[^\w]/g, '-');
    const password = await tests.getToken();
    const disk_name = `disk-${name}`;
    return {
        vm: await tests.run(`vm create --name ${name} --password ${password} --os-disk ${disk_name},ssd,10 --type a1.nano --image ${image}`),
        disk_name: disk_name,
        vm_name: name,
        cleanup: () => {
            tests.remove('vm', name);
            tests.remove('disk', disk_name);
        },
    };
};

ava.test.serial('image rename', async t => {
    const common = await getCommon(t.title);

    await tests.resourceRename('image', {
        createParams: `--vm ${common.vm._id} --name ${name}`,
    })(t);

    common.cleanup();
});

ava.test.serial('image disk list', async t => {
    const common = await getCommon(t.title);
    const image = await tests.run(`image create --vm ${common.vm._id} --name ${name}`);

    const list = await tests.run(`image disk --image ${image._id}`);
    t.true(list.some(d => d.type === 'ssd' && d.size === 10));

    common.cleanup();
    await tests.remove('image', image);

});

ava.test.serial('image access', async t => {
    const common = await getCommon(t.title);

    await tests.resourceAccessCycle('image', `--vm ${common.vm._id} --name ${name}`)(t);

    common.cleanup();
});

ava.test.serial('image resolver prefer server', async t => {
    const image = await tests.run('image show --image ubuntu');
    t.true(image.description.edition === 'server');
    t.true(image.description.distro === 'ubuntu');
});
