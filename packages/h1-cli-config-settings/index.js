'use strict';

const { Category, Command } = require('../../lib/cli/entity');

module.exports = {
    name: require('./package.json').name,
    version: require('./package.json').version,
    load: async (parent) => {
        const cmd = new Category({
            name: 'settings',
            summary: 'Manage settings of CLI',
        });

        cmd.addCommand(new Command({
            name: 'get',
            summary: 'Get setting value',
            options: [
                { name: 'key', required: true },
            ],
            handler: (opts) => parent.state.config.get(opts.key),
        }));

        cmd.addCommand(new Command({
            name: 'dump',
            summary: 'Dump all settings values',
            options: [
                { name: 'key', required: true },
                { name: 'value', required: true },
            ],
            handler: () => parent.state.config.all(),
        }));

        cmd.addCommand(new Command({
            name: 'set',
            summary: 'Set setting value',
            options: [
                { name: 'key' },
                { name: 'value' },
            ],
            handler: (opts) => {
                const { config } = parent.state;
                config.set(opts.name, opts.value);
                config.store();
            },
        }));

        parent.addCommand(cmd);
    },
};
