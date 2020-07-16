'use strict';

const commandLineArgs = require('command-line-args');
const commandLineUsage = require('command-line-usage');
const meant = require('meant');
const Command = require('./command');

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
        const extensions = await this.device.importExtension(pattern);
        for (const extension of extensions) {
            await extension.load(this);
        }
    }
    async findCommand(tag) {
        const commands = await this.loadCommands();
        const child_cmd = commands.find(x => x.tags.includes(tag));
        if (child_cmd) return child_cmd;
        for (const child of commands.filter(x => x.loadCommands)) {
            const child_cmd = child.findCommand(tag);
            if (child_cmd) {
                return child_cmd;
            }
        }
    }
}

module.exports = Category;
