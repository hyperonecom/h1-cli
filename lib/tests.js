'use strict';
const crypto = require('./crypto');
const { spawn } = require('child_process');
const shell_quote = require('shell-quote');
const os = require('os');
const path = require('path');
const fs = require('fs');
const superagent = require('superagent');
const Ajv = require('ajv');
const dns = require('dns');
const cli = require('../bin/index.js');
const config = require('./config');
const ssh = require('./ssh');

const dnsResolve = (name, type) => new Promise((resolve, reject) => {
    console.log(`Lookup DNS ${type} ${name}`);
    return dns.resolve(name, type, (err, records) => {
        if (err) return reject(err);
        return resolve([records].flat(2));
    });
});

const now = Date.now();

const test_zone = 'cli.h1.jawnosc.tk';

const iso_url = 'http://www.tinycorelinux.net/9.x/x86/release/Core-current.iso';

// The disk file can not be downloaded without gzip compression.
const disk_url = 'http://cdn.files.jawne.info.pl/private_html/2018_07_chavohngeimeif0hei6gaew1chai6thahqua3ui7FaeTh3jeo4/test_gzipped.vhdx';

const RECIPIENT = {
    project: '5b28f7c9ddd5b3c5e9ec14c4',
    user: 'h1-testing@jawnosc.tk',
};

const access_test_case = {
    single_project: RECIPIENT.project,
    publish: '*',
};

const openApiAjv = new Ajv({
    allErrors: true,
    removeAdditional: 'failing',
    // OAS uses several known formats to define in fine detail the
    // data type being used. However, to support documentation needs,
    // the format property is an open string-valued property, and
    // can have any value.
    // unknownFormats: 'ignore',
    unknownFormats: ['ObjectId'],
    extendRefs: 'fail',
    loadSchema: (uri) => superagent.get(uri).then(resp => resp.body),
});

const openApiValidator = async (schemaRef, data) => {
    console.log(new Date().toISOString(), `Validate match against ${schemaRef}`);
    const schema = { $ref: `https://${process.env.API_HOSTNAME}/openapi.json${schemaRef}` };
    const validate = await openApiAjv.compileAsync(schema);
    const valid = validate(data);
    if (!valid) throw {
        message: `OpenAPI Schema does not match to '${schemaRef}'.`,
        errors: validate.errors,
        data,
    };
};

const delay = timeout => new Promise(resolve => {
    console.log(`Delay ${timeout / 1000} seconds`);
    return setTimeout(resolve, timeout);
});

const getName = (...names) => [...names, Date.now().toString()]
    .join('-')
    .replace(/[^a-zA-Z0-9]/g, '-');

const getOption = (type) => type.split(' ').slice(-1).pop();

const run = async (cmd) => {
    if (typeof cmd === 'string') {
        cmd = { cmd: cmd, history: [], env: {} };
    }

    const old_argv = process.argv;
    const old_env = process.env;

    process.argv = ['node', process.env.SCOPE_NAME, ...shell_quote.parse(cmd.cmd), ...['-o', 'js']];
    if (cmd.env) {
        process.env = Object.assign({}, old_env, cmd.env);
    }

    console.log(new Date().toISOString(), shell_quote.quote(process.argv));

    try {
        return await cli.run();
    } catch (err) {
        const e = Error('Unable to execute command');
        e.cmd = cmd;
        e.err = err;
        return Promise.reject(e);
    } finally {
        process.argv = old_argv;
        process.env = old_env;
    }
};

const show = async (type, resource, options = {}, history = []) => {
    let resource_id = resource;
    if (typeof resource_id === 'object') {
        resource_id = resource_id.id;
    }
    return run({
        cmd: `${type} show --${getOption(type)} '${resource_id}' ${options.showParams || ''}`,
        history: history,
    });
};

