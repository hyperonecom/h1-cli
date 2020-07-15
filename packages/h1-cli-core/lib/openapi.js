'use strict';
const fetch = require('node-fetch');
const $RefParser = require('@apidevtools/json-schema-ref-parser');

const spec = {};

module.exports = {
    init: async (options) => {
        if (options.openapiSpec) {
            Object.assign(spec, options.openapiSpec);
        } else {
            const url = options.openapiUrl || 'https://api.hyperone.com/v2/openapi.json';
            const resp = await fetch(url);
            const json = await resp.json();
            const schema = await $RefParser.dereference(json);
            Object.assign(spec, schema);
        }
    },
    getNamespaces: () => {
        const namespaces = {};
        spec.tags.forEach(t => {
            const { 'x-kind': xKind, 'x-location': xLocation, 'x-parent': xParent } = t;
            const [xNamespace, xType] = xKind.split('/');

            namespaces[xNamespace] = namespaces[xNamespace] || [];

            if (namespaces[xNamespace].some(x => x.kind == xKind)) {
                return;
            }

            namespaces[xNamespace].push({
                type: xType,
                kind: xKind,
                parent: xParent,
                location: xLocation,
            });
        });
        return namespaces;
    },
    getPath: prefix => spec.paths[prefix],
    getEndpointForKind: kind => {
        const tags = spec.tags.filter(tag => tag['x-kind'] == kind);
        const operations = tags.map(x => `${x.name}_get`);
        const prefixes = [];
        for (const [prefix, pathItem] of Object.entries(spec.paths)) {
            if (!pathItem.get) continue;
            if (!operations.includes(pathItem.get.operationId)) continue;
            prefixes.push(prefix);
        }
        return prefixes;
    },
    getUrl: path => `${spec.servers[0].url}${path}`,
    spec, // TODO: Remove me
    getOperations: (tag) => {
        const operations = [];
        for (const pathItem of Object.values(spec.paths)) {
            for (const operation of Object.values(pathItem)) {
                const name = operation.summary.toLowerCase();
                if (operation.tags.includes(tag)) {
                    operations[name] = operations[name] || [];
                    operations[name].push(operation);
                }
            }
        }
        return operations;
    },
    getChild: (prefix) => Object
        .entries(spec.paths)
        .filter(([path]) => path.match(new RegExp(`^${prefix}/[a-z]+?$`)))
        .map(([path]) => ({
            type: path.split('/').pop(),
            path,
        })),
    getSchema: operation => operation.requestBody && operation.requestBody.content['application/json'].schema || {},
    getResponse: (operation, status = 200) => operation.responses && operation.responses[status] && operation.responses[status].content['application/json'].schema || {},
    getTitle: () => spec.info.title,
    getActions: (prefix) => Object
        .entries(spec.paths)
        .filter(([path]) => path.match(new RegExp(`${prefix}/actions/(.+?)`)))
        .map(([path]) => ({
            name: path.split('/').pop(),
            path,
        })),
};
