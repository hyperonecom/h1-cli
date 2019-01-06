'use strict';
const Cli = require('lib/cli');
const websocketTerminal = require('lib/websocketTerminal');

module.exports = resource => Cli.createCommand('attach', {
    description: `Attach to terminal of ${resource.title}`,
    dirname: __dirname,
    plugins: resource.plugins,
    options: resource.options,
    handler: async args => await websocketTerminal(`/container/${args.container}/attach`),
});
