/* eslint-disable no-console */
import chalk from 'chalk';
import fs from 'fs';
import path from 'path';
import os from 'os';
import untildify from 'untildify';

import { Device } from '@hyperone/cli-framework';
import process from 'process';
import info from './package.json';
import { get, set, unset } from '@hyperone/cli-core/lib/transform';
import { CliError } from '@hyperone/cli-framework/error';

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
    return console.log(`  ${chalk.red(err.title)}: ${err.detail}`);
};

export class NodeDevice extends Device {
    constructor(scope) {
        super();
        this.scope = scope;
        this.config = undefined;
    }
    getName() {
        return this.scope;
    }
    displayResult(output) {
        if (typeof output === 'object') {
            console.dir(output, { depth: null });
        } else if (output) {
            console.log(output);
        }
    }
    async displayError(err) {
        if (err instanceof CliError) {
            console.log(`Error: ${err.message}`);
            if (err.suggestion && err.suggestion > 0) {
                console.error('Did you mean this?');
                for (const suggestion of err.suggestion) {
                    console.error(`\t${suggestion}`);
                }
            }
        } else {
            const options = err.options;
            delete err.options;
            const type = err.resp && err.resp.headers.get('content-type');
            if (err.resp && type && type.startsWith('application/json')) {
                const respJson = await err.resp.json();
                console.dir(respJson, {depth:null});
                if (!respJson.title) {
                    console.error(respJson);
                } else {
                    // console.dir(respJson, { depth: null });
                    console.log(`${chalk.red(respJson.title)}: ${respJson.detail}`);
                    const nested = [
                        ...respJson.argument || [],
                        ...respJson.permission || [],
                        ...respJson.operation || [],
                    ];
                    for (const nestedErr of nested) {
                        formatError(nestedErr, options);
                    }
                }
            } else {
                console.error(err);
            }
        }
        process.exit(err.exitCode || 1);
    }
    async dataDir() {
        return path.join(os.homedir(), `.${this.scope}`);
    }
    async configLoad() {
        if (typeof this.config == 'undefined') {
            const outDir = this.dataDir();
            try {
                const content = await fs.promises.readFile(path.join(outDir, 'config.json'), { encoding: 'utf-8' });
                this.config = JSON.parse(content);
            } catch (err) {
                if (err.code === 'ENOENT') {
                    this.config = {
                        parameter: {
                            location: {
                                value: 'pl-waw-1',
                            },
                        },
                    };
                } else {
                    throw err;
                }
            }
        }
        return this.config;
    }
    async configStore() {
        if (typeof this.config == 'undefined') return;
        const outDir = path.join(os.homedir(), `.${this.scope}`);
        await fs.promises.mkdir(outDir, { recursive: true });
        await fs.promises.writeFile(path.join(outDir, 'config.json'), JSON.stringify(this.config, null, 4), { encoding: 'utf-8' });
    }
    async configGet(key, defaultValue) {
        return get(await this.configLoad(), key, defaultValue);
    }
    async configSet(key, value) {
        return set(await this.configLoad(), key, value);
    }
    async configUnset(key) {
        return unset(await this.configLoad(), key);
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
    statFile(filepath) {
        return fs.promises.stat(filepath);
    }
    createReadStream(filepath) {
        return fs.createReadStream(filepath);
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
        let directories = [];
        const extDir = path.join(os.homedir(), `.${this.scope}/extensions`);
        const extensions = [];

        try {
            directories = await fs.promises.readdir(extDir);
        } catch (err) {
            if (err.code == 'ENOENT') {
                directories = [];
            } else {
                throw err;
            }
        }
        pattern = pattern.split('/').pop();

        for (const extension_dir of directories) {
            const module = path.join(extDir, extension_dir);
            if (module.match(`${pattern}-.*`)) {
                let extension = __non_webpack_require__(module);
                extension = extension.default || extension;
                extension.module = module;
                extensions.push(extension);
            }
        }
        const r = require.context('./../../node_modules/@hyperone/', true, /cli-ext-[a-z-]*\/index\.js$/);
        r.keys().forEach(module => {
            if (module.match(`./${pattern}-.*/index.js`)) {
                let extension = r(module);
                extension = extension.default && extension.default;
                // Skip remote-loaded modules
                // Allows overlap & upgrade
                if (!extensions.some(x => x.name == extension.name)) {
                    extensions.push(extension);
                }
            }
        });
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
