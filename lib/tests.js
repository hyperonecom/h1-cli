'use strict';

const crypto = require('crypto');
const shell_quote = require('shell-quote');
const os = require('os');
const path = require('path');
const fs = require('fs');

const cli = require('../bin/index.js');

const now = Date.now();

const iso_url = 'http://ftp.sh.cvut.cz/slax/Slax-9.x/slax-ipxe.iso';

const RECIPIENT = {
    project: '5b28f7c9ddd5b3c5e9ec14c4',
    user: 'h1-testing@jawnosc.tk',
};

const delay = timeout => new Promise(resolve => {
    console.log(`Delay ${timeout/1000} seconds`);
    return setTimeout(resolve, timeout);
});

const getOption = (type) => type.split(' ').slice(-1).pop();


const run = async (cmd) => {
    if (typeof cmd === 'string') {
        cmd = {cmd: cmd, history: []};
    }

    const old_argv = process.argv;

    process.argv = ['node', process.env.SCOPE_NAME, ...shell_quote.parse(cmd.cmd), ...['-o', 'json']];

    console.log(new Date().toISOString(), shell_quote.quote(process.argv));

    try {
        const result = await cli.run();
        process.argv = old_argv;
        return result;
    } catch (err) {
        console.log(err);
        throw {cmd: cmd, err: err, history: cmd.history};
    }
};

const show = async (type, resource, options = {}, history = []) => {
    let resource_id = resource;
    if (typeof resource_id === 'object') {
        resource_id = resource_id._id;
    }
    return run({
        cmd: `${type} show --${getOption(type)} ${resource_id} ${options.showParams || ''}`,
        history: history,
    });
};

const remove = async (type, resource, options = {}, history = []) => {
    let resource_id = resource;
    if (typeof resource_id === 'object') {
        resource_id = resource_id._id;
    }
    return run({
        cmd: `${type} delete --${getOption(type)} ${resource_id} ${options.deleteParams || ''} --yes`,
        history: history,
    });
};

const wrap = (type, options = {}, func) => async t => {
    // await delay(wait++ * 2000);
    if (typeof options === 'string') {
        options = {createParams: options};
    }
    const resource = await run(`${type} ${options.createCommand || 'create'} ${options.createParams}`);

    try {
        if (!options.skipCreated) {
            t.true(resource.created);
        }
        if (!options.skipHistory) {
            const history = await run(`${type} history ${options.historyParams || ''} --${getOption(type)} ${resource.name}`);
            if (!options.skipHistoryCreated) {
                t.true(history.some(x => x.name === 'create' && x.state === 'finished'));
            }
        }
        await func(t, resource);
    } finally {
        await remove(type, resource, options);
    }
};

const resourceLifeCycle = (type, options = {}) => wrap(type, options, async (t, resource) => {
    const history = [];
    const list = await run({
        cmd: `${type} list ${options.listParams || ''}`,
        history: history,
    });
    t.true(list.some(d => d._id === resource._id));
    await show(type, resource, options, history);
    await show(type, resource.name, options, history);
});

const resourceAccessCycle = (type, options = {}) => wrap(type, options, async (t, resource) => {
    const history = [];

    const actions = [
        {name: 'grant', result: true},
        {name: 'revoke', result: false},
    ];

    const commonParams = `--${getOption(type)} ${resource._id}`;

    for (const action of actions) {
        await run({
            cmd: `${type} access ${action.name} ${commonParams} --project ${RECIPIENT.project}`,
            history: history,
        });

        const list = await run({
            cmd: `${type} access list ${commonParams}`,
            history: history,
        });

        t.true(list.includes(RECIPIENT.project) === action.result);
    }
});


const resourceRename = (type, options = {}) => wrap(type, options, async (t, resource) => {
    const history = [];
    const new_name = `${resource.name}-renamed`;

    await run({
        cmd: `${type} rename --${getOption(type)} ${resource._id} --new-name ${new_name}`,
        history: history,
    });

    const renamed_resource = await run({
        cmd: `${type} show --${getOption(type)} ${new_name}`,
        history: history,
    });

    t.true(resource._id === renamed_resource._id);
    t.true(renamed_resource.name === new_name);
});


const getToken = () => new Promise((resolve, reject) => crypto.randomBytes(48, function (err, buffer) {
    if (err) {
        reject(err);
    }
    resolve(buffer.toString('hex'));
}));

const getRandomFile = (content = 'some-content') => {
    const tmp_filename = path.join(os.tmpdir(), `test-h1-cli-${now}-${Math.random()}`);
    fs.writeFileSync(tmp_filename, content);
    return tmp_filename;
};

const credentialsLifeCycle = (type, options = {}) => async t => {
    const ssh_file = getRandomFile();

    try {
        const createParams = options.createParams || '';
        const listParams = options.listParams || '';
        const name = `test-${now}`;
        await run(`${type} add --name ${name} ${createParams} --sshkey-file ${ssh_file}`);

        const credentials_list = await run(`${type} list ${listParams}`);

        const credentials = credentials_list.find(d => d.name === name);
        t.true(!!credentials);
        await remove(type, credentials, options);
    } finally {
        fs.unlinkSync(ssh_file);
    }
};

const resourceResizeCycle = (type, options) => async t => {
    const initialSize = options.initialSize || 1;
    const targetSize = options.targetSize || 10;
    const createParams = options.createParams;

    const resource = await run(`${type} create ${createParams} --size ${initialSize}`);
    t.true(resource.size === initialSize);

    await run(`${type} resize --${type} ${resource._id} --size ${targetSize}`);

    const resized_resource = await show(type, resource);
    t.true(resized_resource.size === targetSize);

    await remove(type, resource);
};


module.exports = {
    resourceLifeCycle, credentialsLifeCycle, resourceResizeCycle, resourceRename, show, remove, run, delay,
    getToken, getRandomFile, resourceAccessCycle, RECIPIENT,
    iso_url,
};
