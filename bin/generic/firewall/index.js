'use strict';

const Cli = require('lib/cli');
const text = require('lib/text');

module.exports = resource => {
    const category = Cli.createCategory('firewall', {
        description: `Manage firewall of ${resource.title}`,
        defaultQuery: resource.defaultQuery,
    });

    const childResource = Object.assign({}, resource, {
        options: Object.assign({}, resource.options, {
            [resource.name]: {
                description: `${text.toTitleCase(resource.title)} ID or name`,
                type: 'string',
                required: true,
            },
        }),
        url: (args) => `${resource.url(args)}/${args[resource.name]}`,
        context: {
            addFirewallParams: `--${resource.name} my-${resource.name}`,
            removeFirewallParams: `--${resource.name} my-${resource.name}`,
        },
    });


    category.addChild(require('./add')(childResource));
    category.addChild(require('./remove')(childResource));

    return category;
};
