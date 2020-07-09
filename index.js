'use strict';
const openapi = require('./lib/openapi');
const { buildProgram } = require('./lib/cli/dynamic');

const buildCli = async (options) => {
    await openapi.init(options.openapiUrl);
    return buildProgram(options);
};

const startCli = async (argv, options = {}) => {
    const device = require(`./lib/device/${options.device}`);
    const config = require('./lib/config')(device);
    const cli = await buildCli({
        ...options,
        state: {config},
    });
    const result = await cli.exec(argv);
    return device.displayResult(result);
};

const main = async () => startCli(process.argv.slice(2), {
    openapiUrl: 'https://api.hyperone.com/v2/openapi.json',
    device: 'node',
});

if (require.main === module) {
    main().catch(console.log);
}

module.exports = {
    buildCli,
    startCli,
};
