'use strict';

const genericResource = require('bin/generic/index');
const text = require('../../../lib/text');

const passwords_type = ['double-sha1', 'sha512'];

module.exports = (resource) => {

    const options = {
        [resource.name]: {
            description: `${text.toTitleCase(resource.title)} ID or name`,
            type: 'string',
            required: true,
        },
    };

    const defaults = {
        name: 'credential',
        defaultQuery: '[].{id:_id,name:name,type:type}',
        url: args => `${resource.url(args)}/${args[resource.name]}/credential`,
        commands: [],
        options: options,
        plugins: resource.plugins,
        description: `Manage your credentials to ${resource.title}`,
        resource: resource,
        title: resource.title,
        priority: 75,
        credential_types: resource.credential_types || [],
        context: {
            listParams: `--${resource.name} my-${resource.name}`,
            deleteParams: `--${resource.name} my-${resource.name}`,
            renameParams: `--${resource.name} my-${resource.name}`,
            base_type: resource.name,
        },
    };

    const category = genericResource(defaults);
    defaults.credential_types.forEach(type => {
        if (passwords_type.includes(type)) {
            category.addChild(require('./password')(defaults, type));
        } else {
            category.addChild(require(`./${type}`)(defaults, type));
        }
    });
    return category;
};
