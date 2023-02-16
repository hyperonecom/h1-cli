/* eslint-disable no-console */
import chalk from 'chalk';
import fs from 'fs';
import path from 'path';
import os from 'os';
import untildify from 'untildify';

import { Device } from '@hyperone/cli-framework';
import process from 'process';
import info from './package.json' assert { type: 'json' };
import { get, set, unset } from '@hyperone/cli-core/lib/transform.js';
import { CliError } from '@hyperone/cli-framework/error.js';
import inquirer from 'inquirer';

//import.meta.url is not available after bundling #esbuild
const importMetaURL = import.meta.url;
const __dirname = importMetaURL && new URL('.', importMetaURL).pathname;

const parameterLabel = (parameter, options = []) => {
    const option = options.find(p => p.use && p.use.in === parameter.in && p.use.field === parameter.field);
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
    getVersion() {
        return info.version;
    }
    displayResult(output) {
        if (typeof output === 'object') {
            console.dir(output, { depth: null });
        } else if (output) {
            console.log(output);
        }
    }
    async displayError(err) {
        if (err.code === 'ERESOLVER') {
            console.log('There is a problem with the network connection to the Platform. Please check your internet connection and try again later.');
        } else if (err instanceof CliError) {
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
        if (typeof this.config === 'undefined') {
            const outDir = await this.dataDir();
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
        if (typeof this.config === 'undefined') { return; }
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
            if (err.code === 'ENOENT') {
                return;
            }
            throw err;
        }
    }
    async importExtension(pattern) {
        let directories = [];
        const extDir = this.extensionDir();
        const extensions = [];

        try {
            directories = await fs.promises.readdir(extDir);
        } catch (err) {
            if (err.code === 'ENOENT') {
                directories = [];
            } else {
                throw err;
            }
        }
        pattern = pattern.split('/').pop();

        for (const extension_dir of directories) {
            const module = path.join(extDir, extension_dir);
            if (module.match(`${pattern}-.*`)) {
                let extension = await import(module);
                extension = extension.default || extension;
                extension.module = module;
                extensions.push(extension);
            }
        }

        //add @hyperone/cli-ext-* extensions
        if (process.pkg || !__dirname) {
            // dynamic loading is broken because of v8 issues, falling back to o manual loading
            //      TypeError: Invalid host defined options
            //      https://bugs.chromium.org/p/chromium/issues/detail?id=1244145
            //      https://bugs.chromium.org/p/v8/issues/detail?id=10284

            if (pattern === 'cli-ext-root') {
                extensions.push(await import('@hyperone/cli-ext-root-auth').then(m => m.default));
                extensions.push(await import('@hyperone/cli-ext-root-config').then(m => m.default));
                extensions.push(await import('@hyperone/cli-ext-root-openapi-generator').then(m => m.default));
                extensions.push(await import('@hyperone/cli-ext-root-version').then(m => m.default));
            } else if (pattern === 'cli-ext-compute') {
                extensions.push(await import('@hyperone/cli-ext-compute-vm').then(m => m.default));
            } else if (pattern === 'cli-ext-container') {
                extensions.push(await import('@hyperone/cli-ext-container-helper').then(m => m.default));
            } else if (pattern === 'cli-ext-iam') {
                extensions.push(await import('@hyperone/cli-ext-iam-project').then(m => m.default));
            } else if (pattern === 'cli-ext-insight') {
                extensions.push(await import('@hyperone/cli-ext-insight-journal').then(m => m.default));
            } else if (pattern === 'cli-ext-storage') {
                extensions.push(await import('@hyperone/cli-ext-storage-vault').then(m => m.default));
            } else if (pattern === 'cli-ext-website') {
                extensions.push(await import('@hyperone/cli-ext-website-instance').then(m => m.default));
            }

            return extensions;
        }

        const scopedExtensionsDir = path.join(__dirname, '../../node_modules/@hyperone');

        const scopeExtensionsNames = fs
            .readdirSync(scopedExtensionsDir)
            .filter(name => name.startsWith('cli-ext-'))
            .filter(name => name.startsWith(pattern))
        ;

        for (const fileName of scopeExtensionsNames) {
            const filePath = path.join(scopedExtensionsDir, fileName, 'index.js');
            const extension = await import(filePath).then(m => m.default);
            // Skip remote-loaded modules
            // Allows overlap & upgrade
            if (!extensions.some(x => x.name === extension.name)) {
                extensions.push(extension);
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
    askInteractive(questions) {
        return inquirer.prompt(questions);
    }
}
