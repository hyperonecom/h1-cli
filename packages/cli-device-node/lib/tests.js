const shlex = require('shlex');
const child_process = require('child_process');
const path = require('path');
const fs = require('fs').promises;
const os = require('os');
const util = require('util');
const crypto = require('crypto');
const randomBytes = util.promisify(crypto.randomBytes);

const randomToken = (len = 16) => randomBytes(len).then(x => x.toString('hex'));

const run = (cmd, options = {}) => new Promise((resolve, reject) => {
    const program = child_process.spawn('node', [
        path.join(__dirname, '../dist/h1.js'),
        ...shlex.split(cmd).slice(1),
    ], options);
    const chunks = [];

    program.stdout.on('data', (chunk) => chunks.push(chunk));
    program.stderr.on('data', (chunk) => chunks.push(chunk));

    program.on('close', (code, signal) => {
        const output = Buffer.concat(chunks).toString('utf-8');
        if (code !== 0) {
            const err = new Error(`'${cmd}'exited with code ${code} and signal ${signal}`);
            err.cmd =  cmd;
            err.signal = signal;
            err.code = code;
            err.output = output;
            return reject(err);
        }
        return resolve(output);
    });
});

const runJson = async (cmd, options = {}) => {
    let output = await run(`${cmd} -o json`, options);
    output = output.trim();
    const document = output.slice(Math.min(output.lastIndexOf('\n{\n') + 2, 0));
    try {
        return JSON.parse(document);
    } catch (err) {
        err.output = output;
        err.document = document;
        throw err;
    }
};

const withTemp = fn => async (...args) => {
    const tempDir = await fs.mkdtemp(path.join(os.tmpdir(), 'cli-temp-'));
    try {
        return await fn(...args, tempDir);
    } finally {
        await fs.rmdir(tempDir, { recursive: true });
    }
};

const withVariable = (options=[], fn) => async (...args) => {
    const map = await runJson('h1 config settings get --key test');
    const new_args = [];
    for (const name of options) {
        if (!map[name]) throw new Error(`Missing value for variable '${name}'. Use 'h1 config settings --key test.${name} --value {value}' to  set`);
        new_args.push(map[name]);
    }
    return fn(...args, ...new_args);
};

const getName = (...names) => [...names, Date.now().toString()]
    .join('-')
    .replace(/[^a-zA-Z0-9]/g, '-');

module.exports = {
    run,
    runJson,
    withTemp,
    randomToken,
    withVariable,
    getName,
};
