'use strict';

const genericDefaults = require('bin/generic/defaults');
const genericResource = require('bin/generic');

const resource = {
    name: 'service',
    description: 'Explore available services',
    defaultQuery: '[].{id:id,resource:resource,type:type,name:name, PLN:billing.price.PLN, period:billing.period}',
    plugins: genericDefaults.plugins,
    url: () => 'service',
    commands: [ 'show' ],
    title: 'Service',
};

const category = genericResource(resource);

category.addChild(require('./list')(resource));

module.exports = category;
