'use strict';

const { Command } = require('commander');
const openapi = require('./lib/openapi');
const pluralize = require('pluralize');
const { createCommand } = require('./lib/cli');
const { buildCommandParameters, buildCommandRequest, buildRequestBody, buildRequestUrl } = require('./lib/cli_generator');

const printCommand = (name, content) => createCommand({
    name: name,
    handler: () => console.log(JSON.stringify(content, null, 4))
})

const buildCommandName = operation => {
    return operation.summary.replace('/actions/', '').toLowerCase();
};

const makeOperationCommand = ({ operation, method, path }) => {
    return createCommand({
        name: buildCommandName(operation),
        parameters: buildCommandParameters(operation),
        plugins: [
            require('./plugin/formatOutput'),
            require('./plugin/validateChoices'),
            require('./plugin/api'),
            require('./plugin/noWait'),
        ],
        handler: async (ctx) => {
            const url = buildRequestUrl(path, operation, ctx.input);
            const body = buildRequestBody(ctx.options.parameters, operation, ctx.input);
            return ctx.toolbox.api[method](url, body);
        }
    })
};

const makeResourceCommand = (resource, ctx) => {
    const cmd = new Command(resource.type).storeOptionsAsProperties(false);

    cmd.addCommand(printCommand('spec', ctx));

    const collectionOperation = openapi.getPath(ctx.path) || {};
    for (const [method, operation] of Object.entries(collectionOperation)) {
        cmd.addCommand(
            makeOperationCommand({
                ...ctx,
                method,
                operation
            })
        );
    }

    const instancePathPrefix = `${ctx.path}/{${resource.type}Id}`;
    const instanceOperation = openapi.getPath(instancePathPrefix) || {};

    for (const [method, operation] of Object.entries(instanceOperation)) {
        cmd.addCommand(
            makeOperationCommand({
                ...ctx,
                method,
                operation
            })
        );
    }

    // for (const {url} of openapi.getChild(instancePathPrefix)) {
    //     for (const [method, operation] of Object.entries(instanceOperation)) {
    //         cmd.addCommand(makeOperationCommand({
    //             ...ctx,
    //             method, 
    //             operation,
    //             url
    //         }));
    //     }
    // }

    for (const child of openapi.getChild(instancePathPrefix)) {
        cmd.addCommand(makeResourceCommand(child, {
            path: child.path
        }).description(`Manage ${pluralize(child.type)} of the ${resource.type}`));
    }

    return cmd;
};

function buildNamespaceCommand(name, spec, ctx) {
    const cmd = new Command(name).storeOptionsAsProperties(false);

    cmd.addCommand(printCommand('spec', spec));

    for (const resource of spec) {
        let path = ctx.path;

        if (resource.location) {
            path = `${path}/{locationId}`
        };

        if (resource.parent && resource.parent.includes('project')) {
            path = `${path}/project/{projectId}/${resource.type}`
        };

        cmd.addCommand(makeResourceCommand(resource, {
            path
        }));
    };
    return cmd;
}

const buildProgram = (options={}) => {
    const program = new Command('h1-cli');
    const namespaces = openapi.getNamespaces();
    for (const [name, spec] of Object.entries(namespaces)) {
        // if (name != 'website') continue;
        program.addCommand(buildNamespaceCommand(name, spec, {
            path: `/${name}`,
            ...options
        }));
    }
    return program;
}

const buildCli = async (options) => {
    await openapi.init(options.openapiUrl);
    return buildProgram(options={});
}

module.exports = {
    buildCli,
    buildProgram,
}