'use strict';

const ava = require('ava');
const fs = require('fs');

require('../../scope/h1');
const tests = require('../../lib/tests');
const ssh = require('../../lib/ssh');
const now = Date.now();

const vm_windows_boot = 5 * 60 * 1000;

const getCommon = async (test_name, options = {}) => {
    const type = options.type || 'a1.nano';
    const vm_name = tests.getName(`vm-test-${test_name}-${now}`);
    const token = await tests.getToken();
    const disk_name = `disk-${vm_name}`;
    const params = {
        createParams: `--type ${type} --password ${token} --name ${vm_name} --image debian --os-disk ${disk_name},ssd,10`,
        stateCreated: 'Running',
        skipTransfer: true,
    };

    return {
        params: params,
        password: token,
        disk_name: disk_name,
        name: vm_name,
        cleanup: async () => {
            await tests.remove('vm', vm_name);
            await tests.remove('disk', disk_name);
        },
    };
};

ava.todo('vm console');
ava.todo('vm serialport console');

ava.serial('vm passwordreset', async t => {
    const token = await tests.getToken();
    const vm_name = tests.getName(t.title);
    const disk_name = tests.getName('disk', t.title);
    const network = await tests.run(`network create --name ${tests.getName(t.title)}`);
    const ip = await tests.run('ip create');
    const netgw = await tests.run(`netgw create --name ${tests.getName(t.title)} --ip ${ip.id}`);
    await tests.run(`netgw attach --network ${network.id} --netgw ${netgw.id}`);
    const vm = await tests.run(`vm create --type m2.medium --password ${token} --name ${vm_name} --image windows:2016 --network ${network.id} --os-disk ${disk_name},ssd,40`);
    try {
        await tests.delay(vm_windows_boot);
        const result = await tests.run(`vm passwordreset --vm ${vm.id} --user Administrator`);
        t.true(!!result[0]['New Password']);
    } finally {
        await tests.remove('vm', vm_name);
        await tests.remove('disk', disk_name);
        await tests.run(`netgw detach --netgw ${netgw.id}`);
        await tests.remove('netgw', netgw);
        await tests.remove('ip', ip);
        await tests.remove('network', network);
    }
});

['a1.nano', 'm2.tiny', 'm2.medium'].forEach(flavour => {
    ava.serial(`vm life cycle ${flavour}`, async t => {
        const common = await getCommon(t.title);
        await tests.resourceLifeCycle('vm', common.params)(t);
        await tests.remove('disk', common.disk_name);
    });
});

ava.serial('vm stop & start & turnoff', async t => {
    const common = await getCommon(t.title);
    const vm = await tests.run(`vm create ${common.params.createParams}`);
    t.true(vm.state === 'Running');

    const actions = [
        { name: 'stop', state: 'Off' },
        { name: 'start', state: 'Running' },
        { name: 'restart', state: 'Running' },
        { name: 'turnoff', state: 'Off' },
    ];

    for (const action of actions) {
        const action_vm = await tests.run(`vm ${action.name} --vm ${vm.id}`);
        t.true(action_vm.state === action.state);
        const updated_vm = await tests.run(`vm show --vm ${vm.id}`);
        t.true(updated_vm.state === action.state);
    }

    await common.cleanup();
});

ava.serial('vm userdata', async t => {
    const my_metadata = 'my-config';
    const tmp_file = tests.getRandomFile(my_metadata);

    const common = await getCommon(t.title);
    const vm = await tests.run(`vm create ${common.params.createParams}`);

    await tests.run(`vm userdata --vm ${vm.id} --userdata-file '${tmp_file}'`);

    const userdata_vm = await tests.run(`vm show --vm ${vm.id}`);
    const userdata_text = Buffer.from(userdata_vm.userMetadata, 'base64').toString('ascii');

    t.true(userdata_text === my_metadata);

    fs.unlinkSync(tmp_file);
    await common.cleanup();
});

