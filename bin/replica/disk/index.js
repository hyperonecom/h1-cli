'use strict';

const genericResource = require('bin/generic');
const text = require('lib/text');

module.exports = resource => {
    const options = {
        [resource.name]: {
            description: `${text.toTitleCase(resource.title)} name or ID`,
            type: 'string',
            required: true,
        },
    };

    const subresource = {
        title: `Disk of ${resource.title}`,
        name: 'disk',
        defaultQuery: '[].{id:disk.id, location: _id, size:disk.size, type:disk.type}',
        url: args => `${resource.url(args)}/${args.replica}/hdd`,
        commands: ['list'],
        options: options,
    };

    return genericResource(subresource);
};
