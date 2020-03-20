'use strict';

const genericDefaults = require('bin/generic/defaults');
const genericResource = require('bin/generic');

const resource = {
    name: 'disk',
    defaultQuery: '[].{id:id, name:name, type:flavour, size:size, state:state, tags:join(\',\',keys(tag || `{}`) ) }',
    url: args => `storage/project/${args.project}/disk`,
    plugins: genericDefaults.plugins,
    extraCommands: ['resize', 'resume', 'transfer'],
    title: 'Disk',
};

const category = genericResource(resource);

category.addChild(require('./create')(resource));
category.addChild(require('./download')(resource));

module.exports = category;
