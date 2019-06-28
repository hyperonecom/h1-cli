'use strict';

const genericDefaults = require('bin/generic/defaults');
const genericResource = require('bin/generic/root');

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
        destBody: 'service',
    },
};

const resource = {
    name: 'reservation',
    defaultQuery: '[].{id:_id,name:name,state:state,resource:resource,type:flavour,assigned:assigned}',
    url: () => 'reservation',
    plugins: genericDefaults.plugins,
    title: 'Reservation',
    schema,
    dirname: __dirname,
};

const category = genericResource(resource);
category.addChild(require('./assign')(resource));

module.exports = category;
