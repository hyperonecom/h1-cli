

import { Command } from '@hyperone/cli-framework';

export default new Command({
    name: 'select',
    summary: 'Select default project',
    options: [
        { name: 'project', required: true },
    ],
    handler: async (opts, cmd) => {
        const optsAll = opts._all || opts;
        const project = optsAll.project;
        await cmd.config.set('parameter.project.value', project);
        await cmd.config.store();
        return 'Project successfully selected.';
    },
});
