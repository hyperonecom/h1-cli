'use strict';

const { Command } = require('../../lib/cli/entity');

module.exports = new Command({
    name: 'select',
    summary: 'Select default project',
    options: [
        { name: 'project', required: true },
    ],
    handler: async (opts) => {
        opts.state.config.set('parameter.project.value', opts.project);
        opts.state.config.store();
        console.error('Project successfully selected.');
    },
});
