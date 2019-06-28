'use strict';
const genericDefaults = require('bin/generic/defaults');
const genericResource = require('bin/generic/root');

const resource = {
    name: 'vault',
    defaultQuery: '[].{id:_id,name:name,size:size,state:state,tags:join(\',\',keys(tag || `{}`) ) }',
    url: () => 'vault',
    plugins: genericDefaults.plugins,
    extraCommands: ['ssh', 'sftp'],
    title: 'Vault',
    credential_types: ['certificate', 'sha512'],
};

const category = genericResource(resource);

category.addChild(require('./create')(resource));
category.addChild(require('./console')(resource));

module.exports = category;
