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

const params = {
    id: {
        description: 'VM name or ID',
        type: 'string',
        required: true
    }
};


module.exports = Cli.createCommand('rename', {
    description: 'VM action: rename',
    plugins: genericDefaults.plugins,
    options: options,
    params: params,
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

