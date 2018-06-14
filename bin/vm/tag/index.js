'use strict';

const genericResource = require('bin/generic');
const genericDefaults = require('bin/generic/defaults');


const options = {
    vm: {
        description: 'Virtual machine ID or name',
        type: 'string',
        required: true,
    },
};

const resource = {
    name: 'tag',
    defaultQuery: '[].{id:_id,name:name,flavour:flavour,state:state,processing:processing}',
    url: () => 'vm',
    plugins: genericDefaults.plugins,
    commands: [ 'list', 'show' ],
    title: 'Tag of virtual machine',
    options: options,
};

const category = genericResource({
    name: 'tag',
    defaultQuery: '[].{key:key, value:value}',
    url: args => `vm/${args.vm}/tag`,
    transform: data => Object.entries(data).map(([key, value]) => ({ key, value })),
    commands: ['list'],
    options: resource.options,
});

category.addChild(require('./add')(resource));
category.addChild(require('./delete')(resource));

module.exports = category;
