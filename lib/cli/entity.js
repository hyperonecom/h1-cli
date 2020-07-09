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
    getOptions() {
        return [
            ...this.options,
            ...(this.plugins || []).map(x => x.options || []).flat(2),
        ];
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
                optionList: this.getOptions(),
            },
        ];
        return commandLineUsage(content);
    }
    exec(argv, parentOpts = {}) {
        const options = this.getOptions();
        const opts = {
            ...parentOpts,
            ...commandLineArgs(options, { argv, stopAtFirstUnknown: true }),
        };
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
        const missing = options.filter(x => x.required && typeof opts._all[x.name] == 'undefined').map(x => `--${x.name}`);
        if (missing.length > 0) {
            return `Argument missing: ${missing.join(', ')}`;
        }
        let p = Promise.resolve();
        if (this.plugins) {
            for (const plugin of this.plugins.filter(x => x.beforeCommandStart)) {
                p = p.then(() =>
                    Promise.resolve(timingPromise(`${plugin.name}:beforeCommandStart`, plugin.beforeCommandStart(opts)))
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
            cmd.plugins = cmd.plugins || this.plugins;
            this.findCommands().push(cmd);
        }
    }
    exec(argv = [], parentOpts = {}) {
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
        const cmd = this.findCommands().find(x => x.name == opts.command || x.aliases.includes(opts.command));
        if (!cmd) {
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
        return cmd.exec(opts._unknown, {
            ...opts,
            _unknown: [],
            command: undefined,
        });
    }
}

module.exports = {
    Category,
    Command,
};
