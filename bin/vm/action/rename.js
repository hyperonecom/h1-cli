'use strict';

const Cli = require('structured-cli');
const genericDefaults = require('bin/generic/defaults');

const options = {
    newname: {
        description: 'New name',
        type: 'string',
        required: true
    }
};

module.exports = (resource) => Cli.createCommand('rename', {
        description: `Rename ${resource.title}`,
        plugins: genericDefaults.plugins,
        options: Object.assign({}, resource.options, options),
        params: resource.params,
        handler: genericVMAction
    });

function genericVMAction(args) {

    return args.helpers.api.post(`vm/${args.id}/actions`, {
        name: 'rename',
        data: {
            newname: args.newname
        }
    })
    .then(result => args.helpers.sendOutput(args, result));
}

