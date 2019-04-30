'use strict';

const ava = require('ava');
const fs = require('fs');

require('../../scope/h1');
const tests = require('../../lib/tests');
const ssh = require('../../lib/ssh');

const now = Date.now();

const getCommon = async (test_name, options = {}) => {
    const type = options.type || 'a1.nano';
    const vm_name = tests.getName(`vm-test-${test_name}-${now}`);
    const token = await tests.getToken();
    const disk_name = `disk-${vm_name}`;
    const params = {
        createParams: `--type ${type} --password ${token} --name ${vm_name} --image debian --os-disk ${disk_name},ssd,10`,
        stateCreated: 'Running',
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
ava.todo('vm passwordreset');

['a1.nano', 'm2.tiny', 'm2.medium'].forEach(flavour => {
    ava.serial(`vm life cycle ${flavour}`, async t => {
        const common = await getCommon(t.title);
        await tests.resourceLifeCycle('vm', common.params)(t);
        await tests.remove('disk', common.disk_name);
    });
});

ava.serial('vm rename', async t => {
    const common = await getCommon(t.title);
    await tests.resourceRename('vm', common.params)(t);
    await tests.remove('disk', common.disk_name);
});

ava.serial('vm stop & start & turnoff', async t => {
    const common = await getCommon(t.title);
    const vm = await tests.run(`vm create ${common.params.createParams}`);
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

ava.serial('vm userdata', async t => {
    const my_metadata = 'my-config';
    const tmp_file = tests.getRandomFile(my_metadata);

    const common = await getCommon(t.title);
    const vm = await tests.run(`vm create ${common.params.createParams}`);

    await tests.run(`vm userdata --vm ${vm._id} --userdata-file '${tmp_file}'`);

    const userdata_vm = await tests.run(`vm show --vm ${vm._id}`);
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

    const content = await sshVm(vm, {password: common.password}, `cat ${remote_tmp_path}`);
    t.true(content === token);
    await common.cleanup();
});

ava.serial('vm disk attach & detach', async t => {
    const common = await getCommon(t.title);
    const vm = await tests.run(`vm create ${common.params.createParams}`);
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

ava.serial('vm nic life cycle', async t => {
    const common = await getCommon(t.title, {
        type: 'm2.tiny',
    });
    const vm = await tests.run(`vm create --no-start ${common.params.createParams}`);
    const network = await tests.run(`network create --name network-vm-test-${now}`);

    await tests.resourceLifeCycle('vm nic', {
        stateCreated: 'Online',
        createParams: `--vm ${vm._id} --type private --network ${network._id}`,
        listParams: `--vm ${vm._id}`,
        showParams: `--vm ${vm._id}`,
        tagParams: `--vm ${vm._id}`,
        deleteParams: `--vm ${vm._id}`,
        historyParams: `--vm ${vm._id}`,
        skipService: true,
        schemaRef: '#/components/schemas/netadp',
    })(t);

    await common.cleanup();
    await tests.remove('network', network);
});

const subresourceLifeCycle = async (t, type, options) => {
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

ava.serial('vm nic ip life cycle', async t => {
    const common = await getCommon(t.title, {
        type: 'm2.tiny',
    });
    const vm = await tests.run(`vm create ${common.params.createParams}`);
    const ip = await tests.run('ip create');
    const nic_list = await tests.run(`vm nic list --vm ${vm._id}`);

    await subresourceLifeCycle(t, 'vm nic ip', {
        commonParams: `--vm ${vm._id} --nic ${nic_list[0]._id}`,
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

    const nic_list = await tests.run(`vm nic list --vm ${vm._id}`);
    await tests.run(`vm nic ip add --vm ${vm._id} --nic ${nic_list[0]._id} --ip ${ip._id}`);
    await tests.run(`vm nic ip replace --vm ${vm._id} --nic ${nic_list[0]._id} --ip ${ip._id} --new-ip ${new_ip._id}`);
    const new_nic = await tests.run(`vm nic show --vm ${vm._id} --nic ${nic_list[0]._id}`);
    t.true(new_nic.ip.some(x => x._id === new_ip._id));

    await common.cleanup();
    await tests.remove('ip', ip);
    await tests.remove('ip', new_ip);
});

ava.serial('vm nic ip persistent', async t => {
    const common = await getCommon(t.title, {
        type: 'm2.tiny',
    });
    const vm = await tests.run(`vm create ${common.params.createParams}`);

    const nic_list = await tests.run(`vm nic list --vm ${vm._id}`);
    const ip = nic_list[0].ip[0];

    const ip_list = await tests.run('ip list');
    t.true(!ip_list.some(x => x._id === ip._id));

    await tests.run(`vm nic ip persistent --vm ${vm._id} --nic ${nic_list[0]._id} --ip ${ip._id}`);

    const new_ip_list = await tests.run('ip list');
    t.true(new_ip_list.some(x => x._id === ip._id));

    await common.cleanup();
    await tests.remove('ip', ip);
});

ava.serial('vm dvd cycle', async t => {
    const common = await getCommon(t.title);
    const vm = await tests.run(`vm create ${common.params.createParams}`);
    const iso = await tests.run(`iso create --name iso-test-${now} --source-url ${tests.iso_url}`);

    await tests.run(`vm dvd insert --vm ${vm._id} --iso ${iso._id}`);

    const list = await tests.run(`vm dvd list --vm ${vm._id}`);
    t.true(list.some(dvd => dvd.iso._id === iso._id));

    await tests.run(`vm dvd eject --vm ${vm._id} --yes`);

    await tests.remove('iso', iso);
    await common.cleanup();
});

ava.serial('vm serialport log', async t => {
    const common = await getCommon(t.title);
    const vm = await tests.run(`vm create ${common.params.createParams}`);
    t.true(vm.created);

    await tests.run(`vm serialport log --vm ${vm._id}`);

    await common.cleanup();
});

const sshVm = (vm, auth, command) => ssh.execute(command, Object.assign({
    host: vm.fqdn,
    username: 'guru',
    readyTimeout: 5 * 1000,
}, auth));

function round_step(value, step = 0.5) {
    const inv = 1.0 / step;
    return Math.round(value * inv) / inv;
}

async function verify_vm_size_match(t, vm, password) {
    t.true(parseInt(await sshVm(vm, {password}, 'nproc')) === vm.cpu,
        'The number of processors does not match the number declared');
    const content = await sshVm(vm, {password}, 'cat /proc/meminfo');
    const memory_kb = content.match(/MemTotal:\s+([0-9]+)\s+/)[1];
    const memory_gb = round_step(parseInt(memory_kb) / 10 ** 6);
    t.true(memory_gb === vm.memory,
        `The memory size delivered (${memory_gb} GB) does not match
        the size declared (${vm.memory} GB)`
    );
}

ava.serial('vm service change', async t => {
    const common = await getCommon(t.title, {type: 'a1.nano'});
    const password = common.password;
    const vm = await tests.run(`vm create ${common.params.createParams}`);

    t.true(vm.cpu === 1, 'Unexpected number of CPUs of the created virtual machine.');
    t.true(vm.memory === 0.5, 'Unexpected memory size of the created virtual machine.');
    await verify_vm_size_match(t, vm, password);

    await tests.run(`vm stop --vm ${vm._id}`);
    await tests.run(`vm service change --vm ${vm._id} --new-type m2.medium`);
    const started_vm = await tests.run(`vm start --vm ${vm._id}`);

    t.true(started_vm.flavour === 'm2.medium', 'Flavor has not been updated');
    t.true(started_vm.cpu === 2, 'Unexpected number of CPUs of the updated virtual machine.');
    t.true(started_vm.memory === 4, 'Unexpected memory size of the updated virtual machine.');
    await verify_vm_size_match(t, started_vm, password);

    await common.cleanup();
});

['project', 'user'].forEach(type => {
    ava.serial(`vm ssh using ${type} ssh-key`, async t => {
        const common = await getCommon(t.title);

        const sshKeyPair = await ssh.generateKey();
        const sshFilename = tests.getRandomFile(sshKeyPair.publicKey);

        const ssh_name = `vm-ssh-key-${now}-${type}-key`;

        const credentials = await tests.run(`${type} credentials add --name ${ssh_name} --sshkey-file '${sshFilename}'`);

        await tests.run(`vm create ${common.params.createParams} --ssh ${ssh_name}`);

        const content = await sshVm(common.vm, {privateKey: sshKeyPair.privateKey}, 'uptime');
        t.true(content.includes('load average'));
        fs.unlinkSync(sshFilename);

        await tests.remove(`${type} credentials`, credentials);
        await common.cleanup();
    });
});
