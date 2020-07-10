'use strict';

const fs = require('fs');
const path = require('path');
const os = require('os');

const info = require('../../package.json');

const displayResult = (output) => {
    if (typeof output === 'object') {
        console.dir(output, { depth: null });
    } else if (output) {
        console.log(output);
    }
};

module.exports = {
    displayResult,
    configLoad: () => {
        const outDir = path.join(os.homedir(), '.h1');
        try {
            const content = fs.readFileSync(path.join(outDir, 'config.json'), { encoding: 'utf-8' });
            return JSON.parse(content);
        } catch (err) {
            if (err.code === 'ENOENT') {
                return;
            }
            throw err;
        }
    },
    configSave: (content) => {
        const outDir = path.join(os.homedir(), '.h1');
        fs.mkdirSync(outDir, { recursive: true });
        fs.writeFileSync(path.join(outDir, 'config.json'), JSON.stringify(content, null, 4), { encoding: 'utf-8' });
    },
    headers: () => ({
        'User-Agent': `${info.name}/${info.version} for ${os.type()} ${os.release()}; ${process.platform}; ${process.arch}) node/${process.versions.node}`,
    }),
    log: (...args) => console.log(...args),
    debug: (...args) => console.debug(...args),
};

