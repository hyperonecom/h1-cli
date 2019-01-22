'use strict';

const genericDefaults = require('bin/generic/defaults');
const genericResource = require('bin/generic');

const resource = {
    name: 'reservation',
    defaultQuery: '[].{id:_id,name:name,state:state,resource:resource,type:flavour,assigned:assigned}',
    url: () => 'reservation',
    plugins: genericDefaults.plugins,
    commands: [ 'list', 'show', 'service', 'tag', 'history', 'delete'],
    title: 'reservation',
};

const category = genericResource(resource);
category.addChild(require('./create')(resource));
category.addChild(require('./assign')(resource));
category.addChild(require('./extend')(resource));

module.exports = category;
