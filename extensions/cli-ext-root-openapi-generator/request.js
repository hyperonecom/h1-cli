
import { openapi } from '@hyperone/cli-core';
import { deCamelCase, set } from '@hyperone/cli-core/lib/transform.js';
import types from '@hyperone/cli-core/types.js';
import middleware from './middlewares/index.js';

const removeId = (name) => name.replace(/Id$/, '');

const parameterForParameter = (p = []) => {
    const parameters = [];
    for (const parameter of p) {
        const name = removeId(parameter.name);
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
        for (const child_schema of Object.values(schema.properties || {})) {
            hooks.push(...middlewareForSchema(child_schema));
        }
    }

    if (schema.oneOf) {
        for (const child_schema of schema.oneOf) {
            hooks.push(...middlewareForSchema(child_schema));
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

const parameterForSchema = ({ schema, pname = '', prefix = '', path = '', required }) => {
    const parameters = [];

    schema.required ??= [];
    schema.properties ??= {};

    if (schema.type === 'object') {
        for (const [child_pname, child_schema] of Object.entries(schema.properties)) {
            const child_parameters = parameterForSchema({
                schema: child_schema,
                pname: child_pname,
                prefix: !!prefix ? `${prefix}-${pname}` : `${pname}`,
                path: path ? `${path}/${pname}` : `${pname}`,
                required: schema.required.includes(child_pname),
            });
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
            schema,
            field: path ? `/${path}/${pname}` : `/${pname}`,
        },
    };

    p.name = p.name.replace(/properties-/, '');

    if (schema.title) {
        description.push(schema.title);
    }

    if (schema.readOnly) {
        return [];
    }

    const audience = schema['x-audience'];
    if (audience && !['user', 'all'].includes(audience)) {
        return [];
    }
    if (schema['x-resource']) {
        Object.assign(p, {
            typeLabel: 'uri',
        });

        const prefixes = openapi.getEndpointForKind(schema['x-resource'].kind);

        if (prefixes.length === 1) {
            Object.assign(p, {
                typeLabel: 'id-or-uri',
                prefix: prefixes[0],
            });
            description.push(`Provide ID or URI of ${schema['x-resource'].kind}`);
        } else {
            description.push(`Provide URI of ${schema['x-resource'].kind}`);
        }
    }
    if (schema['x-permissions']) {
        description.push(`Requires permissions ${schema['x-permissions'].join(', ')}`);
    }

    if (schema['x-file']) {
        description.push('Provide URI of local file eg. \'file://./my-file.bin\'.');
    }

    if (schema.type === 'string') {
        Object.assign(p, {
            placeholder: pname,
        });
        if (schema.enum) {
            Object.assign(p, {
                choices: schema.enum,
            });
            if (schema.enum.join(', ').length < 100) {
                Object.assign(p, {
                    typeLabel: schema.enum.join(', '),
                });
            } else {
                description.push(`Allowed values are ${schema.enum.join(', ')}`);
            }
        }
    }

    if (schema.type === 'array' && schema.items.type === 'string') {
        Object.assign(p, {
            multiple: true,
        });
    }

    if (schema.type === 'boolean') {
        Object.assign(p, {
            typeLabel: 'true,false',
            type: types.booleanish,
        });
    }

    if (schema.type === 'array' && schema.items.type === 'object') {
        const label = Object.entries(schema.items.properties || {})
            .filter(([, value]) => value.readOnly !== true)
            .map(([key]) => `${key}=${key}`)
            .join(', ');

        Object.assign(p, {
            multiple: true,
            typeLabel: label,
            type: types.nestedValue(schema.items),
        });
    }

    if (schema.default) {
        Object.assign(p, {
            defaultValue: schema.default,
        });
    }

    if (schema.oneOf) {
        const oneOfParameters = schema.oneOf.map((oneOfSchema) =>
            parameterForSchema({ schema: oneOfSchema, pname, prefix, path })[0]
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

const renderOptions = (operation, parameters = []) => {
    const schema = openapi.getSchema(operation);
    return [
        ...parameterForParameter(parameters),
        ...parameterForSchema({ schema }),
    ];
};

const renderEmpty = (schema) => {
    const result = {};
    if (schema.type === 'object') {
        for (const [child_pname, child_schema] of Object.entries(schema.properties || {})) {
            if (child_schema.type === 'object') {
                result[child_pname] = renderEmpty(child_schema);
            }
            if (child_schema.const) {
                result[child_pname] = child_schema.const;
            }
            if (child_schema.default) {
                result[child_pname] = child_schema.default;
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
    if (!result.properties && schema.properties?.properties?.type === 'object') {
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
