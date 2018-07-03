'use strict';
const Cli = require('structured-cli');

const _ = require('lodash');

module.exports = {
    createCommand: (name, options) => {
        if (typeof options.plugins === 'undefined' && options.resource) {
            options.plugins = options.resource.plugins;
        }
        if (typeof options.params === 'undefined' && options.resource) {
            options.params = options.resource.params;
        }
        if (typeof options.options === 'undefined' && options.resource) {
            options.options = options.resource.options;
        }
        if (typeof options.context === 'undefined' && options.context) {
            options.context = options.resource.context;
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
            const entry = missing.pop();
            if (entry.children) {
                missing.push(...entry.children);
            }
            nodes.push(entry);
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
};
