'use strict';

const genericResource = require('bin/generic');

module.exports = parent => {

    const resource = {
        name: 'transfer',
        description: `Manage your transfer for ${parent.title}`,
        defaultQuery: '[].{id:id,name:name}',
        url: args => `${parent.url(args)}/transfer`,
        params: parent.params,
        options: parent.options,
        commands: ['show', 'list'],
        plugins: parent.plugins,
        title: 'transfer',
    };

    const category = genericResource(resource);

    category.addChild(require('./accept')(resource));

    return category;
};

