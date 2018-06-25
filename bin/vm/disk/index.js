'use strict';

const genericResource = require('bin/generic');
const text = require('lib/text');


const options = {
    vm: {
        description: 'Virtual machine ID or name',
        type: 'string',
        required: true,
    },
};

const resource = {
    name: 'disk',
    defaultQuery: '[].{id:_id,iops:maximumIOPS,diskname:disk.name,diskId:disk._id,diskName:disk.name,diskType:disk.type,diskSize:disk.size}',
    url: args => `vm/${args.vm}/hdd`,
    options: options,
    commands: ['list'],
    title: 'disk',
};

const childOptions = Object.assign({}, resource.options, {
    disk: {
        description: `${text.toTitleCase(resource.title)} name or ID`,
        type: 'string',
        required: true,
    },
});

const childDefaults = Object.assign({}, resource, {
    options: childOptions,
});

const category = genericResource(resource);

category.addChild(require('./attach')(childDefaults));
category.addChild(require('./detach')(childDefaults));

module.exports = category;
