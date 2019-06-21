'use strict';
const genericDefaults = require('bin/generic/defaults');
const genericResource = require('bin/generic');

module.exports = (parent) => {

    const resource = {
        name: 'repository',
        defaultQuery: '[].{id:_id,name:name,project:project,state:state }',
        url: args => `${parent.url(args)}/repository`,
        options: parent.options,
        plugins: genericDefaults.plugins,
        commands: ['list'],
        extraCommands: [],
        title: 'Repository of Registry',
    };
    const category = genericResource(resource);

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

    category.addChild(genericAction(childDefaults, 'tag'));

    return category;
};
