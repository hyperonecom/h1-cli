'use strict';
const openapi = require('./openapi');
const jsonpatch = require('jsonpatch');
const {deCamelCase} = require('./transform');
const { camelCase } = require("camel-case");

const extractId = (value) => {
    if (value.startsWith('/')) return value.split('/').pop()
    return value;
};

const nestedValue = value => {
    const result = {};
    for (const v of value.split(',')) {
        const [pkey, pvalue] = v.split(/=/, 2);
        result[pkey] = pvalue;
    }
    return result;
};

const buildCommandParameters = (operation) => {
    const parameters = {};
    if (operation.parameters) {
        for (const parameter of operation.parameters) {
            const name = parameter.name.replace(/Id$/, '');
            const p = {
                parameters: parameter.description,
                placeholder: 'VALUE',
                use: {
                    in: "path",
                    field: parameter.name,
                }
            };

            if (parameter.name.endsWith('Id')) {
                Object.assign(p, {
                    required: true,
                    validator: extractId,
                    placeholder: 'ID-OR-URI',
                })
            };
            parameters[name] = p;
        };
    }

    const schema = openapi.getSchema(operation);

    for (const [pname, pvalue] of Object.entries(schema.properties || {})) {
        let description = [];
        const required = schema.required || [];
        const p = {
            required: required.includes(pname),
            use: {
                in: "body",
                field: `/${pname}`
            },
        };
        if (pvalue["x-resource"]) {
            description.push(`Provide URI of ${pvalue["x-resource"].kind}`)
        }
        if (pvalue["x-permissions"]) {
            description.push(`Require permissions ${pvalue["x-permissions"].join(", ")}`)
        }
        if (pvalue.type == 'string') {
            Object.assign(p, {
                placeholder: pname,
            })
        }
        if (pvalue.type == 'array' && pvalue.items.type == "string") {
            Object.assign(p, {
                placeholder: `${pname} ...`,
            })
        }
        if (pvalue.type == 'array' && pvalue.items.type == "object") {
            const label = Object.entries(pvalue.items.properties || {})
                .filter(([, value]) => value.readOnly != true)
                .map(([key,]) => `${key}=${key}`)
                .join(",");

            Object.assign(p, {
                placeholder: `${label} ...`,
                validator: nestedValue,
            })
        }
        parameters[pname] = {
            ...p,
            description: description.join(". "),
        }
    }
    return parameters;
};

const buildRequestBody = (parameters, operation, input) => {
    const patch = [];
    const schema = openapi.getSchema(operation) || {};
    for(const [pname, pvalue] of Object.entries(schema.properties || {})){
        const name = camelCase(pname);
        const value = input[pname];
        const parameter = parameters[pname];
        if(!parameter){
            throw new Error(`Unknown parameter transformation for ${name} -> ${pname}`);
        }
        if(!parameter.use || parameter.use.in != "body"){
            continue;
        }
        patch.push({ "op": "add", "path": parameter.use.field, "value": value });
    }
    return jsonpatch.apply_patch({}, patch);
};

const buildRequestUrl = (path, operation, input) => {
    // TODO: Use specification from parameters
    let url = openapi.getUrl(path);
    for (const [pattern, _, key] of url.matchAll('\{((.+?)Id)\}')) {
        url = url.replace(pattern, input[key])
    }
    return url;
};

module.exports = {
    buildCommandParameters,
    buildRequestBody,
    buildRequestUrl
}