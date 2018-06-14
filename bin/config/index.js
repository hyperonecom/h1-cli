'use strict';

const Cli = require('lib/cli');

const category = Cli.createCategory('config', {
    description: 'Manage config of CLI',
});

category.addChild(require('./show'));
category.addChild(require('./set'));
category.addChild(require('./get'));
category.addChild(require('./unset'));

module.exports = category;
