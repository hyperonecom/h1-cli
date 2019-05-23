'use strict';
const genericDefaults = require('bin/generic/defaults');
const genericResource = require('bin/generic');

const resource = {
    name: 'vault',
    defaultQuery: '[].{id:_id,name:name,size:size,state:state,tags:join(\',\',keys(tag || `{}`) ) }',
    url: () => 'vault',
    plugins: genericDefaults.plugins,
    extraCommands: ['resize', 'ssh', 'sftp', 'start', 'stop'],
    title: 'Vault',
};

const credential_type = ['certificate', 'password'];

const category = genericResource(resource);

category.addChild(require('./create')(resource));

category.addChild(require('../generic/credential')(resource, credential_type));

category.addChild(require('./console')(resource));

module.exports = category;
