'use strict';
const genericDefaults = require('bin/generic/defaults');
const genericResource = require('bin/generic');

const schema = {
    name: {
        description: 'Agent name',
        type: 'string',
        required: true,
        onCreate: true,
    },
    tags: {
        virtual: true,
        onCreate: true,
        onUpdate: false,
    },
};

const resource = {
    name: 'vmhost',
    defaultQuery: '[].{id:id, name:name, type:flavour, state:state, tags:join(\',\',keys(tag || `{}`) ) }',
    url: () => 'vmhost',
    plugins: genericDefaults.plugins,
    extraCommands: ['create', 'update'],
    dirname: __dirname,
    earlyAdoptersOnly: true,
    title: 'Dedicated host',
    schema,
};

const category = genericResource(resource);

category.addChild(require('bin/generic/inspect')(resource));

module.exports = category;