const remove = async (type, resource, options = {}, history = []) => {
    let resource_id = resource;
    if (typeof resource_id === 'object') {
        resource_id = resource_id.id;
    }

    return run({
        cmd: `${type} delete --${getOption(type)} ${resource_id} ${options.deleteParams || ''} --yes`,
        history: history,
    });
};

const wrap = (type, options = {}, func) => async t => {
    if (typeof options === 'string') {
        options = { createParams: options };
    }
    options.createParams = options.skipTag ? options.createParams : `${options.createParams} --tag ON_CREATE=${now}`;
    let resource;
    if (options.resource) {
        resource = options.resource;
    } else {
        resource = await run(`${type} ${options.createCommand || 'create'} ${options.createParams}`);
    }
    try {
        await func(t, resource);
    } finally {
        if (!options.skipDelete) {
            await remove(type, resource, options);
        }
    }
};

const subresourceLifeCycle = (options = {}) => async t => {
    const categoryName = `${options.resourceType} ${options.type}`;
    const commonParams = `${options.commonParams || ''} --${getOption(options.resourceType)} '${options.resourceId}'`;
    const sub_list = await run(`${categoryName} list ${options.listParams || ''} ${commonParams}`);
    t.true(Array.isArray(sub_list));
    t.true(sub_list.length > 0, `The ${options.resourceType} should have at least one ${options.type}`);
    const last_resource = sub_list[sub_list.length - 1];
    const subresource = await run(`${categoryName} show ${options.showParams || ''} ${commonParams} --${getOption(options.type)} ${last_resource.id}`);
    t.true(last_resource.id === subresource.id);

    if (!options.skipRename) {
        const new_name = `renamed-${subresource.name}`;
        await run(`${categoryName} rename ${commonParams} --${getOption(options.type)} ${subresource.id} --new-name '${new_name}' ${options.renameParams || ''}`);
        const renamed = await run(`${categoryName} show ${options.showParams || ''} --${getOption(options.type)} ${subresource.id}`);
        t.true(renamed.name === new_name);
    }
};

const requireSlaveProject = (fn) => async (t, ...args) => {
    t.true(!!process.env.HYPERONE_PROJECT_SLAVE, 'You must specify the project slave ID via the HYPERONE_PROJECT_SLAVE environment variable');
    const projects = {
        slave: process.env.HYPERONE_PROJECT_SLAVE,
        master: config.get_active_project(),
    };
    t.true(projects.slave !== projects.master, 'You cannot use the same project as master and slave project.');
    try {
        await fn(t, projects, ...args);
    } finally {
        await run(`project select --project '${projects.master}'`); // Just in case, select the project again.
    }
};

