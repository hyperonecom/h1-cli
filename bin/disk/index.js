'use strict';

const genericDefaults = require('bin/generic/defaults');
const genericResource = require('bin/generic');

const resource = {
    name: 'disk',
    defaultQuery: '[].{id:_id,name:name,type:type,size:size,state:state,tags:join(\',\',keys(tag || `{}`) ) }',
    url: () => 'disk',
    plugins: genericDefaults.plugins,
    extraCommands: ['resize', 'resume', 'transfer', 'download'],
    title: 'disk',
};

const category = genericResource(resource);

category.addChild(require('./create')(resource));

module.exports = category;
