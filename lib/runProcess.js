'use strict';
const { spawn } = require('child_process');
const shell_quote = require('shell-quote');

const runProcess = (cmd, opts = {}) => new Promise((resolve, reject) => {
    const argv = shell_quote.parse(cmd);
    console.log(new Date(), 'local:', cmd);

    const proc = spawn(argv[0], argv.slice(1), {
        env: Object.assign({}, process.env, opts.env),
        input: Buffer.from(''),
        stdio: ['ignore', 'pipe', 'pipe'],
    });

    let timer;
    if (opts.timeout) {
        timer = setTimeout(() => {
            console.log(`Process timeout in ${opts.timeout}`);
            proc.kill('SIGHUP');
        }, opts.timeout);
    }

    const output = [];

    proc.on('error', err => reject(err));
    proc.on('close', (code) => {
        const content = Buffer.concat(output).toString('utf-8');
        if (timer) clearTimeout(timer);
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

module.exports = runProcess;
