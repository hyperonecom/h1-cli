
import { openapi } from '@hyperone/cli-core';
import { deCamelCase } from '@hyperone/cli-core/lib/transform';
import types from '@hyperone/cli-core/types';
import { set } from '@hyperone/cli-core/lib/transform';
import middleware from './middlewares/index';

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

        parameters.unshift({
            ...p,
            description: description.join('.'),
        });
    }
    return parameters;
};

const middlewareForSchema = (schema) => {
    const hooks = [];
    if (schema.type === 'object') {
        for (const pvalue of Object.values(schema.properties || {})) {
            hooks.push(...middlewareForSchema(pvalue));
        }
    }

    if (schema.oneOf) {
        for (const pvalue of schema.oneOf) {
            hooks.push(...middlewareForSchema(pvalue));
        }
    }

    if (schema.format && middleware[schema.format]) {
        hooks.push(middleware[schema.format]);
    }

    return hooks;
};

const middlewareForOperation = (operation) => {
    const schema = openapi.getSchema(operation);
    return middlewareForSchema(schema);
};

const parameterForSchema = (pvalue, pname = '', prefix = '', path = '', required) => {
    const parameters = [];
    if (pvalue.type === 'object') {
        for (const [child_pname, child_pvalue] of Object.entries(pvalue.properties || {})) {
            const child_parameters = parameterForSchema(
                flatSchema(child_pvalue),
                child_pname,
                !!prefix ? `${prefix}-${pname}` : `${pname}`,
                path ? `${path}/${pname}` : `${pname}`,
                (pvalue.required || []).includes(child_pname)
            );
            parameters.push(...child_parameters);
        }
        return parameters;
    }
    const description = [];
    const p = {
        name: prefix ? `${prefix}-${deCamelCase(pname)}` : deCamelCase(pname),
        required,
        use: {
            in: 'body',
            schema: pvalue,
            field: path ? `/${path}/${pname}` : `/${pname}`,
        },
    };

    p.name = p.name.replace(/properties-/, '');

    if (pvalue.title) {
        description.push(pvalue.title);
    }

    if (pvalue.readOnly) {
        return [];
    }

    const audience = pvalue['x-audience'];
    if (audience && !['user', 'all'].includes(audience)) {
        return [];
    }
    if (pvalue['x-resource']) {
        Object.assign(p, {
            typeLabel: 'uri',
        });

        const prefixes = openapi.getEndpointForKind(pvalue['x-resource'].kind);

        if (prefixes.length === 1) {
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

    if (pvalue['x-file']) {
        description.push('Provide URI of local file eg. \'file://./my-file.bin\'.');
    }

    if (pvalue.type === 'string') {
        Object.assign(p, {
            placeholder: pname,
        });
        if (pvalue.enum) {
            Object.assign(p, {
                choices: pvalue.enum,
            });
            if (pvalue.enum.join(', ').length < 100) {
                Object.assign(p, {
                    typeLabel: pvalue.enum.join(', '),
                });
            } else {
                description.push(`Allowed values is ${pvalue.enum.join(', ')}`);
            }
        }
    }

    if (pvalue.type === 'array' && pvalue.items.type === 'string') {
        Object.assign(p, {
            multiple: true,
        });
    }

    if (pvalue.type === 'boolean') {
        Object.assign(p, {
            typeLabel: 'true,false',
            type: types.booleanish,
        });
    }

    if (pvalue.type === 'array' && pvalue.items.type === 'object') {
        const label = Object.entries(pvalue.items.properties || {})
            .filter(([, value]) => value.readOnly !== true)
            .map(([key]) => `${key}=${key}`)
            .join(', ');

        Object.assign(p, {
            multiple: true,
            typeLabel: label,
            type: types.nestedValue(pvalue.items),
        });
    }

    if (pvalue.default) {
        Object.assign(p, {
            defaultValue: pvalue.default,
        });
    }

    if (pvalue.oneOf) {
        const oneOfParameters = pvalue.oneOf.map((oneOfSchema) =>
            parameterForSchema(oneOfSchema, pname, prefix, path)[0]
        ).map(x => `- ${x.description}`);
        description.push(`Specifies one of the following: \n${oneOfParameters.join('\n')}`);
    }

    Object.assign(p, {
        description: description.join('. '),
    });
    if (pname) {
        parameters.unshift(p);
    }
    return parameters;
};

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
    for (const name of ['format', 'title']) {
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
            return schema[key]
                .map(flatSchema)
                .reduce((a, b) => mergeSchema(a, b))
            ;
        }
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

const renderEmpty = (schema) => {
    const result = {};
    schema = flatSchema(schema);
    if (schema.type === 'object') {
        for (const [child_pname, child_pvalue] of Object.entries(schema.properties || {})) {
            if (child_pvalue.type === 'object') {
                result[child_pname] = renderEmpty(child_pvalue);
            }
            if (child_pvalue.const) {
                result[child_pname] = child_pvalue.const;
            }
            if (child_pvalue.default) {
                result[child_pname] = child_pvalue.default;
            }
        }
    }
    return result;
};

const renderBody = (operation, input, options) => {
    const schema = openapi.getSchema(operation);
    const result = renderEmpty(schema);
    const parameters = renderParameter(input, options);

    for (const option of options) {
        if (!option.use || option.use.in !== 'body') {
            continue;
        }
        let value = input[option.name];
        if (value === undefined) {
            continue;
        }
        if (value === option.defaultValue) {
            continue;
        }
        if (option.prefix && value && !value.startsWith('/')) {
            value = openapi.renderPath(option.prefix, { ...parameters, [`${option.name}Id`]: value });
        }
        set(result, option.use.field.replace(/\//g, '.'), value);
    }
    if (!result.properties) {
        result.properties = {};
    }
    return result;
};

const generateQuery = (path, operation) => {
    const schema = openapi.getResponse(operation);
    if (!schema) {
        return;
    }
    const col = [];

    let props;
    if (schema.type === 'array') {
        props = schema.items.properties || {};
    } else if (schema.type === 'object') {
        props = schema.properties || {};
    }

    if (props) {
        for (const name of ['id', 'name', 'state', 'flavour', 'content', 'enabled', 'size']) {
            if (props[name]) {
                col.push(`${name}:${name}`);
            }
        }
    }

    if (col.length === 0) {
        col.push('value:@');
    }
    return `[].{${col.join(', ')}} `;
};

const renderQuery = (input, options) => Object
    .fromEntries(options
        .filter(option => option.use && option.use.in === 'query' && input[option.name])
        .map(option => [option.use.field, input[option.name]])
    );

const renderParameter = (input, options) => {
    const parameter = {};
    for (const option of options.filter(x => x.use)) {
        if (!input[option.name]) {
            continue;
        }
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
    middlewareForOperation,
};
