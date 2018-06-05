'use strict';

const Cli = require('structured-cli');
const genericDefaults = require('bin/generic/defaults');

const options = {
    identity: {
        description: 'Identity (eg: user@example.org)',
        type: 'string',
        required: true
    }
};

module.exports = resource => Cli.createCommand('revoke', {
    description: `Revoke access rights for ${resource.name.toUpperCase()}`,
    plugins: genericDefaults.plugins,
    params: resource.params,
    options: options,
    handler: args => args.helpers.api
        .delete(`${resource.url(args)}/accessrights/s${args['identity']}`)
        .then(result => args.helpers.sendOutput(args, result))
});
