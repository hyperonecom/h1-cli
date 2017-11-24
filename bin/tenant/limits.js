'use strict';

const Cli = require('structured-cli');
const defaults = require('bin/generic/defaults');

module.exports = resource => Cli.createCommand('limit', {
    description: 'Cloud limits set for Tenant'
  , plugins: defaults.plugins
  , params: resource.params
  , handler: args => {
        args.query = args.query || '[].{resource:resource,limit:limit,value:value}';

        return args.helpers.api
            .get(`${args.$node.parent.config.url(args)}/${args.id}/limit`)
            .then(result => Object
                .entries(result)
                .map(([resource, limits]) => Object
                    .entries(limits)
                    .map(([limit, value]) => ({ resource, limit, value }))
                )
            )
            .then(result => args.helpers.sendOutput(args, result));
    }
});
