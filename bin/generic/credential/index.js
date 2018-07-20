'use strict';

const genericResource = require('bin/generic/index');
const text = require('../../../lib/text');


module.exports = (resource, credential_types) => {

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
        context: {
            listParams: `--${resource.name} my-${resource.name}`,
            deleteParams: `--${resource.name} my-${resource.name}`,
            renameParams: `--${resource.name} my-${resource.name}`,
            base_type: resource.name,
        },
    };

    const category = genericResource(defaults);

    for (const kind of credential_types) {
        category.addChild(require(`./${kind}/index`)(defaults));
    }

    return category;
};
