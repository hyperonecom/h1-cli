'use strict';

const Cli = require('lib/cli');
const fs = require('lib/fs');
const { hashPassword } = require('lib/credentials');
const genericDefaults = require('bin/generic/defaults');

const options = {
    name: {
        description: 'Virtual machine name',
        type: 'string',
        required: true,
    },
    type: {
        description: 'Virtual machine type name or ID',
        type: 'string',
        required: true,
    },
    password: {
        description: 'Initial administrator user password',
        type: 'string',
    },
    username: {
        description: 'Initial administrator username',
        type: 'string',
    },
    ssh: {
        action: 'append',
        description: 'SSH key ID or name that allows access.',
        type: 'string',
        dest: 'sshKeys',
    },
    image: {
        description: 'Image ID or name',
        type: 'string',
        defaultValue: 'debian',
    },
    iso: {
        description: 'ISO ID or name',
        type: 'string',
    },
    'os-disk-name': {
        description: 'OS disk name',
        type: 'string',
    },
    'os-disk-type': {
        description: 'OS disk type',
        type: 'string',
    },
    'os-disk-size': {
        description: 'OS disk size',
        type: 'int',
    },
    'os-disk': {
        description: 'OS disk: [name,] type, size',
        type: 'string',
    },
    network: {
        description: 'Network ID or name to attach',
        type: 'string',
    },
    ip: {
        description: 'IP address for Virtual machine',
        type: 'string',
    },
    'no-start': {
        description: 'Do not start Virtual machine after creation',
        type: 'boolean',
    },
    'userdata-file': {
        description: 'Read userdata from file',
        type: 'string',
    },
    'ssh-file': {
        action: 'append',
        description: 'Read SSH key from file',
        type: 'string',
    },
};

module.exports = resource => Cli.createCommand('create', {
    description: `Create ${resource.title}`,
    plugins: genericDefaults.plugins,
    genericOptions: ['tag'],
    options: options,
    dirname: __dirname,
    priority: 25,
    handler: async (args) => {
        const newVM = {
            name: args.name,
            service: args.type,
            tag: require('lib/tags').createTagObject(args.tag),
        };

        if (args.password) {
            newVM.password = await hashPassword(args.password, ['unix']);
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
        newVM.disk = [];
        if (args['os-disk'] || args['os-disk-name'] && args['os-disk-type'] && args['os-disk-size']) {

            let osDisk = args['os-disk'] ? args['os-disk'].split(',') : [];
            osDisk = osDisk.length === 2 ? [`${args.name}-os`, ...osDisk] : osDisk;
            newVM.disk.push({
                name: osDisk[0] || args['os-disk-name'],
                service: osDisk[1] || args['os-disk-type'],
                size: osDisk[2] || args['os-disk-size'],
            });
        } else {
            const image = await args.helpers.api.get(`image/${args.image}`);
            try {
                const dsc = JSON.parse(image.description);
                newVM.disk.push({
                    name: `${args.name}-os`,
                    service: dsc.recommended && dsc.recommended.disk && dsc.recommended.disk.service || 'ssd',
                    size: dsc.recommended && dsc.recommended.disk && dsc.recommended.disk.size || 25,
                });
            } catch (err) {
                newVM.disk.push({
                    name: `${args.name}-os`,
                    service: 'ssd',
                    size: 25,
                });
            }
        }

        ['iso', 'image', 'sshKeys'].forEach(param => {
            if (args[param] != null) {
                newVM[param] = args[param];
            }
        });

        if (args['ssh-file']) {
            const sshKeys = newVM.sshKeys || [];
            sshKeys.push(
                ...await Promise.all(
                    args['ssh-file'].map(fs.getFileContent)
                ).then(keys => keys.map(x => x.toString('utf-8')))
            );
            newVM.sshKeys = sshKeys;
        }

        if (!args['ssh-file'] && !args.ssh) {
            const keys = await args.helpers.api.get('user/me/credential/certificate');
            newVM.sshKeys = keys.filter(x => x.type === 'ssh').map(x => x.id);
        }

        if (args['userdata-file']) {
            const content = await fs.getFileContent(args['userdata-file']);
            newVM.userMetadata = content.toString('base64');
        }

        return args.helpers.api.post('vm', newVM)
            .then(result => args.helpers.sendOutput(args, result));
    },
});
