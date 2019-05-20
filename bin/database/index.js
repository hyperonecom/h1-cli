'use strict';
const genericDefaults = require('bin/generic/defaults');
const genericResource = require('bin/generic');


const resource = {
    name: 'database',
    defaultQuery: '[].{id:_id,name:name,type:type,state:state,tags:join(\',\',keys(tag || `{}`) ) }',
    url: () => 'database',
    plugins: genericDefaults.plugins,
    extraCommands: ['start', 'stop', 'credential'],
    earlyAdoptersOnly: true,
    title: 'database',
    credential_types: ['double-sha1'],
};

const category = genericResource(resource);

category.addChild(require('./create')(resource));
category.addChild(require('./shell')(resource));

module.exports = category;
