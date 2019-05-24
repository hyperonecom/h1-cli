'use strict';
const genericDefaults = require('bin/generic/defaults');
const genericResource = require('bin/generic');

const resource = {
    name: 'website',
    defaultQuery: '[].{id:_id,name:name,image:image,domains:join(\',\',domain), state:state,tags:join(\',\',keys(tag || `{}`) ) }',
    url: () => 'website',
    plugins: genericDefaults.plugins,
    earlyAdoptersOnly: true,
    extraCommands: ['ssh', 'sftp', 'start', 'stop', 'credential', 'log'],
    title: 'website',
    credential_types: ['certificate', 'sha512'],
};

const category = genericResource(resource);

category.addChild(require('./create')(resource));
category.addChild(require('./sftp')(resource));


module.exports = category;
