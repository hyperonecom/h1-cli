'use strict';
const Cli = require('structured-cli');

const _ = require('lodash');

const genericOptionsGroups = {
    tag: {
        tag: {
            description: 'Key=value of tag',
            type: 'string',
            action: 'append',
        },
    },
};

module.exports = {
    createCommand: (name, options) => {
        ['plugins', 'params', 'options', 'context'].forEach(name => {
            if (!options[name] && options.resource) {
                options[name] = options.resource[name];
            }
        });

        if (options.genericOptions) {
            options.options = Object.assign({},
                options.options,
                ...options.genericOptions.map(group => genericOptionsGroups[group]),
            );
        }

        const requiredOptions = _.pickBy(options.options, o => o.required);
        options.options = _.pickBy(options.options, o => !o.required);

        const command = Cli.createCommand(name, options);
        command.createOptions = options;
        command.addOptionGroup('Required arguments', requiredOptions);

        return command;
    },
    createCategory: (name, options) => {
        const category = Cli.createCategory(name, options);
        category.createOptions = options;
        return category;
    },
    run: Cli.run,
    error: Cli.error,
    flatten: (cli) => {
        const missing = [cli];
        const nodes = [];
        while (missing.length > 0) {
            const entry = missing.shift();
            nodes.push(entry);
            if (entry.children) {
                missing.unshift(...entry.children);
            }
        }
        return nodes;
    },
    get_full_name: (node) => {
        const names = [node.name];
        let cur = node;
        while (cur.parent) {
            names.push(cur.parent.name);
            cur = cur.parent;
        }

        return names.reverse().join(' ');
    },
    get_command_option: (cmd, option_name) => {
        if (option_name in cmd.options) {
            return cmd.options[option_name];
        }
        for (const options of Object.values(cmd.optionGroups)) {
            if (option_name in options) {
                return options[option_name];
            }
        }
        return undefined;
    },
    mutually_exclusive_validate: (args, param1, param2) => {
        if (!args[param1] && !args[param2]) {
            throw Cli.error.cancelled(`Providing either ${param1} or ${param2} is required.`);
        }
        if (args[param1] && args[param2]) {
            throw Cli.error.cancelled(`Either ${param1} or ${param2} parameter is required, not both.`);
        }
    },
};
