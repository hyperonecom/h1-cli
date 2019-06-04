'use strict';

const genericDefaults = require('bin/generic/defaults');
const genericResource = require('bin/generic');

const schema = {
    name: {
        description: 'Name',
        type: 'string',
        required: true,
        onCreate: true,
    },
    type: {
        description: 'Type',
        type: 'string',
        required: true,
        onCreate: true,
    },
};

const resource = {
    name: 'reservation',
    defaultQuery: '[].{id:_id,name:name,state:state,resource:resource,type:flavour,assigned:assigned}',
    url: () => 'reservation',
    plugins: genericDefaults.plugins,
    commands: [ 'list', 'show', 'service', 'create', 'tag', 'history', 'delete'],
    title: 'reservation',
    schema,
    dirname: __dirname,
};

const category = genericResource(resource);
category.addChild(require('./assign')(resource));
category.addChild(require('./extend')(resource));

module.exports = category;
