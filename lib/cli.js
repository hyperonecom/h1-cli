'use strict';
const Cli = require('structured-cli');

const epilog = require('lib/epilog');
const _ = require('lodash');

module.exports = {
    createCommand: (name, options) => {
        const requiredOptions = _.pickBy(options.options, o => o.required);
        options.options = _.pickBy(options.options, o => !o.required);

        const command = Cli.createCommand(name, options);
        command.addOptionGroup('Required arguments', requiredOptions);

        if (options.dirname) {
            epilog.examples(command, options.dirname);
        }
        return command;
    },
    createCategory: (name, options) => {
        const category = Cli.createCategory(name, options);
        if (options.dirname) {
            epilog.examples(category, options.dirname);
        }
        return category;
    },
    run: Cli.run,
    error: Cli.error,
};
