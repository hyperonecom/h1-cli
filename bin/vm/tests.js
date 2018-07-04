'use strict';

const ava = require('ava');
const fs = require('fs');

require('../../scope/h1');
const tests = require('../../lib/tests');

const now = Date.now();

const getCommon = async (test_name, type = 'a1.nano') => {
    const vm_name = `vm-test-${test_name}-${now}`.replace(/[^\w]/g, '-');
    const token = await tests.getToken();
    const disk_name = `disk-${vm_name}`;
    const params = `--type ${type} --password ${token} --name ${vm_name} --image debian --os-disk ${disk_name},ssd,10`;
    return {
        params: params,
        disk_name: disk_name,
        name: vm_name,
        cleanup: async () => {
            await tests.remove('vm', vm_name);
            await tests.remove('disk', disk_name);
        },
    };
};

ava.test.todo('vm queue');
ava.test.todo('vm console');
ava.test.todo('vm serialport console');
ava.test.todo('vm passwordreset');

['a1.nano', 'm2.tiny', 'm2.medium'].forEach(flavour => {
    ava.test.serial(`vm life cycle ${flavour}`, async t => {
        const common = await getCommon(t.title);
        await tests.resourceLifeCycle('vm', common.params)(t);
        await tests.remove('disk', common.disk_name);
    });
});

ava.test.serial('vm rename', async t => {
    const common = await getCommon(t.title);
    await tests.resourceRename('vm', common.params)(t);
    await tests.remove('disk', common.disk_name);
});

ava.test.serial('vm stop & start & turnoff', async t => {
    const common = await getCommon(t.title);
    const vm = await tests.run(`vm create ${common.params}`);
    t.true(vm.state === 'Running');

    const actions = [
        {name: 'stop', state: 'Off'},
        {name: 'start', state: 'Running'},
        {name: 'restart', state: 'Running'},
        {name: 'turnoff', state: 'Off'},
    ];

    for (const action of actions) {
        const action_vm = await tests.run(`vm ${action.name} --vm ${vm._id}`);
        t.true(action_vm.state === action.state);
        const updated_vm = await tests.run(`vm show --vm ${vm._id}`);
        t.true(updated_vm.state === action.state);
    }

    await common.cleanup();
});

ava.test.serial('vm userdata', async t => {
    const my_metadata = 'my-config';
    const tmp_file = tests.getRandomFile(my_metadata);

    const common = await getCommon(t.title);
    const vm = await tests.run(`vm create ${common.params}`);

    await tests.run(`vm userdata --vm ${vm._id} --userdata-file ${tmp_file}`);

    const userdata_vm = await tests.run(`vm show --vm ${vm._id}`);
    const userdata_text = Buffer.from(userdata_vm.userMetadata, 'base64').toString('ascii');

    t.true(userdata_text === my_metadata);

    fs.unlinkSync(tmp_file);
    await common.cleanup();
});

ava.test.serial('vm disk attach & detach', async t => {
    const common = await getCommon(t.title);
    const vm = await tests.run(`vm create ${common.params}`);
    const disk = await tests.run(`disk create --name disk-extra-${common.name} --type ssd --size 10`);

    const actions = [
        {name: 'attach', result: true},
        {name: 'detach', result: false},
    ];

    for (const action of actions) {
        await tests.run(`vm disk ${action.name} --vm ${vm._id} --disk ${disk._id}`);
        const list = await tests.run(`vm disk list --vm ${vm._id}`);
        t.true(list.some(x => x.disk._id === disk._id) === action.result);
    }

    await common.cleanup();
    await tests.remove('disk', disk);
});

ava.test.serial('vm nic life cycle', async t => {
    const common = await getCommon(t.title, 'm2.tiny');
    const vm = await tests.run(`vm create --no-start ${common.params}`);
    const network = await tests.run(`network create --name network-vm-test-${now}`);

    await tests.resourceLifeCycle('vm nic', {
        createParams: `--vm ${vm._id} --type private --network ${network._id}`,
        listParams: `--vm ${vm._id}`,
        showParams: `--vm ${vm._id}`,
        deleteParams: `--vm ${vm._id}`,
    })(t);

    await common.cleanup();
    await tests.remove('network', network);
});

const subresourcLifeCycle = (type, options) => async t => {
    const actions = [
        {name: 'add', result: true},
        {name: 'delete', result: false, params: options.deleteParams || ''},
    ];

    for (const action of actions) {
        await tests.run(`${type} ${action.name} ${action.params || ''} ${options.commonParams} ${options.actionParams}`);
        let list = await tests.run(`${type} list ${options.commonParams}`);
        if (options.entries) {
            list = Object.entries(list);
        }
        t.true(list.some(options.test_fn) === action.result);
    }
};

ava.test.serial('vm nic ip life cycle', async t => {
    const common = await getCommon(t.title, 'm2.tiny');
    const vm = await tests.run(`vm create ${common.params}`);
    const ip = await tests.run('ip create');
    const nic_list = await tests.run(`vm nic list --vm ${vm._id}`);

    await subresourcLifeCycle('vm nic ip', {
        commonParams: `--vm ${vm._id} --nic ${nic_list[0]._id}`,
        actionParams: `--ip ${ip.name}`,
        deleteParams: '--yes',
        test_fn: x => x.address === ip.address,
    })(t);

    await tests.remove('ip', ip);
    await common.cleanup();
});

ava.test.serial('vm dvd cycle', async t => {
    const common = await getCommon(t.title);
    const vm = await tests.run(`vm create ${common.params}`);
    const iso = await tests.run(`iso create --name iso-test-${now} --source-url ${tests.iso_url}`);

    await tests.run(`vm dvd insert --vm ${vm._id} --iso ${iso._id}`);

    const list = await tests.run(`vm dvd list --vm ${vm._id}`);
    t.true(list.some(dvd => dvd.iso._id === iso._id));

    await tests.run(`vm dvd eject --vm ${vm._id} --yes`);

    await tests.remove('iso', iso);
    await common.cleanup();
});

ava.test.serial('vm tag', async t => {
    const common = await getCommon(t.title);
    const vm = await tests.run(`vm create ${common.params}`);

    await subresourcLifeCycle('vm tag', {
        commonParams: `--vm ${vm._id}`,
        actionParams: '--tag PROD',
        entries: true,
        test_fn: ([k]) => k === 'PROD',
    })(t);

    await common.cleanup();
});

ava.test.serial('vm serialport log', async t => {
    const common = await getCommon(t.title);
    const vm = await tests.run(`vm create ${common.params}`);
    t.true(vm.created);

    await tests.run(`vm serialport log --vm ${vm._id}`);

    await common.cleanup();
});
