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


module.exports = Cli.createCommand('detach', {
    description: 'Disk detach',
    plugins: defaults.plugins,
    options: options,
    handler: handleVMDiskDetach
});


function handleVMDiskDetach(args) {

    return args.helpers.api.delete(`vm/${args['vm-id']}/hdd/${args['disk-id']}`)
    .then(result => args.helpers.sendOutput(args, result));
}
