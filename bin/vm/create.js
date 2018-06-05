'use strict';

const Cli = require('structured-cli');
const fs = require('lib/fs');
const genericDefaults = require('bin/generic/defaults');

const options = {
    name: {
        description: 'VM name',
        type: 'string',
        required: true
    },
    type: {
        description: 'VM type Id',
        type: 'string',
        required: true
    },
    password: {
        description: 'Password',
        type: 'string'
    },
    username: {
        description: 'Username',
        type: 'string'
    },
    ssh: {
        action: 'append',
        description: 'SSH key Id or name that allows access.',
        type: 'string',
        dest: 'sshKeys'
    },
    image: {
        description: 'Image id',
        type: 'string'
    },
    iso: {
        description: 'Iso id',
        type: 'string'
    },

    'os-disk-name': {
        description: 'OS disk name',
        type: 'string'
    },
    'os-disk-type': {
        description: 'OS disk type',
        type: 'string'
    },
    'os-disk-size': {
        description: 'OS disk size',
        type: 'int'
    },
    'os-disk': {
        description: 'OS disk: name,service,size',
        type: 'string'
    },

    network: {
        description: 'Network for VM',
        type: 'string'
    },
    ip: {
        description: 'IP for VM',
        type: 'string'
    },
    'no-start': {
        description: 'Do not start vm after creation',
        type: 'boolean'
    },
    'userdata-file': {
        description: 'Read userdata from file',
        type: 'string'
    }
};


const handler = async (args) => {

    const newVM = {
        name: args.name,
        service: args.type
    };

    if (args.password) {
        newVM.password = args.password;
    }

    if (args.username) {
        newVM.username = args.username;
    }

    if (args.network || args.ip) {
        const netadp = {};

        if (args.network) {
            netadp.network = args.network;
            netadp.service = 'private';
        } else {
            netadp.service = 'public';
        }

        if (args.ip) {
            netadp.ip = args.ip;
        }

        newVM.netadp = [netadp];
    }

    if (args['no-start']) {
        newVM.boot = false;
    }

    if (args['os-disk'] || args['os-disk-name'] && args['os-disk-type'] && args['os-disk-size']) {
        newVM.disk = [];

        let osDisk = args['os-disk'] ? args['os-disk'].split(',') : [];
        osDisk = osDisk.length === 2 ? [ `${args.name}-os`, ...osDisk ] : osDisk;
        newVM.disk.push({
            name: osDisk[0] || args['os-disk-name'],
            service: osDisk[1] || args['os-disk-type'],
            size: osDisk[2] || args['os-disk-size']
        });
    }

    ['iso', 'image', 'sshKeys'].forEach(param => {
        if (args[param] != null) {
            newVM[param] = args[param];
        }
    });

    if (args['userdata-file']) {
        const content = await fs.getFileContent(args['userdata-file']);
        newVM.userMetadata = content.toString('base64');
    }

    return args.helpers.api.post('vm', newVM)
        .then(result => args.helpers.sendOutput(args, result));
};

module.exports = Cli.createCommand('create', {
    description: 'VM create',
    plugins: genericDefaults.plugins,
    options: options,
    handler: handler
});
