'use strict';
const genericDefaults = require('bin/generic/defaults');
const genericResource = require('bin/generic');

const resource = {
    name: 'website',
    defaultQuery: '[].{id:_id,name:name,image:image,domains:join(\',\',domain), state:state,tags:join(\',\',keys(tag || `{}`) ) }',
    url: () => 'website',
    plugins: genericDefaults.plugins,
    earlyAdoptersOnly: true,
    extraCommands: ['ssh', 'sftp'],
    title: 'website',
};

const credential_type = ['certificate', 'password'];

const category = genericResource(resource);

category.addChild(require('./create')(resource));
category.addChild(require('./sftp')(resource));

category.addChild(require('../generic/credential')(resource, credential_type));


module.exports = category;
