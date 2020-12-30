
import commandLineArgs from 'command-line-args';
import commandLineUsage from 'command-line-usage';
import meant from 'meant';
import { resolvePointer, serializeValue } from './utils';
import { UnknownOptionError } from './error';

const escape = value => `${value}`.replace('{', '\\\{').replace('}', '\\\}');

class Command {
    constructor(options = {}) {
        Object.assign(this, options);
        this.name = options.name;
        this.aliases = [];
        this.summary = options.summary;
        this.description = options.description;
        this.plugins = options.plugins;
        this.options = options.options || [];
        this.options.push({ name: 'help', group: ['global'], type: Boolean, description: 'Show help message and exit.' });
        this.handler = options.handler;
        this.device = options.device;
        this.config = options.config;
        this.tags = options.tags || [];
        this.examples = options.examples || [];
    }
    getFullName() {
        const parts = [];
        let cmd = this;
        do {
            parts.push([cmd.name]);
            cmd = cmd.parent;
        } while (cmd);
        parts.reverse();
        return parts.join(' ');
    }
    async getOptions() {
        // TODO: Found clean-way to avoid state
        if (typeof this.argPlugin == 'undefined') {
            for (const plugin of this.plugins || []) {
                if (!plugin.beforeParseArgv) {
                    continue;
                }
                await plugin.beforeParseArgv(this);
            }
            this.argPlugin = true;
        }
        if (this.device && this.device.getVersion) {
            this.options.push({ name: 'version', alias: 'v', group: ['global'], type: Boolean, description: 'Show version and exit.' });
        }
        return this.options.map(x => ({
            ...x,
            description: x.defaultValue ? `${x.description}. Default value is ${escape(x.defaultValue)}` : x.description,
        }));
    }
    async getExamples() {
        if (typeof this.examples == 'function') {
            this.examples = await this.examples();
        }
        return this.examples;
    }
    async renderUsage() {
        const options = await this.getOptions();
        const fullName = this.getFullName();
        const content = [
            {
                header: fullName,
                content: this.summary,
            },
            {
                header: 'Synopsis',
                content: `$ ${fullName} <options>`,
                format: 'bash',
            },
        ];
        if (this.description) {
            content.push({
                header: 'Description',
                content: this.description,
            });
        }
        const examples = await this.getExamples();
        if (examples && examples.length > 0) {
            content.push({
                header: examples.length > 1 ? 'Examples' : 'Example',
                examples,
                content: examples.map(({ title, command }) => `
                    {bold ${title}}
                
                   $ ${command.replace('{name}', fullName)}`).join('\n\n'),
            });
        }
        content.push({
            header: 'Common options',
            hide: ['command'],
            group: ['global'],
            optionList: options,
        });
        if (options.some(x => (x.groups || ['_none']).includes('_none'))) {
            content.push({
                header: 'Operation options',
                hide: ['command'],
                group: ['_none'],
                optionList: options,
            });
        }
        return content;
    }
    async getUsage(...args) {
        const usage = await this.renderUsage(...args);
        return commandLineUsage(usage.map(x => {
            const override = {};
            if (x.summary) {
                override.summary.replace('\[(.+?)\]\((.+?)\)', (match) => `${match[1]} (${match[2]})`);
                override.raw = true;
            }
            return {
                ...x,
                ...override,
            };
        }));
    }
    async getVersion() {
        return `${this.device.getName()} version ${this.device.getVersion()}`;
    }
    async exec(argv, parentOpts = {}) {
        const options = await this.getOptions();
        const opts = {
            ...parentOpts,
            ...commandLineArgs(options, { argv, stopAtFirstUnknown: true }),
        };
        const allOpts = opts._all || opts || {};
        if (opts.help || allOpts.help) {
            return this.getUsage();
        }
        if (opts.version || allOpts.version) {
            return this.getVersion();
        }
        if (opts._unknown && opts._unknown.length > 0) {
            const option = opts._unknown[0];
            if (option.startsWith('--')) {
                const suggestion = meant(option, options.map(x => `--${x.name}`));
                throw new UnknownOptionError(`Unknown parameter "${option}" for "${this.getFullName()}"`, suggestion);
            } else {
                throw new UnknownOptionError(`Unknown parameter "${option}" for "${this.getFullName()}". Have you forgotten the quotation marks?`);
            }
        }
        const missing = options.filter(x => x.required && typeof allOpts[x.name] == 'undefined').map(x => `--${x.name}`);
        if (missing.length > 0) {
            throw new UnknownOptionError(`Parameter missing: ${missing.join(', ')}`, missing);
        }
        let p = Promise.resolve();
        if (this.plugins) {
            const cmd = this;
            for (const plugin of this.plugins.filter(x => x.beforeCommandStart)) {
                p = p.then(() => Promise.resolve(plugin.beforeCommandStart(opts, cmd)));
            }
        }
        return p.then(() => this.start(opts).catch(err => {
            err.options = options;
            throw err;
        }));
    }
    generateArgv({ requestBody = {}, parameters = {} }) {
        const argv = this.getFullName().split(' ');
        for (const option of this.options) {
            if (option.use) {
                const value = option.use.in == 'body' ? resolvePointer(requestBody, option.use.field) : parameters[option.use.field];
                if (typeof value !== 'undefined' && value !== option.defaultValue) {
                    if (option.multiple) {
                        for (const v of value) {
                            argv.push(`--${option.name}`);
                            argv.push(serializeValue(v));
                        }
                    } else {
                        argv.push(`--${option.name}`);
                        argv.push(serializeValue(value));
                    }
                }
            }
        }
        return argv;
    }
    async start(opts) {
        return this.handler(opts, this);
    }
}

export default Command;
