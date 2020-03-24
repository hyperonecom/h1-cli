'use strict';

const Cli = require('lib/cli');

const category = Cli.createCategory('docker', {
    description: 'Docker credentials helper',
});

category.addChild(require('./get'));
category.addChild(require('./store'));

module.exports = category;
