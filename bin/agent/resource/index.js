'use strict';
const genericDefaults = require('bin/generic/defaults');
const genericResource = require('bin/generic');
const genericAction = require('bin/generic/action');``
const text = require('lib/text');

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

    const childDefaults = Object.assign({}, resource, {
        options: Object.assign(
            {},
            parent.options,
            {
                [resource.name]: {
                    description: `${text.toTitleCase(resource.title)} ID or name`,
                    type: 'string',
                    required: true,
                },
            }
        ),
        url: args => `${resource.url(args)}/${args[resource.name]}`,
        dirname: __dirname,
    });

    category.addChild(genericAction(childDefaults, 'recreate'));
    return category;
};
