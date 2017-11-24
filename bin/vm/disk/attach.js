'use strict';

const Cli = require('structured-cli');

const defaults = require('bin/generic/defaults');


const options = {
    'vm-id': {
        description: 'VM id',
        type: 'string',
        required: true
    },
    'disk-id': {
        description: 'Disk id',
        type: 'string',
        required: true
    }
};


module.exports = Cli.createCommand('attach', {
    description: 'Disk attach',
    plugins: defaults.plugins,
    options: options,
    handler: handleVMDiskAttach
});


function handleVMDiskAttach(args) {

    return args.helpers.api.post(`vm/${args['vm-id']}/hdd`, {
        disk: args['disk-id']
    })
    .then(result => args.helpers.sendOutput(args, result));
};
