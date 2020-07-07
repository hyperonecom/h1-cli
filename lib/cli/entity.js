'use strict';
const commandLineArgs = require('command-line-args');
const commandLineUsage = require('command-line-usage');
const meant = require('meant');
const { assert } = require('console');

class Command {
    constructor(options = {}) {
        this.name = options.name;
        this.aliases = [];
        this.summary = options.summary;
        this.parameters = [];
        this.options = [
            { name: 'help', type: Boolean, description: 'Show help message and exit.' },
            ...options.options || [],
        ];
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
    getUsage() {
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
                optionList: this.options,
            },
        ];
        return commandLineUsage(content);
    }
    exec(argv, parentOpts = {}) {
        const opts = {
            ...parentOpts,
            ...commandLineArgs(
                [...this.parameters, ...this.options],
                { argv, stopAtFirstUnknown: true }
            ),
        };
        if (opts.help) {
            return this.getUsage();
        }
        if (opts._unknown && opts._unknown.length > 0 && opts._unknown[0].startsWith('-')) {
            const option = opts._unknown[0];
            const subname = this.options.map(x => `--${x.name}`);
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
        const missing = this.options.filter(x => x.required && typeof opts[x.name] == 'undefined').map(x => `--${x.name}`);
        if (missing.length > 0) {
            return `Argument missing: ${missing.join(', ')}`;
        }
        return this.start(opts);
    }
    start(opts) {
        assert(typeof this.handler != 'undefined', `Missing handler for ${this.name}`);
        return this.handler(opts);
    }
}


class Category extends Command {
    constructor(options = {}) {
        super(options);
        this.parameters.push({ name: 'command', defaultOption: true });
        this.commands = options.commands || [];
    }
    findCommands() {
        if (typeof this.commands == 'function') {
            this.commands = this.commands();
        }
        return this.commands;
    }
    getUsage() {
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
                content: this.findCommands().map(x => ({ name: x.name, summary: x.summary })),
            },
        ];
        return commandLineUsage(content);
    }
    addCommand(...cmds) {
        for (const cmd of cmds) {
            cmd.parent = this;
            this.findCommands().push(cmd);
        }
    }
    exec(argv, parentOpts = {}) {
        const opts = {
            ...parentOpts,
            ...commandLineArgs(
                [...this.parameters, ...this.options],
                { argv, stopAtFirstUnknown: true }
            ),
        };
        const cmd = this.findCommands().find(x => x.name == opts.command || x.aliases.includes(opts.command));
        if (cmd) {
            return cmd.exec(opts._unknown, {
                ...opts,
                _unknown: [],
                command: undefined,
            });
        }
        if (opts.help) {
            return this.getUsage();
        }
        if (!opts.command) {
            return this.getUsage();
        }
        const subname = this.findCommands().map(x => x.name);
        const result = meant(opts.command, subname);
        const msg = [
            `Error: unknown command "${opts.command}" for "${this.name}".`,
        ];
        if (result.length > 0) {
            msg.push('Did you mean this?');
            msg.push(...result.map(x => `\t${x}`));
        }
        return msg.join('\n');
    }
}

module.exports = {
    Category,
    Command,
};
