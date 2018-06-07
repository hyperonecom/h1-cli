'use strict';

const Cli = require('structured-cli');

const options = {};

const params = {
    id: {
        description: 'VM name or ID',
        type: 'string',
        required: true
    }
};


module.exports = function(action) {
    return Cli.createCommand(action, {
        description: `VM action: ${action}`,
        plugins: [
            require('bin/_plugins/loginRequired'),
            require('bin/_plugins/projectRequired'),
            require('bin/_plugins/outputFormat'),
            require('bin/_plugins/api'),
            require('bin/_plugins/interactiveOptions')
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

