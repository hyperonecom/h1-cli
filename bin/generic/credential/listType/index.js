'use strict';

const Cli = require('lib/cli');
const genericDefaults = require('bin/generic/defaults');
const {types} = require('lib/credentials');

module.exports = (resource, kind) => Cli.createCommand('list', {
    dirname: __dirname,
    description: `List credential of ${resource.title}`,
    plugins: genericDefaults.plugins,
    options: resource.options,
    context: resource.context,
    handler: async args => {
        const credentials = await args.helpers.api.get(resource.url(args));
        return args.helpers.sendOutput(args, credentials
            .filter(x => types[kind].includes(x.type))
        );
    },
});
