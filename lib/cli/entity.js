'use strict';
const commandLineArgs = require('command-line-args');
const commandLineUsage = require('command-line-usage');
const meant = require('meant');
const { assert } = require('console');

const timingPromise = async (title, p) => {
    const start = new Date();
    const result = await p;
    const end = new Date();
    const duration = (end - start) / 1000;
    console.error(`${title}: ${duration} seconds`);
    return result;
};

class Command {
    constructor(options = {}) {
        this.name = options.name;
        this.aliases = [];
        this.summary = options.summary;
        this.plugins = options.plugins;
        this.options = options.options || [];
        this.state = options.state;
        this.options.push({ name: 'help', type: Boolean, description: 'Show help message and exit.' });
        this.handler = options.handler;
        assert(typeof this.summary != 'undefined', `Missing summary for ${this.name}`);
        assert(typeof this.name != 'undefined', `Missing name for ${this.name}`);
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
                await timingPromise(`${plugin.name}:beforeParseArgv`, await plugin.beforeParseArgv(this));
            }
            this.argPlugin = true;
        }
        return this.options;
    }
    async getUsage() {
        const content = [
            {
                header: this.getFullName(),
                content: this.summary,
            },
            {
                header: 'Synopsis',
                content: `$ ${this.getFullName()} <options>`,
            },
            {
                header: 'Options',
                hide: ['command'],
                optionList: await this.getOptions(),
            },
        ];
        return commandLineUsage(content);
    }
    async exec(argv, parentOpts = {}) {
        const options = await this.getOptions();
        const opts = {
            ...parentOpts,
            ...commandLineArgs(options, { argv, stopAtFirstUnknown: true }),
        };
        const allOpts = opts._all || opts || {};
        if (allOpts.help) {
            return this.getUsage();
        }
        if (opts._unknown && opts._unknown.length > 0 && opts._unknown[0].startsWith('-')) {
            const option = opts._unknown[0];
            const subname = options.map(x => `--${x.name}`);
            const result = meant(option, subname);
            const msg = [
                `Error: unknown option "${option}" for "${this.name}".`,
            ];
            if (result.length > 0) {
                msg.push('Did you mean this?');
                msg.push(...result.map(x => `\t${x}`));
            }
            return msg.join('\n');
        }
        const missing = options.filter(x => x.required && typeof allOpts[x.name] == 'undefined').map(x => `--${x.name}`);
        if (missing.length > 0) {
            return `Argument missing: ${missing.join(', ')}`;
        }
        let p = Promise.resolve();
        if (this.plugins) {
            const cmd = this;
            for (const plugin of this.plugins.filter(x => x.beforeCommandStart)) {
                p = p.then(() =>
                    Promise.resolve(timingPromise(`${plugin.name}:beforeCommandStart`, plugin.beforeCommandStart(opts, cmd)))
                );
            }
        }
        return p.then(() => this.start(opts));
    }
    start(opts) {
        assert(typeof this.handler != 'undefined', `Missing handler for ${this.name}`);
        return this.handler(opts);
    }
}


class Category extends Command {
    constructor(options = {}) {
        super(options);
        this.extensions = options.extensions || [];
        this.commands = [];
        this.lazyCommands = [];
        this.loaded = false;
    }
    async loadCommands() {
        if (!this.loaded) {
            for (const extension of this.extensions) {
                await this.loadExtensions(extension);
            }
            for (const cmd of this.lazyCommands) {
                this.addCommand(await cmd());
            }
            this.loaded = true;
        }
        return this.commands;
    }
    async getUsage() {
        await this.loadCommands();
        const content = [
            {
                header: this.getFullName(),
                content: this.description,
            },
            {
                header: 'Synopsis',
                content: `$ ${this.getFullName()} <group> <command>`,
            },
            {
                header: 'Options',
                hide: ['command'],
                optionList: this.options,
            },
            {
                header: 'Command List',
                content: this.commands.map(x => ({ name: x.name, summary: x.summary })),
            },
        ];
        return commandLineUsage(content);
    }
    addCommand(...cmds) {
        for (const cmd of cmds) {
            if (typeof cmd == 'function') {
                this.lazyCommands.push(cmd);
            } else {
                cmd.parent = this;
                cmd.plugins = cmd.plugins || this.plugins;
                this.commands.push(cmd);
            }
        }
    }
    async exec(argv = [], parentOpts = {}) {
        const opts = {
            ...parentOpts,
            ...commandLineArgs(
                [
                    { name: 'command', defaultOption: true },
                    ...this.options,
                ],
                { argv, stopAtFirstUnknown: true }
            ),
        };
        this.loadCommands();
        const cmd = this.commands.find(x => x.name == opts.command || x.aliases.includes(opts.command));
        if (!cmd) {
            if (opts.help) {
                return this.getUsage();
            }
            if (!opts.command) {
                return this.getUsage();
            }
            const result = meant(opts.command, this.commands.map(x => x.name));
            const msg = [
                `Error: unknown command "${opts.command}" for "${this.name}".`,
            ];
            if (result.length > 0) {
                msg.push('Did you mean this?');
                msg.push(...result.map(x => `\t${x}`));
            }
            return msg.join('\n');
        }
        return cmd.exec(opts._unknown, {
            ...opts,
            _unknown: [],
            command: undefined,
        });
    }
    async loadExtensions(pattern) {
        // TODO: Move to device
        const path = require('path');
        const extDir = path.join(__dirname, '../../extensions');
        const extensions = require('fs').readdirSync(extDir).filter(x => x.match(pattern));
        for (const extension_dir of extensions) {
            const extension = require(path.join(extDir, extension_dir));
            await timingPromise(`${extension.name}:loading`, extension.load(this));
        }
    }
}

module.exports = {
    Category,
    Command,
};
