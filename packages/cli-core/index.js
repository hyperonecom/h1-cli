import openapi from './lib/openapi.js';
import { Category, Command } from '@hyperone/cli-framework';
export { openapi, Category, Command };

import verbose from './plugin/verbose.js';
import formatOutput from './plugin/formatOutput.js';
import openapiPlugin from './plugin/openapi.js';
import api from './plugin/api.js';
import noWait from './plugin/noWait.js';
import setDefault from './plugin/setDefault.js';

import cfg from './lib/config.js';

export async function buildCli(options = {}) {
    const device = options.device;
    const config = options.config || cfg(device);
    try {
        await openapi.init(options);
    } catch (err) {
        return device.displayError(err);
    }

    const program = new Category({
        name: options.device.getName(),
        summary: 'Management for cloud services of HyperOne',
        config,
        device,
        extensions: ['cli-ext-root'],
        plugins: [
            verbose,
            formatOutput,
            openapiPlugin,
            api,
            noWait,
            setDefault,
        ],
    });

    return {
        program,
        run: async argv => program.exec(argv).
            then(result => device.displayResult(result)).
            catch(err => device.displayError(err)),
    };
}
