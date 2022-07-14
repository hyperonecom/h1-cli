import $RefParser from '@apidevtools/json-schema-ref-parser';
import mergeAllOf from 'json-schema-merge-allof';
import { lazy_resolver } from './json_schema';

const spec = {};

const renderPath = (path, parameters) => path.replace(new RegExp(/{(.+?)}/g), (source, name) => {
    if (name in parameters) {
        return encodeURIComponent(parameters[name]);
    }
    return source;
});

const mergeSchema = (a, b) => {
    const result = {};
    if (a.type === 'object' && b.type === 'object') {
        result.type = 'object';
        if (a.required && b.required) {
            a.required = a.required.filter(x => b.required.includes(x));
        }
        if (a.properties && b.properties) {
            const keys = [
                ...new Set([
                    ...Object.keys(a.properties || {}),
                    ...Object.keys(b.properties || {}),
                ]),
            ];
            result.properties = Object.fromEntries(
                keys.map(key => {
                    if (a.properties[key] && b.properties[key]) {
                        return [
                            key, mergeSchema(a.properties[key], b.properties[key]),
                        ];
                    } else if (a.properties[key]) {
                        return [
                            key, a.properties[key],
                        ];
                    }
                    return [
                        key, b.properties[key],
                    ];
                })
            );
        }
    } else if (a.type !== b.type) {
        result.type = {
            type: 'string',
        };
    } else {
        result.type = {
            type: a.type,
        };
    }
    if (a.const !== b.const) {
        result.enum = [
            a.const,
            b.const,
        ];
    } else if (a.const) {
        result.const = a.const;
    }
    for (const name of ['format', 'title', 'readOnly', 'writeOnly']) {
        if (a[name] === b[name]) {
            result[name] = a[name];
        }
    }
    if (a.enum && b.enum) {
        result.enum = [
            ...a.enum,
            ...b.enum,
        ];
    }
    return result;
};

const flatSchema = (schema) => {
    for (const key of ['anyOf', 'allOf', 'oneOf']) {
        if (schema[key]) {
            return schema[key].reduce((a, b) => mergeSchema(a, b));
        }
    }
    return schema;
};

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

            if (namespaces[xNamespace].some(x => x.kind === xKind)) {
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
        const tags = spec.tags.filter(tag => tag['x-kind'] === kind);
        const operations = tags.map(x => `${x.name}_get`);
        const prefixes = [];
        for (const [prefix, pathItem] of Object.entries(spec.paths)) {
            if (!pathItem.get) {
                continue;
            }
            if (!operations.includes(pathItem.get.operationId)) {
                continue;
            }
            prefixes.push(prefix);
        }
        return prefixes;
    },
    renderPath,
    getUrl: (path, parameters = {}, operation) => {
        const root = spec.servers[0];
        let server = root;
        if (operation && operation.servers) {
            server = operation.servers[0];
        }

        return `${new URL(server.url, root.url)}${renderPath(path, parameters)}`;
    },
    spec, // TODO: Remove me
    getChild: (prefix) => Array
        .from(new Set(Object
            .entries(spec.paths)
            .map(([path]) => {
                const match = path.match(new RegExp(`^(${prefix}/[a-zA-Z]+?)(/{[A-Za-z_]+}){0,1}$`));
                if (!match) {
                    return;
                }
                return match[1];
            })
            .filter(x => !!x)
        ))
        .map((path) => ({
            type: path.split('/').pop(),
            path,
        })),
    getSchema: operation => {
        const schema = operation.requestBody?.content['application/json'].schema || {};
        return flatSchema(mergeAllOf(schema));
    },
    getResponse: (operation, status = 200, type = 'application/json') => operation.responses &&
        operation.responses[status] &&
        operation.responses[status].content[type] &&
        operation.responses[status].content[type].schema,
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
