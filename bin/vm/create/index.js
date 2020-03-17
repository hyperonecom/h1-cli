'use strict';

const Cli = require('lib/cli');
const fs = require('lib/fs');
const { hashPassword } = require('lib/credentials');
const genericDefaults = require('bin/generic/defaults');
const logger = require('lib/logger');
const DEFAULT_IMAGE = 'debian';
const complete = require('lib/complete');

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
        complete: complete.completeService('vm'),
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
        description: 'SSH key ID or name that allows access. If not provided, use all user SSH keys.',
        type: 'string',
        dest: 'sshKeys',
    },
    image: {
        description: 'Image ID or name. If not given and not used "no-image" parameter, "debian" will be used.',
        type: 'string',
    },
    'no-image': {
        description: 'Do not use image. Parameter excludes the use of "image" parameter and disable default image.',
        type: 'boolean',
    },
    iso: {
        description: 'ISO ID or name',
        type: 'string',
    },
    'os-disk-name': {
        description: 'OS disk name. Parameter excludes the use of "os-disk" parameter.',
        type: 'string',
    },
    'os-disk-type': {
        description: 'OS disk type. Parameter excludes the use of "os-disk" parameter.',
        type: 'string',
        complete: complete.completeService('disk'),
    },
    'os-disk-size': {
        description: 'OS disk size. Parameter excludes the use of "os-disk" parameter.',
        type: 'int',
    },
    'os-disk': {
        description: 'OS disk: [[name,] type, size | id]',
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
                const services = await args.helpers.api.get('/service/');
                const vm_service = services.find(service => service.name === args.type || service._id === args.type);
                if (!vm_service) {
                    throw Cli.error.notFound(`Given flavour '${args.type}' of the given virtual machine variant was not found. Check the value of the --type parameter and try again.`);
                }
                netadp.service = vm_service.data.netadp[0].service;
            }

            if (args.ip) {
                netadp.ip = args.ip;
            }

            newVM.netadp = [netadp];
        }

        if (!args['no-image']) {
            newVM.image = args.image || DEFAULT_IMAGE;
        } else if (args.image) {
            throw Cli.error.cancelled('Parameters \'no-image\' and \'image\' are mutually exclusive.');
        }

        if (args['no-start']) {
            newVM.boot = false;
        }

        newVM.disk = [];
        if (args['os-disk']) {
            Cli.mutually_exclusive_validate(args, 'os-disk', 'os-disk-name');
            Cli.mutually_exclusive_validate(args, 'os-disk', 'os-disk-type');
            Cli.mutually_exclusive_validate(args, 'os-disk', 'os-disk-size');

            const osDisk = args['os-disk'] ? args['os-disk'].split(',') : [];
            if (osDisk.length == 1) {
                newVM.disk.push({
                    id: osDisk[0],
                });
            } else if (osDisk.length == 2) {
                newVM.disk.push({
                    name: `${args.name}-os`,
                    service: osDisk[0],
                    size: osDisk[1],
                });
            } else if (osDisk.length == 3) {
                newVM.disk.push({
                    name: osDisk[0],
                    service: osDisk[1],
                    size: osDisk[2],
                });
            } else {
                throw Cli.error.cancelled(`Invalid format of 'os-disk': ${args['os-disk']}`);
            }
        } else if (args['os-disk-name'] || args['os-disk-type'] || args['os-disk-size']) {
            newVM.disk.push({
                name: args['os-disk-name'] || `${args.name}-os`,
                service: args['os-disk-type'],
                size: args['os-disk-size'],
            });
        } else if (newVM.image) {
            const image = await args.helpers.api.get(`image/${newVM.image}`);
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

        ['iso', 'sshKeys'].forEach(param => {
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

        if (!args['ssh-file'] && !args.sshKeys) {
            try {
                const keys = await args.helpers.api.get('user/me/credential/certificate');
                newVM.sshKeys = keys.filter(x => x.type === 'ssh').map(x => x.id);
            } catch (err) {
                logger('warn', 'Unable to discovery user SSH keys. No SSH key will be used. Use the "--ssh-file" or "--ssh" parameter to specify one.');
            }
        }

        if (args['userdata-file']) {
            const content = await fs.getFileContent(args['userdata-file']);
            newVM.userMetadata = content.toString('base64');
        }

        return args.helpers.api.post('vm', newVM)
            .then(result => args.helpers.sendOutput(args, result));
    },
});