ava.serial('vm usermetadata execute in cloud-init', async t => {
    const token = await tests.getToken();
    const remote_tmp_path = '/tmp/cloud-init-usermetadata.txt';
    const my_metadata = `#!/bin/sh\necho -n "${token}" > ${remote_tmp_path};`;
    const tmp_file = tests.getRandomFile(my_metadata);
    const common = await getCommon(t.title);
    const vm = await tests.run(`vm create ${common.params.createParams} --userdata-file ${tmp_file}`);

    fs.unlinkSync(tmp_file);

    const content = await ssh.execVm(vm, { password: common.password }, `cat ${remote_tmp_path}`);
    t.true(content === token);
    await common.cleanup();
});

ava.serial('vm disk attach & detach', async t => {
    const common = await getCommon(t.title);
    const vm = await tests.run(`vm create ${common.params.createParams}`);
    const disk = await tests.run(`disk create --name disk-extra-${common.name} --type ssd --size 10`);

    const actions = [
        { name: 'attach', result: true },
        { name: 'detach', result: false },
    ];

    for (const action of actions) {
        await tests.run(`vm disk ${action.name} --vm ${vm.id} --disk ${disk.id}`);
        const list = await tests.run(`vm disk list --vm ${vm.id}`);
        t.true(list.some(x => x.disk.id === disk.id) === action.result);
    }

    await common.cleanup();
    await tests.remove('disk', disk);
});

const commonNicSkip = {
    skipService: true,
    skipRename: true,
    skipTransfer: true,
};

ava.serial('vm nic life cycle for private network', async t => {
    const network = await tests.run(`network create --name network-vm-test-${now}`);
    const common = await getCommon(t.title, {
        type: 'm2.tiny',
    });
    try {
        const vm = await tests.run(`vm create --no-start ${common.params.createParams}`);

        await tests.resourceLifeCycle('vm nic', Object.assign({
            stateCreated: 'Online',
            createParams: `--vm ${vm.id} --type private --network ${network.id}`,
            listParams: `--vm ${vm.id}`,
            showParams: `--vm ${vm.id}`,
            tagParams: `--vm ${vm.id}`,
            deleteParams: `--vm ${vm.id}`,
            historyParams: `--vm ${vm.id}`,
            schemaRef: '#/components/schemas/netadp',
            skipFqdn: true,
        }, commonNicSkip))(t);

        await common.cleanup();
    } finally {
        await tests.remove('network', network);
    }
});

ava.serial('vm nic life cycle for public network', async t => {
    const network = await tests.run(`network create --name network-vm-test-${now}`);
    const common = await getCommon(t.title, {
        type: 'm2.tiny',
    });
    try {
        const vm = await tests.run(`vm create --no-start ${common.params.createParams} --network ${network.id}`);

        await tests.resourceLifeCycle('vm nic', Object.assign({
            stateCreated: 'Online',
            createParams: `--vm ${vm.id} --type public`,
            listParams: `--vm ${vm.id}`,
            showParams: `--vm ${vm.id}`,
            tagParams: `--vm ${vm.id}`,
            deleteParams: `--vm ${vm.id}`,
            historyParams: `--vm ${vm.id}`,
            schemaRef: '#/components/schemas/netadp',
        }, commonNicSkip))(t);

        await common.cleanup();
    } finally {
        await tests.remove('network', network);
    }
});

ava.serial('vm nic firewall life cycle', async t => {
    const common = await getCommon(t.title, {
        type: 'm2.tiny',
    });
    const firewall = await tests.run(`firewall create --name ${tests.getName(t.title)}`);
    const network = await tests.run(`network create --name ${tests.getName(t.title)}`);
    const vm = await tests.run(`vm create --no-start ${common.params.createParams}`);
    const nic_list = await tests.run(`vm nic list --vm ${vm.id}`);
    const nic = nic_list[0];
    await tests.run(`vm nic firewall add --vm ${vm.name} --nic ${nic.id} --firewall ${firewall.name} `);

    const nic_with_firewall = await tests.run(`vm nic show --vm ${vm.id} --nic ${nic.id}`);
    t.true(nic_with_firewall.firewall === firewall.id);
    await tests.run(`vm nic firewall remove --vm ${vm.name} --nic ${nic.id}`);
    await common.cleanup();
    await tests.remove('network', network);
    await tests.remove('firewall', firewall);
});

