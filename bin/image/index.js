'use strict';

const genericDefaults = require('bin/generic/defaults');
const genericResource = require('bin/generic');

const resource = {
    name: 'image',
    defaultQuery: '[].{id:id, name:name, type:flavour, fileSize:ceil(fileSize), state:state, tags:join(\',\',keys(tag || `{}`) ) }',
    commands: ['show', 'access/resource', 'delete', 'rename', 'history', 'tag', 'transfer', 'service', 'access/project'],
    plugins: genericDefaults.plugins,
    url: () => 'image',
    title: 'Image',
};

const category = genericResource(resource);

category.addChild(require('./create')(resource));
category.addChild(require('./list')(resource));
category.addChild(require('./disk')(resource));

module.exports = category;
