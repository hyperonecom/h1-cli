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
        defaultQuery: '[].{id:id,name:name,type:type}',
        url: args => `${resource.url(args)}/${args[resource.name]}`,
        commands: [],
        options: options,
        plugins: resource.plugins,
        description: `Manage your credentials of ${resource.title}`,
        resource: resource,
        title: `credential of ${resource.title}`,
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

    ['list', 'show'].forEach(cmd => {
        category.addChild(require(`bin/generic/${cmd}`)(Object.assign({}, defaults, {
            url: args => `${resource.url(args)}/${args[resource.name]}/credential`,
        })));
    });

    ['certificate', 'password'].filter(kind =>
        defaults.credential_types.some(type => credentials.types[kind].includes(type))
    ).forEach(kind => {
        category.addChild(require(`./${kind}`)(defaults));
    });

    return category;
};
