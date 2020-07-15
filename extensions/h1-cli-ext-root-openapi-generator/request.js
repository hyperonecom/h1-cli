'use strict';
const openapi = require('h1-cli-core/lib/openapi');
const { deCamelCase } = require('h1-cli-core/lib/transform');
const jsonpatch = require('jsonpatch');
const types = require('h1-cli-core/types');

const idless = (name) => name.replace(/Id$/, '');

const input = (operation) => {
    const parameters = [];
    if (operation.parameters) {
        for (const parameter of operation.parameters) {
            const name = idless(parameter.name);
            const description = [
                parameter.description,
            ];

            const p = {
                name: deCamelCase(name),
                use: {
                    in: 'path',
                    field: parameter.name,
                },
            };

            if (parameter.name.endsWith('Id')) {
                Object.assign(p, {
                    required: true,
                    defaultSource: name,
                    type: types.extractId,
                    typeLabel: 'id-or-uri',
                });
            }

            parameters.push({
                ...p,
                description: description.join('.'),
            });
        }
    }

    const schema = openapi.getSchema(operation);

    for (const [pname, pvalue] of Object.entries(schema.properties || {})) {
        const description = [];
        const required = schema.required || [];
        const p = {
            name: deCamelCase(pname),
            required: required.includes(pname),
            use: {
                in: 'body',
                field: `/${pname}`,
            },
        };
        if (pvalue.title) {
            description.push(pvalue.title);
        }

        if (pvalue.readOnly) {
            continue;
        }

        // TODO: Remove audiance support
        const audience = pvalue['x-audiance'] || pvalue['x-audience'];
        if (audience && !['user', 'all'].includes(audience)) {
            continue;
        }

        if (pvalue['x-resource']) {
            Object.assign(p, {
                typeLabel: 'uri',
            });

            const prefixes = openapi.getEndpointForKind(pvalue['x-resource'].kind);

            if (prefixes.length == 1) {
                Object.assign(p, {
                    typeLabel: 'id-or-uri',
                    prefix: prefixes[0],
                });
                description.push(`Provide ID or URI of ${pvalue['x-resource'].kind}`);
            } else {
                description.push(`Provide URI of ${pvalue['x-resource'].kind}`);
            }
        }
        if (pvalue['x-permissions']) {
            description.push(`Requires permissions ${pvalue['x-permissions'].join(', ')}`);
        }

        if (pvalue.type == 'string') {
            Object.assign(p, {
                placeholder: pname,
            });
        }

        if (pvalue.type == 'array' && pvalue.items.type == 'string') {
            Object.assign(p, {
                multiple: true,
            });
        }
        if (pvalue.type == 'array' && pvalue.items.type == 'object') {
            const label = Object.entries(pvalue.items.properties || {})
                .filter(([, value]) => value.readOnly != true)
                .map(([key]) => `${key}=${key}`)
                .join(',');
            // description.push(`Use as ${label}`);

            Object.assign(p, {
                multiple: true,
                typeLabel: label,
                type: types.nestedValue,
            });
        }

        Object.assign(p, {
            description: description.join('. '),
        });

        parameters.push(p);
    }


    return parameters;
};

const body = (operation, input, options) => {
    const patch = [];
    const schema = openapi.getSchema(operation) || {};
    for (const [pname, pvalue] of Object.entries(schema.properties || {})) {
        // TODO: Remove audiance support
        const audience = pvalue['x-audiance'] || pvalue['x-audience'];
        if (audience && !['user', 'all'].includes(audience)) {
            continue;
        }
        const name = deCamelCase(pname);
        let value = input[pname];
        const option = options.find(x => x.name == name);
        if (!option) {
            throw new Error(`Unknown parameter transformation for ${name} -> ${pname}`);
        }
        if (!option.use || option.use.in != 'body') {
            continue;
        }
        if (option.prefix && value && !value.startsWith('/')) {
            value = path(option.prefix, operation, input);
        }
        patch.push({ op: 'add', path: option.use.field, value: value });
    }
    return jsonpatch.apply_patch({}, patch);
};

const query = (path, operation) => {
    const schema = openapi.getResponse(operation) || {};
    const col = [];

    let props;
    if (schema.type == 'array') {
        props = schema.items.properties || {};
    } else if (schema.type == 'object') {
        props = schema.properties || {};
    }

    if (props) {
        for (const name of ['id', 'name', 'state', 'flavour', 'content', 'enabled', 'size']) {
            if (props[name]) {
                col.push(`${name}:${name}`);
            }
        }
    }

    if (col.length == 0) {
        col.push('value:@');
    }
    return `[].{${col.join(',')}}`;
};

const path = (path, operation, input) => {
    let url = path;
    for (const [pattern, , key] of url.matchAll('\{((.+?)Id)\}')) {
        url = url.replace(pattern, input[key]);
    }
    return url;
};

module.exports = {
    input,
    body,
    path,
    query,
};
