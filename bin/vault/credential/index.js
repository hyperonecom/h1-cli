'use strict';

const genericResource = require('bin/generic');

const options = {
    vault: {
        description: 'Vault ID or name',
        type: 'string',
        required: true,
    },
};

module.exports = resource => {

    const defaults = {
        name: 'credential',
        defaultQuery: '[].{id:_id,name:name,type:type}',
        url: args => `${resource.url(args)}/${args.vault}/credential`,
        commands: [],
        options: options,
        plugins: resource.plugins,
        description: 'Manage your credentials to Vault',
        title: 'credential to Vault',
        context: {
            listParams: '--vault my-vault',
            deleteParams: '--vault my-vault',
        },
    };

    const category = genericResource(defaults);

    category.addChild(require('./certificate')(defaults));
    category.addChild(require('./password')(defaults));

    return category;
};
