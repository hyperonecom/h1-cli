/* eslint-disable no-console */
'use strict';

const packageInfo = require('./../package.json');

for (const pkg of Object.keys(packageInfo.dependencies).filter(x => x.startsWith('h1-cli-ext'))) {
    try {
        require(pkg);
        console.log('Successfully loaded', pkg);
    } catch (err) {
        console.log('Failed to load', pkg);
        console.log(pkg);
        console.log(err);
    }
}
