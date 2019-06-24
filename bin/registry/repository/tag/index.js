'use strict';
const genericDefaults = require('bin/generic/defaults');
const genericResource = require('bin/generic');
const text = require('lib/text');

module.exports = (parent) => {

    const resource = {
        name: 'tag',
        defaultQuery: '[].{id:id,created:createdOn}',
        url: args => `${parent.url(args)}/tag`,
        options: parent.options,
        plugins: genericDefaults.plugins,
        commands: ['list'],
        extraCommands: [],
        title: `Tag in ${parent.name}`,
    };

    const deleteDefault = Object.assign({}, resource, {
        options: Object.assign(
            {},
            parent.options,
            {
                [resource.name]: {
                    description: `${text.toTitleCase(resource.title)} ID`,
                    type: 'string',
                    required: true,
                },
            }
        ),
        context: {
            deleteParams: '--registry my-registry --repository my-repository',
        },
    });

    const category = genericResource(resource);

    category.addChild(require('bin/generic/delete')(deleteDefault));

    return category;
};
