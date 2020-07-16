/* eslint-disable no-console */
'use strict';

const { Device } = require('h1-cli-framework');

class BrowserDevice extends Device {
    constructor() {
        super();
    }
    configLoad() {
        // eslint-disable-next-line no-undef
        const content = window.localStorage.getItem('cli-configuration');

        if (content) {
            return JSON.parse(content);
        }
    }
    configSave(content) {
        // eslint-disable-next-line no-undef
        window.localStorage.setItem('cli-configuration', JSON.stringify(content));
        console.log('Config updated', { content });
    }
    importExtension(pattern) {
        const extensions = [];
        const r = require.context('./node_modules', true, /h1-cli-ext-[a-z-]*\/index\.js$/);
        r.keys().forEach(module => {
            if (module.match(`./${pattern}-.*/index.js`)) {
                const extension = r(module);
                extensions.push(extension);
            }
        });
        return extensions;
    }
}

module.exports = BrowserDevice;

