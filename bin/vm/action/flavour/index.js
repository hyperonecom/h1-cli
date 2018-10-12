'use strict';

const Cli = require('lib/cli');
const genericDefaults = require('bin/generic/defaults');

const options = {
    ['new-flavour']: {
        description: 'New flavour ',
        type: 'string',
        required: true,
    },
};

module.exports = (resource) => Cli.createCommand('flavour', {
    description: `Change flavour of ${resource.title}`,
    plugins: genericDefaults.plugins,
    options: Object.assign({}, resource.options, options),
    params: resource.params,
    dirname: __dirname,
    handler: args => args.helpers.api
        .post(`vm/${args.id}/actions`, {
            name: 'flavour',
            data: {
                service: args['new-flavour'],
            },
        })
        .then(result => args.helpers.sendOutput(args, result)),
});
