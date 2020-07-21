/* eslint-disable no-console */

import { Device } from '@hyperone/cli-framework';

class BrowserDevice extends Device {
    constructor({extensions=[]}) {
        super();
        this.extensions = extensions;
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
        return this.extensions.filter(x => x.name.match(`${pattern}-.*`));
    }
}

export default BrowserDevice;

