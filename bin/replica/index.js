'use strict';

const genericDefaults = require('bin/generic/defaults');
const genericResource = require('bin/generic');

const resource = {
    name: 'replica',
    title: 'Replica',
    defaultQuery: '[].{id:id, name:name, type: flavour, state:state, tags:join(\',\',keys(tag || `{}`) )}',
    url: () => 'replica',
    plugins: genericDefaults.plugins,
};

const category = genericResource(resource);

category.addChild(require('./create')(resource));
category.addChild(require('./disk')(resource));

module.exports = category;
