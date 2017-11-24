'use strict';

const Cli = require('structured-cli');

const resource = {
    name: 'dns'
};

const category = Cli.createCategory(resource.name, {
    description: `Manage your ${resource.name.toUpperCase()}`
});

category.addChild(require('./zone'));
category.addChild(require('./record-set'));

module.exports = category;
