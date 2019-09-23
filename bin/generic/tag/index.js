'use strict';

const genericResource = require('bin/generic');
const genericDefaults = require('bin/generic/defaults');
const text = require('lib/text');


module.exports = resource => {

    const options = { ...resource.options, [resource.name]: {
        description: `${text.toTitleCase(resource.title)} ID or name`,
        type: 'string',
        required: true,
    }};

    const subresource = {
        name: 'tag',
        defaultQuery: '[].{id:id,name:name,type:flavour,state:state,processing:processing}',
        url: () => 'vm',
        plugins: genericDefaults.plugins,
        commands: ['list', 'show'],
        title: `tag of ${resource.title}`,
        options: options,
    };

    const category = genericResource({
        name: 'tag',
        defaultQuery: '[].{key:key, value:value}',
        url: args => `${resource.url(args)}/${args[resource.name]}/tag`,
        transform: data => Object.entries(data).map(([key, value]) => ({key, value})),
        commands: ['list'],
        options: subresource.options,
        priority: 80,
        resource: resource,
        context: {
            listParams: `--${resource.name} my-${resource.name}`,
        },
    });

    category.addChild(require('./add')(resource, subresource));
    category.addChild(require('./delete')(resource, subresource));

    return category;
};
