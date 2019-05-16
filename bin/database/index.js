'use strict';
const genericDefaults = require('bin/generic/defaults');
const genericResource = require('bin/generic');


const resource = {
    name: 'database',
    defaultQuery: '[].{id:_id,name:name,type:type,state:state,tags:join(\',\',keys(tag || `{}`) ) }',
    url: () => 'database',
    plugins: genericDefaults.plugins,
    extraCommands: ['start', 'stop'],
    earlyAdoptersOnly: true,
    title: 'database',
};
const credential_type = ['password'];

const category = genericResource(resource);

category.addChild(require('./create')(resource));
category.addChild(require('./shell')(resource));

category.addChild(require('../generic/credential')(resource, credential_type));

module.exports = category;