ava.serial('vm create passing private ip', async t => {
    const common = await getCommon(t.title);
    const network = await tests.run(`network create --name ${tests.getName(t.title)}`);
    const ip = await tests.run(`network ip create --network ${network.id}`);
    const vm = await tests.run(`vm create --no-start ${common.params.createParams} --ip ${ip._id}`);
    const nic_list = await tests.run(`vm nic list --vm ${vm.id}`);
    t.true(nic_list.some(nic => nic.ip.some(nic_ip => nic_ip.id === ip._id)));

    await common.cleanup();
    await tests.remove('network', network);
});

ava.serial('vm create passing pre-created disk', async t => {
    const disk = await tests.run(`disk create --name ${tests.getName(t.title)} --type ssd --size 10`);
    const vm = await tests.run(`vm create  --name ${tests.getName(t.title)} --no-start --type a1.nano --os-disk ${disk.id}`);
    const hdds = await tests.run(`vm disk list --vm ${vm.id}`);
    t.true(hdds.some(hdd => hdd.disk.id == disk.id));
    t.true(hdds.length == 1);
    await tests.remove('vm', vm);
    await tests.remove('disk', disk);
});

ava.serial('vm create without disk', async t => {
    const vm = await tests.run(`vm create --name ${tests.getName(t.title)} --no-start --type a1.nano --no-image`);
    const hdds = await tests.run(`vm disk list --vm ${vm.id}`);
    t.true(hdds.length == 0);
    await tests.remove('vm', vm);
});

ava.serial('vm create passing public ip', async t => {
    const common = await getCommon(t.title);
    const ip = await tests.run('ip create');
    const vm = await tests.run(`vm create --no-start ${common.params.createParams} --ip ${ip.id}`);
    const nic_list = await tests.run(`vm nic list --vm ${vm.id}`);
    t.true(nic_list.some(nic => nic.ip.some(nic_ip => nic_ip.id === ip._id)));

    await common.cleanup();
});

