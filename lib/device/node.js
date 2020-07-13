'use strict';

const fs = require('fs');
const path = require('path');
const os = require('os');
const untildify = require('untildify');

const info = require('../../package.json');

const displayResult = (output) => {
    if (typeof output === 'object') {
        // eslint-disable-next-line no-console
        console.dir(output, { depth: null });
    } else if (output) {
        // eslint-disable-next-line no-console
        console.log(output);
    }
};

module.exports = (scope) => ({
    displayResult,
    configLoad: () => {
        const outDir = path.join(os.homedir(), `.${scope}`);
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
        const outDir = path.join(os.homedir(), `.${scope}`);
        fs.mkdirSync(outDir, { recursive: true });
        fs.writeFileSync(path.join(outDir, 'config.json'), JSON.stringify(content, null, 4), { encoding: 'utf-8' });
    },
    headers: () => ({
        'User-Agent': `${info.name}/${info.version} for ${os.type()} ${os.release()}; ${process.platform}; ${process.arch}) node/${process.versions.node}`,
    }),
    // eslint-disable-next-line no-console
    log: (...args) => console.log(...args),
    // eslint-disable-next-line no-console
    debug: (...args) => console.debug(...args),
    readPassportFile: (filepath) => filepath && JSON.parse(require('fs').readFileSync(filepath, { encoding: 'utf-8' })),
    readDefaultPassport: () => {
        try {
            return JSON.parse(require('fs').readFileSync(untildify(`~/.${scope}/passport.json`)));
        } catch (err) {
            if (err.code == 'ENOENT') return;
            throw err;
        }
    },
    importExtension: (pattern) => {
        const path = require('path');
        const extDir = path.join(__dirname, '../../extensions');
        const directories = require('fs').readdirSync(extDir).filter(x => x.match(pattern));
        const extensions = [];
        for (const extension_dir of directories) {
            const extension = require(path.join(extDir, extension_dir));
            extensions.push(extension);
        }
        return extensions;
    },
});

