'use strict';

const genericResource = require('bin/generic/index');
const text = require('../../../lib/text');
const credentials = require('lib/credentials');

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
        url: args => `${resource.url(args)}/${args[resource.name]}`,
        commands: ['list', 'show', 'delete'],
        options: options,
        plugins: resource.plugins,
        description: `Manage your credentials to ${resource.title}`,
        resource: resource,
        title: `credential of ${resource.name}`,
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

    ['certificate', 'password'].filter(kind =>
        defaults.credential_types.some(type => credentials.types[kind].includes(type))
    ).forEach(kind => {
        category.addChild(require(`./${kind}`)(defaults));
    });

    return category;
};
