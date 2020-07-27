

import { Category } from '@hyperone/cli-framework';

export default {
    name: require('./package.json').name,
    version: require('./package.json').version,
    load: async (parent) => parent.loadHook.push(() => {
        parent.addCommand(new Category({
            name: 'config',
            summary: 'Management of CLI configuration',
            extensions: ['cli-ext-config'],
        }));
    }),
};
