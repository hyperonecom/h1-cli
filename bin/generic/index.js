'use strict';

const Cli = require('lib/cli');
const defaults = require('./defaults');

module.exports = function(resource) {

    const resourceDefaults = {
        url: () => resource.name,
        title: resource.name,
    };

    resource = Object.assign({}, defaults, resourceDefaults, resource);

    const category = Cli.createCategory(resource.name, {
        description: resource.description || `Manage your ${resource.title}`,
        defaultQuery: resource.defaultQuery,
        transform: resource.transform,
        url: resource.url,
        plugins: resource.plugins,
        dirname: resource.dirname,
        resource: resource,
        earlyAdoptersOnly: resource.earlyAdoptersOnly,
        priority: resource.priority,
        earlyAdoptersOnly: resource.earlyAdoptersOnly,
    });

    resource.commands = [
        ...resource.commands,
        ...resource.extraCommands,
    ];

    resource.commands.forEach(cmd => category.addChild(require(`bin/generic/${cmd}`)(resource)));

    return category;
};
