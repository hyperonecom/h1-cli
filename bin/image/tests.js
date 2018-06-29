'use strict';
const ava = require('ava');

require('../../scope/h1');
const tests = require('../../lib/tests');

const now = Date.now();

const name = `image-test-${now}`;

const getCommon = async (test_name) => {
    const name = `image-test-${test_name}-${now}`.replace(/[^\w]/g, '-');
    const password = await tests.getToken();
    const disk_name = `disk-${name}`;
    return {
        vm: await tests.run(`vm create --name ${name} --password ${password} --os-disk ${disk_name},ssd,10 --type a1.nano --image debian`),
        disk_name: disk_name,
        vm_name: name,
    };
};

ava.test.serial('image rename', async t => {
    const common = await getCommon(t.title);

    await tests.resourceRename('image', {
        createParams: `--vm ${common.vm._id} --name ${name}`,
    })(t);

    await tests.remove('vm', common.vm);
    await tests.remove('disk', common.disk_name);
});

ava.test.serial('image disk list', async t => {
    const common = await getCommon(t.title);
    const image = await tests.run(`image create --vm ${common.vm._id} --name ${name}`);

    const list = await tests.run(`image disk --image ${image._id}`);
    t.true(list.some(d => d.type === 'ssd' && d.size === 10));

    await tests.remove('vm', common.vm);
    await tests.remove('disk', common.disk_name);
    await tests.remove('image', image);

});

ava.test.serial('image access', async t => {
    const common = await getCommon(t.title);

    await tests.resourceAccessCycle('image', `--vm ${common.vm._id} --name ${name}`)(t);

    await tests.remove('vm', common.vm);
    await tests.remove('disk', common.disk_name);
});
