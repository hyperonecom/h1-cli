'use strict';

const Cli = require('structured-cli');

const defaults = require('bin/generic/defaults');


const options = {
    vm: {
        description: 'VM name or ID'
        , type: 'string'
        , required: true
    }
    , disk: {
        description: 'Disk name or ID'
        , type: 'string'
        , required: true
    }
};


module.exports = Cli.createCommand('detach', {
    description: 'Disk detach'
    , plugins: defaults.plugins
    , options: options
    , handler: handleVMDiskDetach
});


function handleVMDiskDetach(args) {

    return args.helpers.api.delete(`vm/${args.vm}/hdd/${args.disk}`)
    .then(result => args.helpers.sendOutput(args, result));
}
