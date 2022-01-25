/* eslint-disable no-console */

import { Device } from '@hyperone/cli-framework';
import openapiExt from '@hyperone/cli-ext-root-openapi-generator';
import { get, set, unset } from '@hyperone/cli-core/lib/transform';

class BrowserDevice extends Device {
    constructor(options = {}) {
        super();
        this.extensions = options.extensions || [
            openapiExt,
        ];
        this.config = undefined;
    }
    configLoad() {
        // eslint-disable-next-line no-undef
        if (typeof this.config === 'undefined') {
            const content = window.localStorage.getItem('cli-configuration');

            if (content) {
                this.config = JSON.parse(content);
            } else {
                this.config = {
                    parameter: {
                        location: {
                            value: 'pl-waw-1',
                        },
                    },
                };
            }
        }
        return this.config;
    }
    configStore() {
        // eslint-disable-next-line no-undef
        window.localStorage.setItem('cli-configuration', JSON.stringify(this.config));
    }
    async configGet(key, defaultValue) {
        return get(await this.configLoad(), key, defaultValue);
    }
    async configSet(key, value) {
        return set(await this.configLoad(), key, value);
    }
    async configUnset(key) {
        return unset(await this.configLoad(), key);
    }
    importExtension(pattern) {
        return this.extensions.filter(x => x.name.match(`${pattern}-.*`));
    }
}

export default BrowserDevice;

