'use strict';

const genericDefaults = require('bin/generic/defaults');
const genericResource = require('bin/generic');

const resource = {
    name: 'logs',
    defaultQuery: '[].{id:_id,name:name,retention:retention}',
    commands: ['show', 'delete', 'rename', 'list', 'history'],
    plugins: genericDefaults.plugins,
    url: () => 'logArchive',
    title: 'logs archive',
};

const category = genericResource(resource);

category.addChild(require('./create')(resource));
category.addChild(require('./stream')(resource));
category.addChild(require('./read')(resource));

module.exports = category;