const subresourceLifeCycle = async (t, type, options) => {
    const actions = [
        { name: 'add', result: true },
        { name: 'delete', result: false, params: options.deleteParams || '' },
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

ava.serial('vm nic ip life cycle', async t => {
    const common = await getCommon(t.title, {
        type: 'm2.tiny',
    });
    const vm = await tests.run(`vm create ${common.params.createParams}`);
    const ip = await tests.run('ip create');
    const nic_list = await tests.run(`vm nic list --vm ${vm.id}`);

    await subresourceLifeCycle(t, 'vm nic ip', {
        commonParams: `--vm ${vm.id} --nic ${nic_list[0].id}`,
        actionParams: `--ip ${ip.name}`,
        deleteParams: '--yes',
        test_fn: x => x.address === ip.address,
    });

    await tests.remove('ip', ip);
    await common.cleanup();
});

ava.serial('vm nic ip replace', async t => {
    const common = await getCommon(t.title, {
        type: 'm2.tiny',
    });
    const vm = await tests.run(`vm create ${common.params.createParams}`);
    const ip = await tests.run('ip create');
    const new_ip = await tests.run('ip create');

    const nic_list = await tests.run(`vm nic list --vm ${vm.id}`);
    await tests.run(`vm nic ip add --vm ${vm.id} --nic ${nic_list[0].id} --ip ${ip.id}`);
    await tests.run(`vm nic ip replace --vm ${vm.id} --nic ${nic_list[0].id} --ip ${ip.id} --new-ip ${new_ip.id}`);
    const new_nic = await tests.run(`vm nic show --vm ${vm.id} --nic ${nic_list[0].id}`);
    t.true(new_nic.ip.some(x => x.id === new_ip.id));

    await common.cleanup();
    await tests.remove('ip', ip);
    await tests.remove('ip', new_ip);
});

ava.serial('vm nic ip persistent', async t => {
    const common = await getCommon(t.title, {
        type: 'm2.tiny',
    });
    const vm = await tests.run(`vm create ${common.params.createParams}`);

    const nic_list = await tests.run(`vm nic list --vm ${vm.id}`);
    const ip = nic_list[0].ip[0];

    await tests.run(`vm nic ip persistent --vm ${vm.id} --nic ${nic_list[0].id} --ip ${ip.id}`);

    const new_ip_list = await tests.run('ip list');
    t.true(new_ip_list.some(x => x.id === ip.id));

    await common.cleanup();
    await tests.remove('ip', ip);
});

ava.serial('vm dvd cycle', async t => {
    const common = await getCommon(t.title);
    const vm = await tests.run(`vm create ${common.params.createParams}`);
    const iso = await tests.run(`iso create --name iso-test-${now} --source-url ${tests.iso_url}`);

    await tests.run(`vm dvd insert --vm ${vm.id} --iso ${iso.id}`);

    const list = await tests.run(`vm dvd list --vm ${vm.id}`);
    t.true(list.some(dvd => dvd.iso.id === iso.id));

    await tests.run(`vm dvd eject --vm ${vm.id} --yes`);

    await tests.remove('iso', iso);
    await common.cleanup();
});

ava.serial('vm serialport log', async t => {
    const common = await getCommon(t.title);
    const vm = await tests.run(`vm create ${common.params.createParams}`);
    t.true(vm.created);

    await tests.run(`vm serialport log --vm ${vm.id}`);

    await common.cleanup();
});

function round_step(value, step = 0.5) {
    const inv = 1.0 / step;
    return Math.round(value * inv) / inv;
}

async function verify_vm_size_match(t, vm, password) {
    t.true(parseInt(await ssh.execVm(vm, { password }, 'nproc')) === vm.cpu,
        'The number of processors does not match the number declared');
    const content = await ssh.execVm(vm, { password }, 'cat /proc/meminfo');
    const memory_kb = content.match(/MemTotal:\s+([0-9]+)\s+/)[1];
    const memory_gb = round_step(parseInt(memory_kb) / 10 ** 6);
    t.true(memory_gb === vm.memory,
        `The memory size delivered (${memory_gb} GB) does not match
        the size declared (${vm.memory} GB)`
    );
}

ava.serial('vm service change', async t => {
    const common = await getCommon(t.title, { type: 'a1.nano' });
    const password = common.password;
    const vm = await tests.run(`vm create ${common.params.createParams}`);

    t.true(vm.cpu === 1, 'Unexpected number of CPUs of the created virtual machine.');
    t.true(vm.memory === 0.5, 'Unexpected memory size of the created virtual machine.');
    await verify_vm_size_match(t, vm, password);

    await tests.run(`vm stop --vm ${vm.id}`);
    await tests.run(`vm service change --vm ${vm.id} --new-type m2.medium`);
    const started_vm = await tests.run(`vm start --vm ${vm.id}`);

    t.true(started_vm.flavour === 'm2.medium', 'Flavor has not been updated');
    t.true(started_vm.cpu === 2, 'Unexpected number of CPUs of the updated virtual machine.');
    t.true(started_vm.memory === 4, 'Unexpected memory size of the updated virtual machine.');
    await verify_vm_size_match(t, started_vm, password);

    await common.cleanup();
});

ava.serial('vm ssh using ssh-key', async t => {
    const common = await getCommon(t.title);

    const { privateKey, publicKey } = await ssh.generateKey();
    const vm = await tests.run(`vm create ${common.params.createParams} --ssh '${publicKey}'`);

    const content = await ssh.execVm(vm, { privateKey }, 'uptime');
    t.true(content.includes('load average'));

    await common.cleanup();
});
