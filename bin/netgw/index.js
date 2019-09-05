'use strict';

const genericResource = require('bin/generic');

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
    tags: {
        virtual: true,
        onCreate: true,
        onUpdate: true,
    },
};
const resource = {
    name: 'netgw',
    defaultQuery: '[].{id:id,name:name,IP:primaryIP,network:network, tags:join(\',\',keys(tag || `{}`) ) }',
    url: () => 'netgw',
    title: 'Network gateway',
    schema,
    dirname: __dirname,
    extraCommands: ['create'],
};

const category = genericResource(resource);

category.addChild(require('./create')(resource));
category.addChild(require('./detach')(resource));
category.addChild(require('./attach')(resource));

module.exports = category;
