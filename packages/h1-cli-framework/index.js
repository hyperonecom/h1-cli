'use strict';
const commandLineArgs = require('command-line-args');
const commandLineUsage = require('command-line-usage');
const meant = require('meant');

class Command {
    constructor(options = {}) {
        this.name = options.name;
        this.aliases = [];
        this.summary = options.summary;
        this.plugins = options.plugins;
        this.options = options.options || [];
        this.options.push({ name: 'help', group: ['global'], type: Boolean, description: 'Show help message and exit.' });
        this.handler = options.handler;
        this.device = options.device;
        this.config = options.config;
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
        return this.options;
    }
    async getUsage() {
        const options = await this.getOptions();
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
                header: 'Global options',
                hide: ['command'],
                group: ['global'],
                optionList: options,
            },
            {
                header: 'Operation options',
                hide: ['command'],
                group: ['_none'],
                optionList: options,
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
        if (opts.help) {
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
                p = p.then(() => Promise.resolve(plugin.beforeCommandStart(opts, cmd)));
            }
        }
        return p.then(() => this.start(opts).catch(err => {
            err.options = options;
            throw err;
        }));
    }
    start(opts) {
        return this.handler(opts, this);
    }
}


class Category extends Command {
    constructor(options = {}) {
        super(options);
        this.extensions = options.extensions || [];
        this.commands = [];
        this.lazyCommands = [];
        this.loadHook = [];
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
            for (const hook of this.loadHook) {
                await hook(this);
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
                if (this.loaded) {
                    throw new Error('No late to add new lazy command');
                }
                this.lazyCommands.push(cmd);
            } else {
                cmd.parent = this;
                cmd.plugins = cmd.plugins || this.plugins;
                cmd.config = cmd.config || this.config;
                cmd.device = cmd.device || this.device;
                this.commands.push(cmd);
            }
        }
    }
    async exec(argv = [], parentOpts = {}) {
        await this.loadCommands();
        const opts = {
            ...parentOpts,
            ...commandLineArgs(
                [
                    { name: 'command', defaultOption: true },
                    ...this.options,
                ],
                { argv, stopAtFirstUnknown: true }
            ),
            state: this.state,
        };
        const allOpts = opts._all || opts || {};
        const cmd = this.commands.find(x => x.name == allOpts.command || x.aliases.includes(allOpts.command));
        if (!cmd) {
            if (allOpts.help) {
                return this.getUsage();
            }
            if (!allOpts.command) {
                return this.getUsage();
            }
            const result = meant(allOpts.command, this.commands.map(x => x.name));
            const msg = [
                `Error: unknown command "${allOpts.command}" for "${this.name}".`,
            ];
            if (result.length > 0) {
                msg.push('Did you mean this?');
                msg.push(...result.map(x => `\t${x}`));
            }
            return msg.join('\n');
        }

        return cmd.exec(opts._unknown, {
            ...allOpts,
            _unknown: [],
            command: undefined,
        });
    }
    async loadExtensions(pattern) {
        return Promise.all(
            this.device.importExtension(pattern).map(extension => extension.load(this))
        );
    }
}

module.exports = {
    Category,
    Command,
};
