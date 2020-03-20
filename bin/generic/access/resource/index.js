'use strict';

const Cli = require('lib/cli');

module.exports = function(resource) {

    const commands =  ['check'];

    const category = Cli.createCategory('access', {
        description: `Manage your ${resource.title} access rights`,
        context: resource.context,
        resource: resource,
    });

    commands.forEach(cmd => category.addChild(require(`./${cmd}`)(resource)));

    return category;
};
