'use strict';

const genericDefaults = require('bin/generic/defaults');
const genericResource = require('bin/generic');

const resource = {
    name: 'image',
    defaultQuery: '[].{id:_id,name:name,fileSize:ceil(fileSize),created:createdOn,state:state,tags:join(\',\',keys(tag || `{}`) ) }',
    commands: ['show', 'delete', 'rename', 'history', 'tag', 'transfer', 'service'],
    plugins: genericDefaults.plugins,
    url: () => 'image',
    title: 'image',
};

const category = genericResource(resource);

category.addChild(require('./create')(resource));
category.addChild(require('./list')(resource));
category.addChild(require('./disk')(resource));

category.addChild(require('bin/generic/access')(resource));

module.exports = category;
