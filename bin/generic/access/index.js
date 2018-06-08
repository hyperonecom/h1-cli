'use strict';

const Cli = require('structured-cli');

module.exports = function(resource) {

    const commands =  ['grant', 'revoke', 'list'];

    const category = Cli.createCategory('access', {
        description: `Manage your ${resource.title} access rights`,
        defaultQuery: '[].{tenant:@}'
    });

    commands.forEach(cmd => category.addChild(require(`./${cmd}`)(resource)));

    return category;
};
