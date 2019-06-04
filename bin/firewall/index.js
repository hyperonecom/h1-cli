'use strict';

const genericResource = require('bin/generic');
const genericDefaults = require('bin/generic/defaults');

const schema = {
    name: {
        description: 'Name',
        type: 'string',
        required: true,
        onCreate: true,
    },
};

const resource = {
    name: 'firewall',
    defaultQuery: '[].{id:_id,name:name,network:network,state:state,tags:join(\',\',keys(tag || `{}`) )}',
    url: () => 'firewall',
    plugins: genericDefaults.plugins,
    extraCommands: ['transfer', 'create'],
    schema,
    dirname: __dirname,
    title: 'firewall',
};

const category = genericResource(resource);

category.addChild(require('./attach')(resource));
category.addChild(require('./detach')(resource));
category.addChild(require('./rule')('ingress', resource));
category.addChild(require('./rule')('egress', resource));

module.exports = category;
