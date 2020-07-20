/* eslint-disable no-console */

import packageInfo from './../package.json';

for (const pkg of Object.keys(packageInfo.dependencies).filter(x => x.startsWith('@hyperone/cli-ext'))) {
    try {
        require(pkg);
        console.log('Successfully loaded', pkg);
    } catch (err) {
        console.log('Failed to load', pkg);
        console.log(pkg);
        console.log(err);
    }
}
