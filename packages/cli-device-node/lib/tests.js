const shlex = require('shlex');
const child_process = require('child_process');
const path = require('path');
const fs = require('fs').promises;
const { createWriteStream } = require('fs');
const os = require('os');
const util = require('util');
const crypto = require('crypto');
const randomBytes = util.promisify(crypto.randomBytes);
const pty = require('node-pty');
const fetch = require('node-fetch');

const randomToken = (len = 16) => randomBytes(len).then(x => x.toString('hex'));

const run = (cmd, options = {}) => new Promise((resolve, reject) => {
    if (process.argv.includes('--serial')) {
        // eslint-disable-next-line no-console
        console.log('executed: ', cmd);
    }
    const program = child_process.spawn(process.argv[0], [
        path.join(__dirname, '../dist/h1.js'),
        ...shlex.split(cmd).slice(1),
    ], options);
    const chunks = [];

    program.stdout.on('data', (chunk) => chunks.push(chunk));
    program.stderr.on('data', (chunk) => chunks.push(chunk));

    program.on('error', reject);
    program.on('close', (code, signal) => {
        const output = Buffer.concat(chunks).toString('utf-8');
        if (code !== 0) {
            const err = new Error(`'${cmd}'exited with code ${code} and signal ${signal}`);
            err.cmd = cmd;
            err.signal = signal;
            err.code = code;
            err.output = output;
            return reject(err);
        }
        return resolve(output);
    });
});

const runJson = async (cmd, options = {}) => {
    let output = await run(`${cmd} -o json --query ''`, options);
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

const runPty = async (cmd, inputs, options = {}) => new Promise((resolve, reject) => {
    const ptyProcess = pty.spawn(process.argv[0], [
        path.join(__dirname, '../dist/h1.js'),
        ...shlex.split(cmd).slice(1),
    ], options);
    const chunks = [];

    let written = false;
    let index = 0;

    const startWrite = () => setTimeout(() => {
        if (!ptyProcess._writable) {
            return;
        }
        if (index >= inputs.length) {
            return;
        }
        ptyProcess.write(inputs[index]);
        index += 1;
        startWrite();
    }, 100);

    ptyProcess.onData((chunk) => {
        chunks.push(Buffer.from(chunk));
        if (written) {
            return;
        }
        written = true;
        startWrite();
    });

    ptyProcess.onExit(({ exitCode: code, signal }) => {
        const output = Buffer.concat(chunks).toString('utf-8');
        if (code !== 0) {
            const err = new Error(`'${cmd}'exited with code ${code} and signal ${signal}`);
            err.cmd = cmd;
            err.signal = signal;
            err.code = code;
            err.output = output;
            return reject(err);
        }
        return resolve(output);
    });
});

const withTemp = fn => async (...args) => {
    const tempDir = await fs.mkdtemp(path.join(os.tmpdir(), 'cli-temp-'));
    try {
        return await fn(...args, tempDir);
    } finally {
        await fs.rmdir(tempDir, { recursive: true });
    }
};

const withVariable = (options = [], fn) => async (...args) => {
    const map = await runJson('h1 config settings get --key test');
    const new_args = [];
    for (const name of options) {
        if (!map[name]) {
            throw new Error(`Missing value for variable '${name}'. Use 'h1 config settings --key test.${name} --value {value}' to  set`);
        }
        new_args.push(map[name]);
    }
    return fn(...args, ...new_args);
};

const getName = (...names) => [...names, Date.now().toString()]
    .join('-')
    .replace(/[^a-zA-Z0-9]/g, '-');

const downloadCachedFile = url => new Promise((resolve, reject) => {
    const suffix = crypto.createHash('sha256').update(url).digest('hex');
    const filename = path.join(os.tmpdir(), `test-h1-cli-v2-${suffix}`);
    const stream = createWriteStream(filename);
    stream.on('finish', () => resolve(filename));
    fetch(url)
        .then(resp => resp.body
            .pipe(stream)
            .on('error', reject)
        )
        .catch(reject);
});

module.exports = {
    run,
    runJson,
    runPty,
    withTemp,
    randomToken,
    withVariable,
    getName,
    downloadCachedFile,
};
