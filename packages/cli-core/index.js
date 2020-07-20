'use strict';
const openapi = require('./lib/openapi');
const { Category, Command } = require('@hyperone/cli-framework');

const buildCli = async (options = {}) => {
    const device = options.device;
    const config = options.config || require('./lib/config')(device);

    await openapi.init(options);

    const program = new Category({
        name: '@hyperone/cli',
        summary: 'Management for cloud services of HyperOne',
        config,
        device,
        extensions: ['@hyperone/cli-ext-root'],
        plugins: [
            require('./plugin/verbose'),
            require('./plugin/formatOutput'),
            require('./plugin/openapi'),
            require('./plugin/api'),
            require('./plugin/noWait'),
            require('./plugin/setDefault'),
        ],
    });

    program.addCommand(new Category({
        name: 'config',
        summary: 'Management of CLI configuration',
        extensions: ['@hyperone/cli-ext-config'],
    }));

    return {
        program,
        run: async argv => program.exec(argv).
            then(result => device.displayResult(result)).
            catch(err => device.displayError(err)),
    };

};

module.exports = {
    openapi,
    buildCli,
    Category,
    Command,
};
