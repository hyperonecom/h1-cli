'use strict';
const fetch = require('node-fetch');
const $RefParser = require('@apidevtools/json-schema-ref-parser');

const spec = {};


module.exports = {
    init: async (url = 'https://api.hyperone.com/v2/openapi.json') => {
        const resp = await fetch(url);
        const json = await resp.json();
        const schema = await $RefParser.dereference(json);
        Object.assign(spec, schema)
    },
    getNamespaces: () => {
        const namespaces = {};
        spec.tags.forEach(t => {
            const { 'x-kind': xKind, 'x-location': xLocation, 'x-parent': xParent } = t;
            const [xNamespace, xType] = xKind.split('/');

            namespaces[xNamespace] = namespaces[xNamespace] || [];
            namespaces[xNamespace].push({
                type: xType,
                kind: xKind,
                parent: xParent,
                location: xLocation,
            });
        })
        return namespaces;
    },
    getPath: prefix => {
        // console.log(prefix);
        return spec.paths[prefix];
    },
    getUrl: path => {
        return `${spec.servers[0].url}${path}`;
    },
    getOperations: (tag) => {
        const operations = [];
        for (const [endpoint, pathItem] of Object.entries(spec.paths)) {
            for (const [method, operation] of Object.entries(pathItem)) {
                const name = operation.summary.toLowerCase();
                // console.log({
                //     sTag: tag,
                //     opTag: operation.tags
                // });
                if (operation.tags.includes(tag)) {
                    operations[name] = operations[name] || [];
                    operations[name].push(operation);
                }
            }
        }
        return operations;
    },
    getChild: (prefix) => {
        return Object
            .entries(spec.paths)
            .filter(([path]) => path.startsWith(prefix))
            .filter(([, pathItem]) => pathItem.get && pathItem.get.operationId.includes('_list'))
            .map(([path]) => ({
                type: path.split('/').pop(),
                path: path,
            }))
    },
    getSchema: operation => {
        return operation.requestBody && operation.requestBody.content['application/json'].schema || {};
    },
    getActions: (prefix) => {
        return Object
            .entries(spec.paths)
            .filter(([path]) => path.match(new RegExp(`${prefix}/actions/(.+?)/`)))
            .map(([path]) => ({
                name: path.split('/').pop(),
                path,
            }))
    }
}