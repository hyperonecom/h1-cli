'use strict';
const openapi = require('lib/openapi');
const genericAction = require('bin/generic/action');
const genericrResource = require('bin/generic');
const genericUpdate = require('bin/generic/update');

module.exports = (resource) => {
    const name = resource.apiName || resource.name;
    const discoveredCommands = [];

    const paths = openapi.getResourcePaths(resource);

    if (paths[`/${name}/{${name}Id}/actions/transfer`]) {
        discoveredCommands.push('transfer');
    }

    if (paths[`/${name}/{${name}Id}/tag`]) {
        discoveredCommands.push('tag');
    }

    if (paths[`/${name}/{${name}Id}/services`]) {
        discoveredCommands.push('service');
    }

    if (paths[`/${name}/{${name}Id}/queue`]) {
        discoveredCommands.push('history');
    }

    if (paths[`/${name}`]) {
        discoveredCommands.push('list');
    }

    if (paths[`/${name}/{${name}Id}/actions/resize`]) {
        discoveredCommands.push('resize');
    }

    if (paths[`/${name}/{${name}Id}/inspect`]) {
        discoveredCommands.push('inspect');
    }

    if (paths[`/${name}/{${name}Id}/actions/firewall_add`] || paths[`/${name}/{${name}Id}/actions/firewall_remove`]) {
        discoveredCommands.push('firewall');
    }

    if (paths[`/${name}/{${name}Id}`]) {
        discoveredCommands.push('show');

        if (paths[`/${name}/{${name}Id}`].delete) {
            discoveredCommands.push('delete');
        }
        if (paths[`/${name}/{${name}Id}`].patch) {
            const update = openapi.getResourceComponents(resource)[`${name}_update`];
            if (update.properties.name) {
                discoveredCommands.push('rename');
            }
        }
    }

    if (paths[`/${name}/{${name}Id}/credential/certificate`] || paths[`/${name}/{${name}Id}/credential/password`]) {
        discoveredCommands.push('credential');
    }

    const ignored = resource.ignoreGeneric || ['firewall_remove'];

    resource.extraCommands = [
        ...resource.extraCommands || [],
        ...discoveredCommands,
    ].filter(x => !ignored.includes(x));

    const category = genericrResource(resource);

    const simpleActions = openapi.getSimpleActionsNames(resource);

    simpleActions.filter(x => !ignored.includes(x)).forEach(action => {
        category.addChild(genericAction(resource, action));
    });

    if (resource.schema && Object.values(resource.schema).some(x => x.onUpdate)) {
        genericUpdate(resource).map(cmd => category.addChild(cmd));
    }
    return category;
};
