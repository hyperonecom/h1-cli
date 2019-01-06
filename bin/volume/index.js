'use strict';

const genericDefaults = require('bin/generic/defaults');
const genericResource = require('bin/generic');

const resource = {
    name: 'volume',
    defaultQuery: '[].{id:_id,name:name,type:type,size:size,state:state,tags:join(\',\',keys(tag || `{}`) ) }',
    url: () => 'volume',
    plugins: genericDefaults.plugins,
    extraCommands: ['resize'],
    title: 'volume',
};

const category = genericResource(resource);

category.addChild(require('./create')(resource));

module.exports = category;
