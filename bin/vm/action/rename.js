'use strict';

const Cli = require('structured-cli');

const options = {
    newname: {
        description: 'New name'
        , type: 'string'
        , required: true
    }
};

const params = {
    id: {
        description: 'VM name or ID'
        , type: 'string'
        , required: true
    }
};


module.exports = Cli.createCommand('rename', {
    description: 'VM action: rename'
    , plugins: [
        require('bin/_plugins/loginRequired')
        , require('bin/_plugins/tenantRequired')
        , require('bin/_plugins/outputFormat')
        , require('bin/_plugins/api')
    ]
    , options: options
    , params: params
    , handler: genericVMAction
});


function genericVMAction(args) {

    return args.helpers.api.post(`vm/${args.id}/actions`, {
        name: 'rename'
        , data: {
            newname: args.newname
        }
    })
    .then(result => args.helpers.sendOutput(args, result));
}

