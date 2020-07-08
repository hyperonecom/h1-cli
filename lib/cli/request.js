'use strict';
const openapi = require('./../openapi');
const { deCamelCase } = require('./../transform');
const jsonpatch = require('jsonpatch');
const types = require('./types');

const input = (operation) => {
    const parameters = [];
    if (operation.parameters) {
        for (const parameter of operation.parameters) {
            const name = parameter.name.replace(/Id$/, '');
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
                    type: types.extractId,
                    description: 'Provide ID or URI',
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

        if (pvalue['x-resource']) {
            description.push(`Provide URI of ${pvalue['x-resource'].kind}`);
        }
        if (pvalue['x-permissions']) {
            description.push(`Require permissions ${pvalue['x-permissions'].join(', ')}`);
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
            description.push(`Use as ${label}`);

            Object.assign(p, {
                multiple: true,
                type: types.nestedValue,
            });
        }

        parameters.push({
            ...p,
            description: description.join('. '),
        });
    }
    return parameters;
};

const body = (parameters, operation, input) => {
    const patch = [];
    const schema = openapi.getSchema(operation) || {};
    for (const pname of Object.keys(schema.properties || {})) {
        const name = deCamelCase(pname);
        const value = input[pname];
        const parameter = parameters.find(x => x.name == name);
        if (!parameter) {
            throw new Error(`Unknown parameter transformation for ${name} -> ${pname}`);
        }
        if (!parameter.use || parameter.use.in != 'body') {
            continue;
        }
        patch.push({ op: 'add', path: parameter.use.field, value: value });
    }
    return jsonpatch.apply_patch({}, patch);
};

const url = (path, operation, input) => {
    // TODO: Use specification from parameters
    let url = openapi.getUrl(path);
    for (const [pattern, _, key] of url.matchAll('\{((.+?)Id)\}')) {
        url = url.replace(pattern, input[key]);
    }
    return url;
};

module.exports = {
    input,
    body,
    url,
};
