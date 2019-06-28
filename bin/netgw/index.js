'use strict';

const genericResource = require('bin/generic/root');

const schema = {
    name: {
        description: 'Network gateway name or ID',
        type: 'string',
        required: true,
        onCreate: true,
    },
    ip: {
        description: 'Primary IP for the outgoing traffic',
        type: 'string',
        required: true,
        onCreate: true,
    },
};
const resource = {
    name: 'netgw',
    defaultQuery: '[].{id:_id,name:name,IP:primaryIP,network:network, tags:join(\',\',keys(tag || `{}`) ) }',
    url: () => 'netgw',
    title: 'Network gateway',
    schema,
    genericAction: true,
    dirname: __dirname,
    extraCommands: ['create'],
};

const category = genericResource(resource);

category.addChild(require('./create')(resource));

module.exports = category;
