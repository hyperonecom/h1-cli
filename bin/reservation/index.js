'use strict';

const genericDefaults = require('bin/generic/defaults');
const genericResource = require('bin/generic');

const schema = {
    name: {
        description: 'Reservation name',
        type: 'string',
        required: true,
        onCreate: true,
    },
    type: {
        description: 'Reservation type',
        type: 'string',
        required: true,
        onCreate: true,
        destBody: 'service',
    },
    tags: {
        virtual: true,
        onCreate: true,
        onUpdate: true,
    },
};

const resource = {
    name: 'reservation',
    defaultQuery: '[].{id:id,name:name,state:state,resource:resource,type:flavour,assigned:assigned}',
    url: () => 'reservation',
    plugins: genericDefaults.plugins,
    commands: [ 'list', 'show', 'service', 'create', 'tag', 'history', 'delete'],
    title: 'Reservation',
    schema,
    dirname: __dirname,
};

const category = genericResource(resource);
category.addChild(require('./assign')(resource));
category.addChild(require('./extend')(resource));

module.exports = category;
