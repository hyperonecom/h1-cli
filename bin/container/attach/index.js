'use strict';
const Cli = require('lib/cli');
const websocketTerminal = require('lib/websocketTerminal');

module.exports = resource => Cli.createCommand('attach', {
    description: `Attach to terminal of ${resource.title}`,
    dirname: __dirname,
    plugins: resource.plugins,
    options: resource.options,
    handler: args => args.helpers.api
        .redirect_url(`${resource.url(args)}/attach`, {
            ws:1,
            height: process.stdout.getWindowSize()[0],
            width: process.stdout.getWindowSize()[1],
        })
        .then(url => websocketTerminal(url, '')),
});
