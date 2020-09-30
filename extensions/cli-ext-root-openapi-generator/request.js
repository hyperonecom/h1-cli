
import { openapi } from '@hyperone/cli-core';
import { deCamelCase } from '@hyperone/cli-core/lib/transform';
import types from '@hyperone/cli-core/types';
import { set } from '@hyperone/cli-core/lib/transform';

const idless = (name) => name.replace(/Id$/, '');

const parameterForParameter = (p = []) => {
    const parameters = [];
    for (const parameter of p) {
        const name = idless(parameter.name);
        const description = [
            parameter.description,
        ];

        const p = {
            name: deCamelCase(name),
            use: {
                in: parameter.in,
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
    return parameters;
};

const parameterForSchema = (schema, prefix = '', path = '') => {
    const parameters = [];

    for (const [pname, pvalue] of Object.entries(schema.properties || {})) {
        const description = [];
        const required = schema.required || [];
        const p = {
            name: `${prefix}${deCamelCase(pname)}`,
            required: required.includes(pname),
            use: {
                in: 'body',
                field: `${path}/${pname}`,
            },
        };
        if (pvalue.title) {
            description.push(pvalue.title);
        }

        if (pvalue.readOnly) {
            continue;
        }

        // TODO: Remove audiance support
        const audience = pvalue['x-audience'];
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

        if (pvalue.type == 'boolean') {
            const choices = [true, false].map(String);
            Object.assign(p, {
                type: (value) => value == 'true',
                typeLabel: choices.join(','),
                choices,
            });
        }

        if (pvalue.type == 'object') {
            parameters.push(
                ...parameterForSchema(
                    pvalue,
                    !!prefix ? `${prefix}-${pname}` : `${pname}-`,
                    `${path}/${pname}`
                )
            );
            continue;
        }

        if (pvalue.type == 'array' && pvalue.items.type == 'object') {
            const label = Object.entries(pvalue.items.properties || {})
                .filter(([, value]) => value.readOnly != true)
                .map(([key]) => `${key}=${key}`)
                .join(',');

            Object.assign(p, {
                multiple: true,
                typeLabel: label,
                type: types.nestedValue,
            });
        }

        if (pvalue.default) {
            description.push(`Defaults is ${pvalue.default}`);
            Object.assign(p, {
                defaultValue: pvalue.default,
            });
        }

        Object.assign(p, {
            description: description.join('. '),
        });

        parameters.push(p);
    }

    return parameters;
};

const flatSchema = (schema) => {
    if (schema.allOf) {
        const properties = {};
        for (const sch of schema.allOf) {
            Object.assign(properties, sch.properties);
        }
        return {
            type: 'object',
            properties,
        };
    }
    return schema;
};

const renderOptions = (operation, parameters = []) => {
    const schema = openapi.getSchema(operation);
    return [
        ...parameterForParameter(parameters),
        ...parameterForSchema(flatSchema(schema)),
    ];
};

const renderBody = (operation, input, options) => {
    const result = {};
    const parameters = renderParameter(input, options);

    for (const option of options) {
        if (!option.use || option.use.in != 'body') {
            continue;
        }
        let value = input[option.name];
        if (value === undefined) continue;
        if (value == option.defaultValue) continue;
        if (option.prefix && value && !value.startsWith('/')) {
            value = openapi.renderPath(option.prefix, { ...parameters, [`${option.name}Id`]: value });
        }
        set(result, option.use.field.replace(/\//g, '.'), value);
    }
    return result;
};

const generateQuery = (path, operation) => {
    const schema = openapi.getResponse(operation);
    if (!schema) return;
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

const renderQuery = (input, options) => Object
    .fromEntries(options
        .filter(option => option.use && option.use.in == 'query' && input[option.name])
        .map(option => [option.use.field, input[option.name]])
    );

const renderParameter = (input, options) => {
    const parameter = {};
    for (const option of options.filter(x => x.use)) {
        if (!input[option.name]) continue;
        if (['path', 'query'].includes(option.use.in)) {
            parameter[option.use.field] = input[option.name];
        }
    }
    return parameter;
};

export default {
    renderOptions,
    renderBody,
    renderQuery,
    generateQuery,
    renderParameter,
};
