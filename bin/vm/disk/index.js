'use strict';

const genericResource = require('bin/generic');

const resource = {
    name: 'disk',
    defaultQuery: '[].{id:_id,iops:maximumIOPS,diskname:disk.name,diskId:disk._id,diskName:disk.name,diskType:disk.type,diskSize:disk.size}',
    url: args => `vm/${args['vm-id']}/hdd`,
    options: {
        'vm-id': {
            description: 'VM id',
            type: 'string',
            required: true
        }
    },
    commands: ['list']
};

const category = genericResource(resource);

category.addChild(require('./attach'));
category.addChild(require('./detach'));

module.exports = category;
