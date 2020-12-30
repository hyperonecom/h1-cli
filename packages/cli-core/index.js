import openapi from './lib/openapi';
import { Category, Command } from '@hyperone/cli-framework';
export { openapi, Category, Command };

import verbose from './plugin/verbose';
import formatOutput from './plugin/formatOutput';
import openapiPlugin from './plugin/openapi';
import api from './plugin/api';
import noWait from './plugin/noWait';
import setDefault from './plugin/setDefault';

import cfg from './lib/config';

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