const resourceLifeCycle = (type, options = {}) => wrap(type, options, async (t, resource) => {
    const history = [];

    if (typeof options === 'string') {
        options = { createParams: options };
    }

    options.schemaRef = options.schemaRef || `#/components/schemas/${type}`;
    if (!options.skipOpenApi) {
        await openApiValidator(options.schemaRef, resource);
    }

    const list = await run({
        cmd: `${type} list ${options.listParams || ''}`,
        history: history,
    });

    if (!options.skipCreated) {
        t.true(resource.created);
    }

    if (!options.skipHistory) {
        const history = await run(`${type} history ${options.historyParams || ''} --${getOption(type)} '${resource.name}'`);
        if (!options.skipHistoryCreated) {
            t.true(history.some(x => x.name === 'create' && x.state === 'finished'));
        }
    }

    t.true(list.some(d => d.id === resource.id));

    if (options.delayStateTest) {
        await delay(options.delayStateTest);
    }

    if (!options.skipRename) {
        const new_name = `${resource.name}-renamed`;
        const renamed_resource = await run(`${type} rename --${getOption(type)} ${resource.id} --new-name '${new_name}'`);
        t.true(resource.id === renamed_resource.id);
        t.true(renamed_resource.name === new_name);
        await run(`${type} rename --${getOption(type)} ${resource.id} --new-name '${resource.name}'`);
    }

    const resource_by_id = await show(type, resource, options, history);

    if (!options.skipFqdn) {
        t.true(!!resource.fqdn);
        t.true(resource_by_id.fqdn === resource.fqdn);
        console.log(new Date().toISOString(), 'Validate FQDN resolving');
        const records = await dnsResolve(resource.fqdn, 'A');
        t.true(records.length > 0);
    }

    if (!options.skipOpenApi) {
        await openApiValidator(options.schemaRef, resource_by_id);
    }

    const resource_state = resource_by_id.state;
    const expected_state = options.stateCreated;

    // Platform test start
    if (!options.skipService) {
        t.true(Array.isArray(resource_by_id.services), 'The resource should have array of \'services\'.');
        t.true(resource_by_id.services.length > 0, 'The resource should have at least one service');

        await subresourceLifeCycle(t, {
            resourceId: resource.name,
            type: 'service',
            listParams: options.serviceListParams,
            showParams: options.serviceShowParams,
            skipRename: true,
        });
    }
    // Platform test end

    if (!options.skipTransfer) {
        await requireSlaveProject(async (t, projects) => {
            await run(`${type} transfer --${getOption(type)} ${resource.id} --new-project '${projects.slave}'`);
            await t.throwsAsync(() => run(`${type} show --${getOption(type)} ${resource.id}`));
            await run(`project select --project '${projects.slave}'`);
            const transfered = await run(`${type} show --${getOption(type)} ${resource.id}`);
            await run(`${type} transfer --${getOption(type)} ${resource.id} --new-project '${projects.master}'`);
            await run(`project select --project '${projects.master}'`);

            // Platform test start
            if (!options.skipService) {
                t.true(Array.isArray(transfered.services), 'The resource should have array of \'services\'.');
                t.true(transfered.services.length === resource.services.length, 'The transfers should not change number of services.');
            }
            // Platform test end
        });
    }
    if (!options.skipTag) {
        // Add of tag
        await run(`${type} tag add ${options.tagParams || ''} --${getOption(type)} '${resource.name}' --tag protected=${now}`);
        const tag_obj = await run(`${type} tag list ${options.tagParams || ''} --${getOption(type)} '${resource.name}'`);
        t.true(!!tag_obj.protected, 'Tag via "tag add" is not applied');
        if (!options.skipCreate) {
            t.true(!!tag_obj.ON_CREATE, 'Tag during creation is not applied.');
        }

        // Protection of "protected" tag
        if (!options.skipDelete) {
            await t.throwsAsync(() => remove(type, resource, options));
        }

        // Delete of tag
        await run(`${type} tag delete --${getOption(type)} '${resource.name}' ${options.tagParams || ''} --tag protected`);
        const tag_obj_new = await run(`${type} tag list ${options.tagParams || ''} --${getOption(type)} '${resource.name}'`);
        t.true(!tag_obj_new.protected, 'Tag via "tag delete" is not removed.');
        if (!options.skipCreate) {
            t.true(!!tag_obj.ON_CREATE, 'Missing tag not modified, so invalid tags are removed when removing tags.');
        }
    }
    if (expected_state) {
        t.true(resource_state === expected_state,
            `The expected state of the resource after creation is '${expected_state}'. The resource state is '${resource_state}'.`);
    }
    await show(type, resource.name, options, history);
});

const resourceAccessCycle = (type, project, options = {}) => wrap(type, options, async (t, resource) => {
    const history = [];

    const actions = [
        { name: 'grant', result: true },
        { name: 'revoke', result: false },
    ];

    const commonParams = `--${getOption(type)} ${resource.id}`;
    for (const action of actions) {
        await run({
            cmd: `${type} access ${action.name} ${commonParams} --project '${project}'`,
            history: history,
        });

        const list = await run({
            cmd: `${type} access list ${commonParams}`,
            history: history,
        });

        t.true(list.includes(project) === action.result);
    }
});

