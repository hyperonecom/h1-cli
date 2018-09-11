'use strict';

const Cli = require('lib/cli');

module.exports = resource => Cli.createCommand('list', {
    description: `Select ${resource.title} context`,
    dirname: __dirname,
    plugins: [
        require('bin/_plugins/loginRequired'),
        require('bin/_plugins/outputFormat'),
        require('bin/_plugins/api'),
    ],
    options: resource.options,
    handler: args => args.helpers.api
        .get(resource.url(args))
        .then(project =>  project.threshold.credits.levels)
        .then(result => args.helpers.sendOutput(args, result)),
});
