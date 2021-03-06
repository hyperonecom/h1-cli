'use strict';

const Cli = require('lib/cli');

const category = Cli.createCategory('config', {
    description: 'Manage config of CLI',
    priority: 25,
});

category.addChild(require('./show'));
category.addChild(require('./set'));
category.addChild(require('./get'));
category.addChild(require('./unset'));
category.addChild(require('./autocomplete'));

module.exports = category;
