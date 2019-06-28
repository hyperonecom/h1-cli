'use strict';

const genericDefaults = require('bin/generic/defaults');
const genericResource = require('bin/generic/root');

const resource = {
    name: 'image',
    defaultQuery: '[].{id:_id,name:name,fileSize:ceil(fileSize),created:createdOn,state:state,tags:join(\',\',keys(tag || `{}`) ) }',
    commands: ['access/project'],
    plugins: genericDefaults.plugins,
    url: () => 'image',
    title: 'Image',
};

const category = genericResource(resource);

category.addChild(require('./create')(resource));
category.addChild(require('./list')(resource));
category.addChild(require('./disk')(resource));

module.exports = category;
