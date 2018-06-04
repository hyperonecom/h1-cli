'use strict';

const Cli = require('structured-cli');
const defaults = require('./defaults');

module.exports = function(resource) {

    const resourceDefaults = {
        url: () => resource.name
    };

    resource = Object.assign({}, defaults, resourceDefaults, resource);

    const category = Cli.createCategory(resource.name, {
        description: `Manage your ${resource.name.toUpperCase()}`
      , defaultQuery: resource.defaultQuery
      , transform: resource.transform
      , url: resource.url
      , plugins: resource.plugins
    });

    resource.commands = [
        ...resource.commands
        , ...resource.extraCommands
    ];

    resource.commands.forEach(cmd => category.addChild(require(`bin/generic/${cmd}`)(resource)));

    return category;
};
