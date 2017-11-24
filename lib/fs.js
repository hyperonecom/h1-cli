'use strict';

const Cli = require('structured-cli');
const fs = require('fs');

exports.getFileContent = path => new Promise((resolve, reject) => {
    if (path === '-') {
        const data = [];

        process.stdin.on('error', reject);
        process.stdin.on('readable', () => {
            const chunk = process.stdin.read();
            if (chunk !== null) {
                data.push(chunk);
            }
        });

        process.stdin.on('end', () => {
            resolve(Buffer.concat(data));
        });
    } else if (!fs.existsSync(path)) {
        reject(Cli.error.notFound(`File not found: ${path}`));
    } else {
        resolve(fs.readFileSync(path));
    }
});
