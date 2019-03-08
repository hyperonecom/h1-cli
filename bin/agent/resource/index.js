'use strict';
const genericDefaults = require('bin/generic/defaults');
const genericResource = require('bin/generic');

module.exports = (parent) => {

    const resource = {
        name: 'resource',
        defaultQuery: '[].{id:_id,name:name,project:project,state:state }',
        url: args => `${parent.url(args)}/resource`,
        options: parent.options,
        plugins: genericDefaults.plugins,
        commands: ['list'],
        extraCommands: [],
        title: 'Resource of Agent',
    };
    const category = genericResource(resource);

    category.addChild(require('bin/generic/inspect')(resource));

    return category;
};
