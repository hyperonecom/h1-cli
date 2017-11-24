'use strict';

const Cli = require('structured-cli');

const options = {
    name: {
        description: 'Disk name',
        type: 'string',
        required: true
    },
    type: {
        description: 'Disk type Id',
        type: 'string',
        required: true
    },
    size: {
        description: 'Disk size in GB',
        type: 'int',
        required: true
    }
};


module.exports = Cli.createCommand('create', {
    description: 'Disk create',
    plugins: [
        require('../_plugins/loginRequired'),
        require('../_plugins/tenantRequired'),
        require('../_plugins/outputFormat'),
        require('../_plugins/api')
    ],
    options: options,
    handler: handleDiskCreate
});


function handleDiskCreate(args) {

    return args.helpers.api.post('disk', {
        name: args.name,
        service: args.type,
        size: args.size
    })
    .then(result => args.helpers.sendOutput(args, result));
};
