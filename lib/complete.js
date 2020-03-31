'use strict';

const omelette = require('omelette');
const api = require('lib/api');

const completeService = (resource) => async (start) => {
    const resp = await api.get('service', { resource, type: 'flavour' });
    const replies = resp.map(x => x.name);

    if (start.trim().length > 0) {
        replies.push(...resp.map(x => x.id));
    }

    const result = replies.filter(x => x.startsWith(start));
    return result;
};

const autocomplete = (cli, next) => {
    // const om = omelette(cli.name).tree(tree(cli));
    const om = omelette(cli.name);
    om.onAsync('complete', function (fragment, { line }) {
        const args = line.split(' ').map(c => c.trim());

        let arg;
        let index;
        let parent_category;
        let current_category;
        for (index = 1, current_category = cli; index < args.length; index++) {
            arg = args[index];
            if (!current_category.options) {
                break;
            }
            parent_category = current_category;
            current_category = current_category.children.find(x => x.name == arg && x.children);
            if (!current_category) {
                break;
            }
        }
        const last_category = current_category ? current_category : parent_category;
        const all_entries = last_category.children.map(x => x.name);
        const current_command = last_category.children.find(c => c.name === arg);
        // autocomplete category or command for category
        if (current_category || !current_command) {
            //return command and categories combined
            return this.reply(all_entries.filter(c => c.startsWith(arg)));
        }
        let command_options;
        let options_names;
        if (current_command) {
            command_options = Object.assign({},
                ...Object.values(current_command.optionGroups || {}),
                current_command.options || {},
                ...(current_command.plugins || []).map(p => p.options)
            );
            options_names = Object.keys(command_options).map(x => `--${x}`);
        }

        // autocomplete categories for root of category / command
        if (index === args.filter(x => x !== '').length - 1) {
            if (current_command) {
                // ... of command
                return this.reply(options_names);
            }
            // ... of category
            return this.reply(all_entries.filter(c => c.startsWith(arg)));
        }

        // autocomplete option name
        let last_arg = args[args.length - 1];
        if (last_arg == '') {
            last_arg = args[args.length - 2];
        }
        const completeForOption = async (option, start = '') => {
            if (option.complete) {
                return option.complete(start);
            }
            if (option.choices) {
                return option.choices.filter(c =>
                    c !== start && c.startsWith(start)
                );
            }
            if (option.type == 'boolean') {
                return options_names;
            }
            if (option.defaultValue) {
                return [option.defaultValue];
            }
            return [];
        };
        if (last_arg.startsWith('-')) { // autocomplete for option name
            const option = command_options[last_arg.replace(/^-+/, '')];
            if (option) { // full option name provided
                return this.reply(completeForOption(option).catch(() => []));
            }
            return this.reply(
                options_names.filter(c =>
                    c !== last_arg && c.startsWith(last_arg)
                )
            );
        }
        // attempt autocomplete for value
        const option = command_options[args[args.length - 2].replace(/^-+/, '')];
        if (option) {
            return this.reply(completeForOption(option, last_arg).catch(() => []));
        }
        return this.reply([]);
    });
    om.next(next);
    om.init();
    return om;
};

module.exports = {
    autocomplete,
    completeService,
};
