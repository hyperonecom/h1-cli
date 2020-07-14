'use strict';

const { Command } = require('h1-cli-framework');

module.exports = new Command({
    name: 'select',
    summary: 'Select default project',
    options: [
        { name: 'project', required: true },
    ],
    handler: async (opts, cmd) => {
        const optsAll = opts._all || opts;
        const project = optsAll.project;
        cmd.config.set('parameter.project.value', project);
        cmd.config.store();
        return 'Project successfully selected.';
    },
});
