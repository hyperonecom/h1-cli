/* eslint-disable no-console */

import { Device } from '@hyperone/cli-framework';

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
        const r = require.context('./node_modules/@hyperone/', true, /cli-ext-[a-z-]*\/index\.js$/);
        r.keys().forEach(module => {
            if (module.match(`./${pattern}-.*/index.js`)) {
                const extension = r(module);
                extensions.push(extension);
            }
        });
        return extensions;
    }
}

export default BrowserDevice;

