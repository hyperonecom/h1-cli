'use strict';

const genericResource = require('bin/generic');
const text = require('lib/text');

module.exports = parent => {

    const options = Object.assign({}, parent.options, {
        [parent.name]: {
            description: `${text.toTitleCase(parent.title)} ID or name`,
            type: 'string',
            required: true,
        },
    });

    const resource = {
        name: 'tag',
        title: `Tag of ${parent.title}`,
        defaultQuery: '[].{key:key, value:value}',
        url: args => `${resource.url(args)}/${args[resource.name]}/tag`,
        transform: data => Object.entries(data).map(([key, value]) => ({key, value})),
        commands: ['list'],
        options: options,
        priority: 80,
        context: {
            type: parent.name,
            listParams: `--${parent.name} my-${parent.name}`,
        },
    };
    const category = genericResource(resource);

    category.addChild(require('./add')(resource));
    category.addChild(require('./delete')(resource));

    return category;
};
