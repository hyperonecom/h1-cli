import $RefParser from '@apidevtools/json-schema-ref-parser';
import {lazy_resolver} from './json_schema';

const spec = {};

const renderPath = (path, parameters) => path.replace(new RegExp(/{(.+?)}/g), (source, name) => {
    if (name in parameters) return encodeURIComponent(parameters[name]);
    return source;
});

export default {
    init: async (options) => {
        const openapiUrl = options.openapiUrl || 'https://api.hyperone.com/v2/openapi.json';
        const schema = await $RefParser.parse(options.openapiSpec || openapiUrl);
        Object.assign(spec, await $RefParser.dereference(schema, {
            resolve: {
                lazy: lazy_resolver(openapiUrl),
                file: false,
                http: false,
            },
        }));
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
    renderPath,
    getUrl: (path, parameters = {}) => `${spec.servers[0].url}${renderPath(path, parameters)}`,
    spec, // TODO: Remove me
    getChild: (prefix) => Object
        .entries(spec.paths)
        .filter(([path]) => path.match(new RegExp(`^${prefix}/[a-zA-Z]+?$`)))
        .map(([path]) => ({
            type: path.split('/').pop(),
            path,
        })),
    getSchema: operation => operation.requestBody && operation.requestBody.content['application/json'].schema || {},
    getResponse: (operation, status = 200) => operation.responses && operation.responses[status] && operation.responses[status].content['application/json'].schema || {},
    getTitle: () => spec.info.title,
    getDetail: prefix => Object
        .entries(spec.paths)
        .filter(([path]) => path.match(new RegExp(`${prefix}/\{[A-Za-z_]+\}$`)))
        .map(([path, endpoint]) => ({
            endpoint,
            path,
        })),
    getActions: (prefix) => Object
        .entries(spec.paths)
        .filter(([path]) => path.match(new RegExp(`${prefix}/actions/(.+?)`)))
        .map(([path, endpoint]) => ({
            name: path.split('/').pop(),
            endpoint,
            path,
        })),
};