const randomFileName = () => path.join(os.tmpdir(), `test-h1-cli-${now}-${Math.random()}`);

const getRandomFile = (content = 'some-content') => {
    const tmp_filename = randomFileName();
    fs.writeFileSync(tmp_filename, content);
    return tmp_filename;
};

const downloadFile = url => new Promise((resolve, reject) => {
    const filename = randomFileName();
    const stream = fs.createWriteStream(filename);
    stream.on('finish', () => resolve(filename));
    stream.on('error', reject);
    superagent.get(url).pipe(stream);
});

const credentialsLifeCycle = (type, options = {}) => async t => {
    const sshKeyPair = await ssh.generateKey();
    const sshFilename = getRandomFile(sshKeyPair.publicKey);

    try {
        const createParams = options.createParams || '';
        const listParams = options.listParams || '';
        const showParams = options.showParams || '';
        const renameParams = options.renameParams || '';

        const name = `test-${now}`;
        await run(`${type} add --name ${name} ${createParams} --sshkey-file '${sshFilename}'`);

        const credentials_list = await run(`${type} list ${listParams}`);
        t.true(credentials_list.some(d => d.name === name));

        const credentials = await run(`${type} show ${showParams} --${getOption(type)} ${name}`);

        await openApiValidator('#/components/schemas/credential', credentials);

        await run(`${type} rename --${getOption(type)} ${name} --new-name renamed-${name} ${renameParams}`);
        await run(`${type} show ${showParams} --${getOption(type)} ${credentials.id}`);

        await remove(type, credentials, options);
    } finally {
        fs.unlinkSync(sshFilename);
    }
};

const passwordLifeCycle = async (t, type, resource) => {
    const name = `${type}-password-life-cycle-${now}`;
    const new_name = `renamed-${name}`;

    await run(`${type} credential list --${type} ${resource.name}`);
    const secret = await crypto.randomPassword();
    await run(`${type} credential password add --name ${name} --password ${secret} --${type} ${resource.name}`);
    const list = await run(`${type} credential password list --${getOption(type)} ${resource.name}`);
    t.true(list.some(p => p.name === name));

    const password = await run(`${type} credential password show --${getOption(type)} ${resource.name} --password ${name}`);

    await openApiValidator('#/components/schemas/credential', password);

    await run(`${type} credential password rename --${getOption(type)} ${resource.name} --password ${name} --new-name ${new_name}`);
    const renamed_password = await run(`${type} credential password show --${getOption(type)} ${resource.name} --password ${password.id}`);
    t.true(renamed_password.name === new_name);

    await remove(`${type} credential password`, password, {
        deleteParams: `--${getOption(type)} ${resource.id}`,
    });
};

const resourceResizeCycle = (type, options) => async t => {
    const initialSize = options.initialSize || 1;
    const targetSize = options.targetSize || 2;
    const createParams = options.createParams;

    const resource = await run(`${type} create ${createParams} --size ${initialSize}`);
    t.true(resource.size === initialSize);

    await run(`${type} resize --${type} ${resource.id} --size ${targetSize}`);

    const resized_resource = await show(type, resource);
    t.true(resized_resource.size === targetSize);

    await remove(type, resource);
};

const accessRuleLifeCycle = async (t, type, options) => {
    if (typeof options !== 'object') {
        options = {commonParams: options};
    }
    const name = `rule-${now}`;
    const resource = await run(`${type} add ${options.commonParams || ''} --name ${name} --type geo --value PL`);

    const tester = x => x.id === resource.id;
    const list = await run(`${type} list ${options.commonParams || ''}`);
    t.true(list.some(tester));

    const resource_show = await run(`${type} show ${options.commonParams || ''} --rule ${resource.id}`);

    await openApiValidator('#/components/schemas/credential.password', resource_show);

    await run(`${type} delete ${options.commonParams || ''} --yes --rule ${resource.id}`);
    const updated_list = await run(`${type} list ${options.commonParams || ''}`);
    t.true(!updated_list.some(tester));
};

