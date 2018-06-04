'use strict';

const Cli = require('structured-cli');
const fs = require('lib/fs');

const options = {
    name: {
        description: 'VM name'
        ,type: 'string'
        ,required: true
    }
    ,type: {
        description: 'VM type Id'
        ,type: 'string'
        ,required: true
    }
    ,password: {
        description: 'Password'
        ,type: 'string'
    }
    ,username: {
        description: 'Username'
        ,type: 'string'
    }
    ,sshkey: {
        action: 'append'
        ,description: 'SSH key id'
        ,type: 'string'
        ,dest: 'sshKeys'
    }
    ,image: {
        description: 'Image id'
        ,type: 'string'
    }
    ,iso: {
        description: 'Iso id'
        ,type: 'string'
    }

    ,'os-disk-name': {
        description: 'OS disk name'
        ,type: 'string'
    }
    ,'os-disk-type': {
        description: 'OS disk type'
        ,type: 'string'
    }
    ,'os-disk-size': {
        description: 'OS disk size'
        ,type: 'int'
    }
    ,'os-disk': {
        description: 'OS disk: name,service,size'
        ,type: 'string'
    }

    ,network: {
        description: 'Network for VM'
        ,type: 'string'
    }
    ,ip: {
        description: 'IP for VM'
        ,type: 'string'
    }
    ,'no-start': {
        description: 'Do not start vm after creation'
        ,type: 'boolean'
    }
    ,'userdata-file': {
        description: 'Read userdata from file'
        ,type: 'string'
    }
};


module.exports = Cli.createCommand('create', {
    description: 'VM create'
    ,plugins: [
        require('bin/_plugins/loginRequired')
        ,require('bin/_plugins/tenantRequired')
        ,require('bin/_plugins/outputFormat')
        ,require('bin/_plugins/api')
    ]
    ,options: options
    ,handler: handler
});

function handler(args) {

    const newVM = {
        name: args.name
        ,service: args.type
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
            name: osDisk[0] || args['os-disk-name']
            ,service: osDisk[1] || args['os-disk-type']
            ,size: osDisk[2] || args['os-disk-size']
        });
    }

    ['iso', 'image', 'sshKeys'].forEach(param => {
        if (args[param] != null) {
            newVM[param] = args[param];
        }
    });

    let ret = Promise.resolve();

    if (args['userdata-file']) {
        ret = ret
            .then(() => fs.getFileContent(args['userdata-file']))
            .then(content => newVM.userMetadata = content.toString('base64'));
    }

    ret = ret.then(() => args.helpers.api.post('vm', newVM));
    ret = ret.then(result => args.helpers.sendOutput(args, result));

    return ret;
};
