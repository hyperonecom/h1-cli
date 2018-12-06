'use strict';

const Cli = require('lib/cli');

const options = {
    name: {
        description: 'ISO name',
        type: 'string',
        required: true,
    },
    organisation: {
        description: 'Organisation ID or name',
        type: 'string',
        required: true,
    },
};

module.exports = resource => Cli.createCommand('create', {
    description: `Create ${resource.title}`,
    genericOptions: ['tag'],
    dirname: __dirname,
    plugins: resource.plugins,
    options: options,
    handler: args => args.helpers.api
        .post('project', {
            name: args.name,
            organisation: args.organisation,
            tag: require('lib/tags').createTagObject(args.tag),
        })
        .then(result => args.helpers.sendOutput(args, result)),
});
