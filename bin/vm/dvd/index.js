'use strict';

const genericResource = require('bin/generic');
const genericDefaults = require('bin/generic/defaults');

const options = {
    vm: {
        description: 'Virtual machine name or ID',
        type: 'string',
        required: true,
    },
};

const resource = {
    name: 'dvd',
    defaultQuery: '[].{id:_id,iso:iso._id,isoname:iso.name}',
    url: args => `vm/${args.vm}/dvddrive`,
    commands: ['list'],
    plugins: genericDefaults.plugins,
    options: options,
    title: 'DVD',
    context: {
        listParams: '--vm my-vm',
    },
};

const category = genericResource(resource);

category.addChild(require('./insert/insert')(resource));
category.addChild(require('./eject/eject')(resource));

module.exports = category;
