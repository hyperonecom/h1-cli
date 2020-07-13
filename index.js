'use strict';
const openapi = require('./lib/openapi');
const { Category, Command } = require('./lib/cli/entity');

const buildCli = async (options = {}) => {
    const device = options.device;
    const config = options.config || require('./lib/config')(device);

    await openapi.init(options.openapiUrl);

    const program = new Category({
        name: 'h1-cli',
        summary: 'Management for cloud services of HyperOne',
        config,
        device,
        extensions: ['h1-cli-root'],
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
        extensions: ['h1-cli-config'],
    }));

    return {
        program,
        run: async argv => program.exec(argv).
            then(device.displayResult).
            catch(device.displayError),
    };

};

module.exports = {
    openapi,
    buildCli,
    Category,
    Command,
};
