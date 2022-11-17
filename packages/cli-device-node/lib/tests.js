import shlex from 'shlex';
import pty from 'node-pty';

import { promises as fs, createWriteStream } from 'node:fs';
import { randomBytes, createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';

import child_process from 'node:child_process';
import path from 'node:path';
import os from 'node:os';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const randomToken = async (len = 16) => randomBytes(len).toString('hex');

const run = (cmd, options = {}) => new Promise((resolve, reject) => {
    if (process.argv.includes('--serial')) {
        // eslint-disable-next-line no-console
        console.log('executed: ', cmd);
    }

    const args = [
        path.join(__dirname, '../bin/h1.js'),
        ...shlex.split(cmd).slice(1),
    ];
    options.env = {
        ...options.env,
        //TODO remove when it becomes stable
        //  "Importing JSON modules is an experimental feature" - https://nodejs.org/api/esm.html#json-modules
        //  "The Fetch API is an experimental feature"          - https://nodejs.org/api/globals.html#fetch
        NODE_NO_WARNINGS: '1'
    };
    const program = child_process.spawn(process.argv[0], args, options);
    const chunks = [];

    program.stdout.on('data', chunk => chunks.push(chunk));
    program.stderr.on('data', chunk => chunks.push(chunk));

    program.once('error', reject);
    program.once('close', (code, signal) => {
        const output = Buffer.concat(chunks).toString('utf-8');
        if (code !== 0) {
            const err = new Error(`'${cmd}' exited with code ${code} and signal ${signal}`);
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
        path.join(__dirname, '../bin/h1.js'),
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
        await fs.rm(tempDir, { recursive: true });
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
    const suffix = createHash('sha256').update(url).digest('hex');
    const filename = path.join(os.tmpdir(), `test-h1-cli-v2-${suffix}`);
    
    fetch(url)
        .then(response => response.blob())
        .then(blob => fs.writeFile(filename, blob.stream()))
        .catch(reject)
        .then(() => resolve(filename))
    ;
});

export {
    run,
    runJson,
    runPty,
    withTemp,
    randomToken,
    withVariable,
    getName,
    downloadCachedFile,
};
