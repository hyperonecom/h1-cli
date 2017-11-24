'use strict';

const Cli = require('structured-cli');

const options = {};

const params = {
    id: {
        description: 'VM id',
        type: 'string',
        required: true
    }
};


module.exports = function(action) {
    return Cli.createCommand(action, {
        description: `VM action: ${action}`,
        plugins: [
            require('../../_plugins/loginRequired'),
            require('../../_plugins/tenantRequired'),
            require('../../_plugins/outputFormat'),
            require('../../_plugins/api'),
            require('../../_plugins/interactiveOptions')
        ],
        options: options,
        params: params,
        handler: genericVMAction(action)
    });
};

function genericVMAction(action) {

    return function(args) {
        return args.helpers.api.post(`vm/${args.id}/actions`, {
            name: action
        })
        .then(result => args.helpers.sendOutput(args, result));
    };

}

