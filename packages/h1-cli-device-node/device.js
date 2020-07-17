/* eslint-disable no-console */
'use strict';
const chalk = require('chalk');
const fs = require('fs');
const path = require('path');
const os = require('os');
const untildify = require('untildify');

const { Device } = require('h1-cli-framework');

const process = require('process');

const info = require('./package.json');

const parameterLabel = (parameter, options = []) => {
    const option = options.find(p => p.use && p.use.in == parameter.in && p.use.field == parameter.field);
    if (!option) {
        return parameter.field;
    }
    return `--${option.name}`;
};

const formatError = (err, options) => {
    if (err.parameter) {
        return console.log(`  ${chalk.red(err.title)} [${parameterLabel(err.parameter, options)}]: ${err.detail}`);
    }
    return console.log(`  ${chalk.red(err.title)} [${parameterLabel(err.parameter, options)}]: ${err.detail}`);
};

class NodeDevice extends Device {
    constructor(scope) {
        super();
        this.scope = scope;
    }
    displayResult(output) {
        if (typeof output === 'object') {
            console.dir(output, { depth: null });
        } else if (output) {
            console.log(output);
        }
    }
    async displayError(err) {
        const type = err.resp && err.resp.headers.get('content-type');
        if (err.resp && type && type.startsWith('application/json')) {
            const respJson = await err.resp.json();
            if (!respJson.title) {
                console.error(err);
            } else {
                // console.dir(respJson, { depth: null });
                console.log(`${chalk.red(respJson.title)}: ${respJson.detail}`);
                const nested = [
                    ...respJson.argument || [],
                    ...respJson.permission || [],
                    ...respJson.operation || [],
                ];
                for (const nestedErr of nested) {
                    formatError(nestedErr, err.options);
                }
            }
        } else {
            delete err.options;
            console.error(err);
        }
        process.exit(err.exitCode || 1);
    }
    async configLoad() {
        const outDir = path.join(os.homedir(), `.${this.scope}`);
        try {
            const content = fs.readFileSync(path.join(outDir, 'config.json'), { encoding: 'utf-8' });
            return JSON.parse(content);
        } catch (err) {
            if (err.code === 'ENOENT') {
                return;
            }
            throw err;
        }
    }
    async configSave(content) {
        const outDir = path.join(os.homedir(), `.${this.scope}`);
        fs.mkdirSync(outDir, { recursive: true });
        fs.writeFileSync(path.join(outDir, 'config.json'), JSON.stringify(content, null, 4), { encoding: 'utf-8' });
    }
    async headers() {
        return {
            'User-Agent': `${info.name}/${info.version} for ${os.type()} ${os.release()}; ${process.platform}; ${process.arch}) node/${process.versions.node}`,
        };
    }
    // eslint-disable-next-line no-console
    log(...args) {
        console.log(...args);
    }
    // eslint-disable-next-line no-console
    debug(...args) {
        console.debug(...args);
    }
    readPassportFile(filepath) {
        return filepath && JSON.parse(fs.readFileSync(filepath, { encoding: 'utf-8' }));
    }
    readDefaultPassport() {
        try {
            return JSON.parse(fs.readFileSync(untildify(`~/.${this.scope}/passport.json`)));
        } catch (err) {
            if (err.code == 'ENOENT') return;
            throw err;
        }
    }
    async importExtension(pattern) {
        const path = require('path');
        const dirs = [
            path.join(os.homedir(), `.${this.scope}/extensions`),
            path.join(__dirname, './node_modules/'),
        ];
        const extensions = [];
        for (const extDir of dirs) {
            let directories;
            try {
                directories = await fs.promises.readdir(extDir);
            } catch (err) {
                if (err.code == 'ENOENT') {
                    continue;
                }
                throw err;
            }
            for (const extension_dir of directories) {
                const module = path.join(extDir, extension_dir);
                // console.log('Loading CLI extensions: ', module);
                if (module.match(`${pattern}-.*`)) {
                    const extension = require(module);
                    extension.module = module;
                    // console.log('Loaded CLI extensions: ', module);
                    // console.log(extension);
                    if (!extensions.some(x => x.name == extension.name)) {
                        extensions.push(extension);
                    }
                } else {
                    // console.log(`Ignored module '${module}' for pattern '${pattern}'.`);
                }
            }
        }
        return extensions;
    }
    mapUrl(url) {
        return url;
    }
    extensionDir() {
        const outDir = path.join(os.homedir(), `.${this.scope}/extensions`);
        fs.mkdirSync(outDir, { recursive: true });
        return outDir;
    }
}

module.exports = NodeDevice;

