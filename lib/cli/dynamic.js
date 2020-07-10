'use strict';
const { Category, Command } = require('./entity');
const pluralize = require('pluralize');
const openapi = require('../openapi');
const request = require('./request');

const printCommand = (name, content) => () => new Command({
    name,
    summary: 'Print specification of context',
    handler: () => content,
});

const makeOperationCommand = ({ name, operation, method, path }) => () => {
    const options = request.input(operation);
    return new Command({
        name,
        summary: `${operation.summary} [${operation.operationId}]`,
        options: request.input(operation),
        handler: async (opts) => {
            const url = request.url(path, operation, opts);
            const body = request.body(options, operation, opts);
            opts.defaultQuery = request.query(path, operation, opts);
            return opts.format(opts, await opts.api[method](url, body));
        },
    });
};

const makeResourceCommand = (resource, ctx) => () => {
    const cmd = new Category({
        name: resource.type,
        summary: ctx.description || `Management of ${resource.type}`,
    });

    cmd.addCommand(printCommand('spec', ctx, ctx));

    const collectionOperation = openapi.getPath(ctx.path) || {};

    if (collectionOperation) {
        if (collectionOperation.post) {
            cmd.addCommand(
                makeOperationCommand({
                    ...ctx,
                    name: 'create',
                    method: 'post',
                    operation: collectionOperation.post,
                })
            );
        }
        if (collectionOperation.get) {
            cmd.addCommand(
                makeOperationCommand({
                    ...ctx,
                    name: 'list',
                    method: 'get',
                    operation: collectionOperation.get,
                })
            );
        }
    }

    const instancePathPrefix = `${ctx.path}/{${resource.type}Id}`;
    const instanceOperation = openapi.getPath(instancePathPrefix) || {};
    if (instanceOperation) {
        if (instanceOperation.get) {
            cmd.addCommand(
                makeOperationCommand({
                    ...ctx,
                    name: 'show',
                    method: 'get',
                    operation: instanceOperation.get,
                    path: instancePathPrefix,
                })
            );
        }
        if (instanceOperation.patch) {
            cmd.addCommand(
                makeOperationCommand({
                    ...ctx,
                    name: 'update',
                    method: 'patch',
                    operation: instanceOperation.patch,
                    path: instancePathPrefix,

                })
            );
        }

        if (instanceOperation.delete) {
            cmd.addCommand(
                makeOperationCommand({
                    ...ctx,
                    name: 'delete',
                    method: 'delete',
                    operation: instanceOperation.delete,
                    path: instancePathPrefix,
                })
            );
        }
    }

    for (const { name, path } of openapi.getActions(instancePathPrefix)) {
        cmd.addCommand(makeOperationCommand({
            ...ctx,
            name,
            method: 'post',
            operation: openapi.getPath(path).post,
            path,
        }));
    }

    for (const child of openapi.getChild(instancePathPrefix)) {
        cmd.addCommand(makeResourceCommand(child, {
            path: child.path,
            description: `Manage ${pluralize(child.type)} of the ${resource.type}`,
        }));
    }

    return cmd;
};

const buildNamespaceCommand = (name, spec, ctx) => async () => {
    const cmd = new Category({
        name,
        summary: `Management of ${name}`,
        extensions: [`h1-cli-${name}`],
        plugins: [
            require('./../../plugin/verbose'),
            require('./../../plugin/formatOutput'),
            require('./../../plugin/api'),
            require('./../../plugin/noWait'),
            require('./../../plugin/setDefault'),
        ],
    });

    cmd.addCommand(printCommand('spec', spec, ctx));

    const parent_cmds = {};

    for (const resource of spec) {
        let path = ctx.path;

        if (resource.location) {
            path = `${path}/{locationId}`;
        }

        // Custom logic for resource in multiple namespaces
        // Example for "iam/policy":
        // iam policy - for policy of project
        // iam policy organisation - for policy of project
        // Example for "website/instance":
        // website instance - for instance of project
        // Future proof, adding new resources at any level
        if (resource.parent) {
            for (const parent of resource.parent) {
                let parent_cmd;
                if (parent == 'project') {
                    parent_cmd = cmd;
                } else {
                    parent_cmds[parent] = parent_cmds[parent] || new Category({
                        name: parent,
                        summary: `Management of ${parent}`,
                    });
                    parent_cmd = parent_cmds[parent];
                }

                parent_cmd.addCommand(makeResourceCommand(resource, {
                    ...ctx,
                    path: `${path}/${parent}/{${parent}Id}/${resource.type}`,
                }));
            }
        } else {
            cmd.addCommand(makeResourceCommand(resource, {
                ...ctx,
                path: `${path}/${resource.type}`,
            }));
        }
    }
    cmd.addCommand(...Object.values(parent_cmds));
    // fs.subdirectories(directory, false, options.matching)
    return cmd;
};

const buildProgram = async (options = {}) => {
    // TODO: Add scoping for h1-cli
    const program = new Category({
        name: 'h1-cli',
        summary: `Management for cloud services of ${openapi.getTitle()}`,
        state: options.state,
        extensions: ['h1-cli-root'],
    });

    program.addCommand(new Category({
        name: 'config',
        summary: 'Management of CLI configuration',
        extensions: ['h1-cli-config'],
    }));

    const namespaces = openapi.getNamespaces();
    for (const [name, spec] of Object.entries(namespaces)) {
        // if (name != 'website') continue;
        await program.addCommand(buildNamespaceCommand(name, spec, {
            ...options,
            path: `/${name}`,
        }));
    }
    return program;
};

module.exports = {
    buildProgram,
};