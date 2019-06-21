'use strict';
const genericDefaults = require('bin/generic/defaults');
const genericResource = require('bin/generic');
const genericAction = require('bin/generic/action');
const text = require('lib/text');

module.exports = (parent) => {

    const resource = {
        name: 'repository',
        defaultQuery: '[].{id:_id,name:name,project:project,state:state }',
        url: args => `${parent.url(args)}/repository`,
        options: parent.options,
        plugins: genericDefaults.plugins,
        commands: ['list', 'tag'],
        extraCommands: [],
        title: 'Repository of Registry',
    };
    const category = genericResource(resource);

    return category;
};
