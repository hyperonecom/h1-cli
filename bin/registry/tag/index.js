'use strict';
const genericDefaults = require('bin/generic/defaults');
const genericResource = require('bin/generic');
const genericAction = require('bin/generic/action');
const text = require('lib/text');

module.exports = (parent) => {

    const resource = {
        name: 'tag',
        defaultQuery: '[].{id:_id,name:name,project:project,state:state}',
        url: args => `${parent.url(args)}/tag`,
        options: parent.options,
        plugins: genericDefaults.plugins,
        commands: ['list'],
        extraCommands: [],
        title: 'Tags of Repository',
    };

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

    const category = genericResource(resource);

    category.addChild(require('bin/generic/delete')(Object.assign({}, childDefaults, {
        url: args => `${childDefaults.url(args)}/tag`,
        title: 'Tag',
        name: 'tag',
    })));

    return category;
};
