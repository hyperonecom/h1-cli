'use strict';

const Cli = require('structured-cli');

const text = require('lib/text');

module.exports = (resource, action) => Cli.createCommand(action, {
    description: `${text.toTitleCase(action)} ${resource.title}`,
    plugins: resource.plugins,
    options: resource.options,
    params: resource.params,
    handler: args => args.helpers.api
        .post(`${resource.url(args)}/actions`, { name: action })
        .then(result => args.helpers.sendOutput(args, result)),
});
