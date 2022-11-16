import { Category } from '@hyperone/cli-framework';
import info from './package.json' assert { type: 'json' };

export default {
    name: info.name,
    version: info.version,
    load: async (parent) => parent.loadHook.push(() => {
        parent.addCommand(new Category({
            name: 'config',
            summary: 'Management of CLI configuration',
            extensions: ['cli-ext-config'],
        }));
    }),
};
