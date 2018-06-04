'use strict';

const Cli = require('structured-cli');

const defaults = require('bin/generic/defaults');


const options = {
    vm: {
        description: 'VM name or ID'
        ,type: 'string'
        ,required: true
    }
    ,disk: {
        description: 'Disk name or ID'
        ,type: 'string'
        ,required: true
    }
};


module.exports = Cli.createCommand('attach', {
    description: 'Disk attach'
    ,plugins: defaults.plugins
    ,options: options
    ,handler: handleVMDiskAttach
});


function handleVMDiskAttach(args) {

    return args.helpers.api.post(`vm/${args.vm}/hdd`, {
        disk: args.disk
    })
    .then(result => args.helpers.sendOutput(args, result));
}
