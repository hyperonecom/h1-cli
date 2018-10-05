'use strict';

const genericDefaults = require('bin/generic/defaults');
const genericResource = require('bin/generic');

const resource = {
    name: 'replica',
    defaultQuery: '[].{id:_id, name:name, state:state, tags:join(\',\',keys(tag || `{}`) )}',
    url: () => 'replica',
    plugins: genericDefaults.plugins,
};

const category = genericResource(resource);

category.addChild(require('./create')(resource));

module.exports = category;
