'use strict';
const genericDefaults = require('bin/generic/defaults');
const genericResource = require('bin/generic');
const text = require('lib/text');

module.exports = (parent) => {

    const resource = {
        name: 'repository',
        defaultQuery: '[].{id:_id,name:name,registry:registry,state:state}',
        url: args => `${parent.url(args)}/repository`,
        options: parent.options,
        plugins: genericDefaults.plugins,
        commands: ['list'],
        extraCommands: [],
        title: `Repository of ${parent.title}`,
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

    category.addChild(require('./tag')(childDefaults));

    return category;
};
