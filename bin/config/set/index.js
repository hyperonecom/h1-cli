'use strict';

const Cli = require('lib/cli');
const config = require('lib/config');
const logger = require('lib/logger');

const getApp = args =>{
    let elem = args.$node;

    while (elem.parent) {
        elem = elem.parent;
    }

    return elem;
};

const getAppCommand = (args, path) => {
    let elem = getApp(args);

    path.split('.').forEach(part => {
        elem = elem && elem.children.find(c => c.name === part);
    });

    return elem;
};


module.exports = Cli.createCommand('set', {
    dirname: __dirname,
    description: 'Set config value',
    options: {
        key: {
            description: 'Name of config key',
            type: 'string',
            required: true,
        },
        value: {
            description: 'Config value',
            type: 'string',
            required: true,
        },
    },
    plugins: [
        require('bin/_plugins/outputFormat'),
    ],
    handler: args => {

        const parts = args.key.split('.');
        const option_name = parts.pop();

        const cmd = getAppCommand(args, parts.join('.'));

        if (!cmd) {
            return console.log('command for key not found');
        }

        const option = Cli.get_commnad_option(cmd, option_name);

        if (!option) {
            logger('info', `There is no valid command option for '${args.key}' currently.`);
        }

        if (option && option.action === 'append') {
            args.value = args.value.split(',');
        }

        config.set(`defaults.${args.key}`, args.value);
        return args.value;
    },
});
