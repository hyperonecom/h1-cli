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
    });

    resource.commands = [
        ...resource.commands,
        ...resource.extraCommands,
    ];
    resource.commands.forEach(cmd => {
        let child = require(`bin/generic/${cmd}`)(resource);
        if (!Array.isArray(child)) child = [child];
        child.map(x => category.addChild(x));
    });

    return category;
};
