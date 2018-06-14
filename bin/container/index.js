'use strict';

const genericDefaults = require('bin/generic/defaults');
const genericAction = require('bin/generic/action');
const genericResource = require('bin/generic');

const resource = {
    name: 'container',
    defaultQuery: '[].{id:_id,name:name,state:state,processing:processing}',
    url: () => 'container',
    plugins: genericDefaults.plugins,
    extraCommands: ['rename'],
    title: 'container',
};

const childDefaults = Object.assign({}, resource, {
    options: {
        container: {
            description: `${resource.title} ID or name`,
            type: 'string',
            required: true,
            dest: 'id',
        },
    },
    url: args => `${resource.url(args)}/${args.id}`,
});

const category = genericResource(resource);

category.addChild(require('./create')(resource));
category.addChild(genericAction(childDefaults, 'stop'));
category.addChild(genericAction(childDefaults, 'start'));
category.addChild(require('./logs')(childDefaults));

module.exports = category;
