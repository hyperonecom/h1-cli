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
            await tests.remove('vm', vm.id);
            await tests.remove('disk', disk_name);
        },
    };
};

ava.serial('image life cycle', async t => {
    const common = await getCommon(t);
    try {
        await tests.resourceLifeCycle('image', {
            createParams: `--vm ${common.vm.id} --name ${tests.getName(t.title)}`,
            stateCreated: 'Online',
            skipFqdn: true,
        })(t);
    } finally {
        await common.cleanup();
    }
});

for (const [name, project] of Object.entries(tests.access_test_case)) {
    ava.serial(`image access: ${name}`, async t => {
        const common = await getCommon(t);
        try {
            await tests.resourceAccessCycle('image', project, `--vm ${common.vm.id} --name ${tests.getName(t.title)}`)(t);
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

ava.serial('image preserve license', async t => {
    const disk_name = tests.getName('disk', t.title);
    const password = await tests.getToken();
    // create vm from recommended image
    const vm_recommended = await tests.run(`vm create --type a1.nano --name ${tests.getName('vm recommended', t.title)} --image rhel --os-disk ${disk_name},ssd,40 --password ${password} --no-start`);
    const vm_services = await tests.run(`vm service list --vm ${vm_recommended.id}`);
    t.true(vm_services.some(x => x.type == 'license'));
    // create image of vm
    const image = await tests.run(`image create --name ${tests.getName('image', 1, t.title)} --vm ${vm_recommended.id}`);
    t.true(image.license && image.license.length > 0);
    // clean up vm from recommended image
    await tests.remove('vm', vm_recommended);
    await tests.remove('disk', disk_name);
    // create vm from user image (with license)
    const vm_user = await tests.run(`vm create --type a1.nano --name ${tests.getName('vm user', t.title)} --image ${image.id} --os-disk ${disk_name},ssd,40 --password ${password} --no-start`);
    const vm_user_services = await tests.run(`vm service list --vm ${vm_user.id}`);
    t.true(vm_user_services.some(x => x.type == 'license'));
    // clean up vm from user image
    await tests.remove('image', image);
    // clean up vm from user image
    await tests.remove('vm', vm_user);
    await tests.remove('disk', disk_name);
});
