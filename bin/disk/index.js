'use strict';

const genericDefaults = require('bin/generic/defaults');
const genericResource = require('bin/generic');

const resource = {
    name: 'disk',
    defaultQuery: '[].{id:id, name:name, type:flavour, size:size, state:state, tags:join(\',\',keys(tag || `{}`) ) }',
    url: args => {
        console.log(args);
        return 'disk';
    },
    plugins: genericDefaults.plugins,
    extraCommands: ['resize', 'resume', 'transfer'],
    title: 'Disk',
};

const category = genericResource(resource);

category.addChild(require('./create')(resource));
category.addChild(require('./download')(resource));

module.exports = category;
