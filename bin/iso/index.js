'use strict';

const genericDefaults = require('bin/generic/defaults');
const genericResource = require('bin/generic');

const resource = {
    name: 'iso',
    defaultQuery: '[].{id:_id,name:name,size:size,state:state,tags:join(\',\',keys(tag || `{}`) ) }',
    url: () => 'iso',
    plugins: genericDefaults.plugins,
    extraCommands: ['transfer', 'access/project', 'resume'],
    title: 'ISO',
};

const category = genericResource(resource);

category.addChild(require('./create')(resource));

module.exports = category;
