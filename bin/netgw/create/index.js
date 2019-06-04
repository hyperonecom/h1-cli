'use strict';

const Cli = require('lib/cli');
const genericDefaults = require('bin/generic/defaults');
const pickBy = require('lodash/pickBy');

module.exports = resource => Cli.createCommand('create', {
    description: 'Network gateway create',
    plugins: genericDefaults.plugins,
    dirname: __dirname,
    genericOptions: ['tag'],
    options: Object.assign(
        {},
        resource.options,
        pickBy(resource.schema, field => field.onCreate)
    ),
    params: resource.params,
    handler: (args) => args.helpers.api
        .post('netgw', {
            name: args.name,
            public: { ip: args.ip },
            tag: require('lib/tags').createTagObject(args.tag),
        }).then(result => args.helpers.sendOutput(args, result)),
});
