'use strict';
const genericDefaults = require('bin/generic/defaults');
const genericResource = require('bin/generic');
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

    const actionDefault = Object.assign({}, resource, {
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
        dirname: __dirname,
    });

    const category = genericResource(resource);

    category.addChild(require('bin/generic/delete')(Object.assign({}, actionDefault, {
        title: 'Tag',
        name: 'tag',
    })));

    return category;
};
