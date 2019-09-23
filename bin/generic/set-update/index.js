'use strict';

const Cli = require('lib/cli');

module.exports = resource => {
    const category = Cli.createCategory(resource.name, {
        description: `Manage your ${resource.title}`,
        defaultQuery: `[].{${resource.update_name}: @}`,
    });
    const update_name = resource.update_name || resource.title;
    const childResource = {
        ...resource,
        parameter_name: update_name,
        context: { ...resource.context, updateParams: `--${update_name} value`},
    };

    category.addChild(require('./add')(childResource));
    category.addChild(require('./list')(childResource));
    category.addChild(require('./delete')(childResource));

    return category;
};
