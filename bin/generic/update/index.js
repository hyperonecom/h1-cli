'use strict';

const Cli = require('lib/cli');
const addCommand = require('./add');
const deleteCommand = require('./delete');
const listCommand = require('./list');
const replaceCommand = require('./replace');
const {deCamelCase, rmRight} = require('lib/text');

const update_list = (resource, field_name) => {
    const parameter = resource.schema[field_name];

    const category = Cli.createCategory(rmRight(deCamelCase(parameter.command || field_name), 's'), {
        description: `Manage ${parameter.description} of ${resource.title}`,
        context: resource.context,
        defaultQuery: `[].{${field_name}: @}`,
        resource: resource,
    });

    category.addChild(addCommand(resource, field_name));
    category.addChild(listCommand(resource, field_name));
    category.addChild(deleteCommand(resource, field_name));

    return category;
};

const update = (resource, field_name) => {
    const parameter = resource.schema[field_name];

    if (parameter.action === 'append') {
        return update_list(resource, field_name);
    }
    return replaceCommand(resource, field_name);
};

module.exports = (resource) => {

    const cmd = [];
    Object.entries(resource.schema).forEach(([key, value]) => {
        if (!value.onUpdate) return;
        cmd.push(update(resource, key));
    });

    return cmd;
};

