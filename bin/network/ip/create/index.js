'use strict';

const Cli = require('lib/cli');

module.exports = resource => Cli.createCommand('create', {
    dirname: __dirname,
    description: `Create ${resource.title}`,
    plugins: resource.plugins,
    options: resource.options,
    handler: (args) => args.helpers.api
        .post(`network/${args.network}/ip`, { })
        .then(result => args.helpers.sendOutput(args, result)),
});