const resourceAccessOfUser = (type, accessParams) => async t => {
    for (const role of ['user', 'owner', 'billing']) {
        const actions = [
            { name: 'grant', result: true, params: `--role ${role}` },
            { name: 'revoke', result: false },
        ];

        for (const action of actions) {
            const access = await run(`${type} access ${action.name} --email ${RECIPIENT.user} ${accessParams} ${action.params || ''}`);
            await openApiValidator('#/components/schemas/accessrightsUserRole', access);

            const list = await run(`${type} access list ${accessParams}`);
            t.true(list.some(d => d.role === role && d.id === RECIPIENT.user) === action.result);
        }
    }
};

const envOutput = async (t, content) => {
    const variables = Object.assign(...[...
    content.matchAll(/export (.+?)='*(.+?)'*$/gm),
    ].map(x => ({ [x[1]]: x[2] })));
    t.true(variables.HYPERONE_PROJECT === config.get_active_project());
    await run({
        cmd: 'disk list',
        env: variables,
    });

    const broken_variables = Object.keys(variables).reduce((acc, key) => {
        acc[key] = 'INVALID';
        return acc;
    }, {});

    await t.throwsAsync(() => run({
        cmd: 'disk list',
        env: broken_variables,
    }));
};

const logStreamProcess = async (t, type, resource, trigger) => {
    const output_file = randomFileName();
    const p = run(`${type} log --${getOption(type)} ${resource.id} --head 10 --log-file ${output_file}`)
        .then(p => p); // to start promise
    await delay(2000); // allows wss connection to start
    const ids = [];
    for (let i = 0; i <= 10; i++) {
        const id_request = await crypto.randomPassword();
        await trigger(id_request);
        ids.push(id_request);
    }
    await p;
    const log_content = fs.readFileSync(output_file, { encoding: 'utf-8' });
    ids.forEach(id => t.true(log_content.includes(id)));
};

const get = (url) => {
    console.log(`GET -> ${url}`);
    return superagent.get(url);
};

const runProcess = (cmd, opts = {}) => new Promise((resolve, reject) => {
    const argv = shell_quote.parse(cmd);
    console.log(new Date(), 'local:', cmd);
    const proc = spawn(argv[0], argv.slice(1), {
        env: Object.assign({}, process.env, opts.env),
        stdio: [null, 'pipe', 'pipe'],
    });

    const output = [];

    proc.on('close', (code) => {
        const content = Buffer.concat(output).toString('utf-8');
        if (code !== 0) {
            const error = new Error(`Process exited with code ${code}`);
            error.code = code;
            error.output = content;
            return reject(error);
        }
        return resolve(content);
    });
    proc.stdout.on('data', (data) => {
        process.stdout.write(`${cmd}:STDOUT:${data}`);
        output.push(data);
    });
    proc.stderr.on('data', (data) => {
        process.stdout.write(`${cmd}:STDERR:${data}`);
        output.push(data);
    });
});

const DELAY = {
    dns_propagate: 5 * 1000,
    website_start: 5 * 1000,
    reservation_bill: 2 * 60 * 1000,
};

module.exports = {
    // life cycles
    resourceLifeCycle,
    credentialsLifeCycle,
    resourceResizeCycle,
    subresourceLifeCycle,
    accessRuleLifeCycle,
    resourceAccessCycle,
    resourceAccessOfUser,
    passwordLifeCycle,
    // actions
    show,
    remove,
    run,
    delay,
    // tests for environment
    requireSlaveProject,
    // requirements
    getToken: crypto.randomPassword, // back-ward compatibility
    getRandomFile,
    runProcess,
    randomFileName,
    downloadFile,
    getName,
    envOutput,
    dnsResolve,
    // constant
    RECIPIENT,
    DELAY,
    iso_url,
    disk_url,
    test_zone,
    access_test_case,
    logStreamProcess,
    get,
};
