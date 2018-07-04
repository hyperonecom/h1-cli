'use strict';


const Cli = require('lib/cli');

module.exports = resource => {
    const category = Cli.createCategory('serialport', {
        description: 'Serial Console',
    });

    category.addChild(require('./console')(resource));
    category.addChild(require('./log')(resource));

    return category;
};
