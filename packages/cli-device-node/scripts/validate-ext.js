/* eslint-disable no-console */
import info from '../package.json' assert { type: 'json' };

for (const pkg of Object.keys(info.dependencies).filter(x => x.startsWith('@hyperone/cli-ext'))) {
    try {
        await import(pkg);
        console.log('Successfully loaded', pkg);
    } catch (err) {
        console.log('Failed to load', pkg);
        console.log(pkg);
        console.log(err);
    }
}
