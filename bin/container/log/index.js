'use strict';
const Cli = require('lib/cli');

module.exports = resource => Cli.createCommand('log', {
    description: `Logs of ${resource.title}`,
    dirname: __dirname,
    plugins: resource.plugins,
    options: resource.options,
    handler: args => args.helpers.api.api('GET', `${resource.url(args)}/log`).buffer(false)
        .then(resp => resp.pipe(process.stdout)).then(() => {}),
});
