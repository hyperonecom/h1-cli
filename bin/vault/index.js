'use strict';

const genericDefaults = require('bin/generic/defaults');
const genericResource = require('bin/generic');
const genericAction = require('bin/generic/action');

const resource = {
    name: 'vault',
    defaultQuery: '[].{id:_id,name:name,size:size,state:state,tags:join(\',\',keys(tag || `{}`) ) }',
    url: () => 'vault',
    plugins: genericDefaults.plugins,
    extraCommands: ['resize'],
    title: 'Vault',
};

const actionDefault = Object.assign({}, resource, {
    dirname: __dirname,
});
const credential_type = ['certificate', 'password'];

const category = genericResource(resource);

category.addChild(require('./create')(resource));

category.addChild(require('../generic/credential')(resource, credential_type));

category.addChild(require('./ssh')(resource));
category.addChild(require('./console')(resource));
category.addChild(genericAction(actionDefault, 'stop'));
category.addChild(genericAction(actionDefault, 'start'));

module.exports = category;
