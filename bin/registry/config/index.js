'use strict';
// const genericDefaults = require('bin/generic/defaults');
// const genericResource = require('bin/generic');
const text = require('lib/text');
const Cli = require('lib/cli');

module.exports = (resource) => {

    const childDefaults = Object.assign({}, resource, {
        options: Object.assign(
            {},
            resource.options,
            {
                [resource.name]: {
                    description: `${text.toTitleCase(resource.title)} ID`,
                    type: 'string',
                    required: true,
                },
            }
        ),
        url: args => `${resource.url(args)}/${args[resource.name]}`,
    });

    const category = Cli.createCategory('config', {
        description: 'Manage config of integrated software',
        priority: 25,
    });

    category.addChild(require('./docker')(childDefaults));

    return category;
};
