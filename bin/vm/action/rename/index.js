'use strict';

const Cli = require('lib/cli');
const genericDefaults = require('bin/generic/defaults');

const options = {
    'new-name': {
        description: 'New name',
        type: 'string',
        required: true,
    },
};

module.exports = (resource) => Cli.createCommand('rename', {
    description: `Rename ${resource.title}`,
    plugins: genericDefaults.plugins,
    options: Object.assign({}, resource.options, options),
    params: resource.params,
    dirname: __dirname,
    handler: args => args.helpers.api
        .post(`vm/${args.id}/actions`, {
            name: 'rename',
            data: {
                newname: args['new-name'],
            },
        })
        .then(result => args.helpers.sendOutput(args, result)),
});
