'use strict';

const Cli = require('lib/cli');

module.exports = resource => Cli.createCommand('limit', {
    description: 'Cloud limits set for project',
    plugins: resource.plugins,
    dirname: __dirname,
    params: resource.params,
    options: resource.options,
    handler: args => {
        args.query = args.query || '[].{resource:resource,limit:limit,value:value}';
        return args.helpers.api
            .get(`${resource.url(args)}/limit`)
            .then(result => Object
                .entries(result)
                .map(([resource, limits]) => Object
                    .entries(limits)
                    .map(([limit, value]) => ({resource, limit, value}))
                )
            )
            .then(result => args.helpers.sendOutput(args, result));
    },
});
