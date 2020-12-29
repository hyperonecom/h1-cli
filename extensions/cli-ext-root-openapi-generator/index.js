
import pluralize from 'pluralize';
import { Category, Command } from '@hyperone/cli-framework';
import { openapi } from '@hyperone/cli-core';
import { deCamelCase } from '@hyperone/cli-core/lib/transform';

import request from './request';

const applyMiddleware = async (middlewares, name, value, ...args) => {
    for (const middleware of middlewares.filter(x => x[name])) {
        value = middleware[name](await value, ...args);
    }
    return value;
};

export const makeOperationCommand = ({ name, endpoint, method, path }) => async () => {
    const operation = endpoint[method];
    const parameters = [
        ...operation.parameters || [],
        ...endpoint.parameters || [],
    ];
    const middlewares = request.middlewareForOperation(operation);
    const options = await applyMiddleware(middlewares, 'afterRenderOptions',
        request.renderOptions(operation, parameters)
    );

    const cmd = new Command({
        name,
        summary: operation.summary,
        description: [
            'See also:',
            '',
            `* [API reference](https://api.hyperone.com/v2/docs#operation/${operation.operationId})`,
        ].join('\n'),
        options: [
            ...options,
            {
                name: 'skeleton',
                default: false,
                type: Boolean,
                description: 'Display intermediary representation of operation',
            },
        ],
        tags: [operation.operationId],
        examples: async () => {
            if (!operation['x-examples']) {
                return [];
            }
            const openApiexamples = await operation['x-examples']();
            const cliExamples = [];
            for (const [title, example] of Object.entries(openApiexamples)) {
                cliExamples.push({
                    title,
                    command: await cmd.generateArgv(example).join(' '),
                });
            }
            return cliExamples;
        },
        handler: async (opts) => {
            opts.config = cmd.config;
            const optsAll = opts._all || opts;
            const parameters = request.renderParameter(optsAll, options);
            const url = openapi.getUrl(path, parameters);
            const query = request.renderQuery(optsAll, options);
            let requestBody;
            if (['post', 'patch', 'put'].includes(method)) {
                requestBody = request.renderBody(operation, optsAll, options);
            }

            if (optsAll.skeleton) {
                return {
                    parameters,
                    requestBody: requestBody || {},
                };
            }

            requestBody = await applyMiddleware(middlewares, 'beforeRequest',
                requestBody, url, opts, options, cmd
            );
            const resp = await opts.api[method](url, {
                json: requestBody,
                query,
            });
            return opts.format(opts, resp);
        },
    });
    cmd.defaultQuery = request.generateQuery(path, operation);
    return cmd;
};

export const makeResourceCommand = (resource, ctx) => () => {
    const cmd = new Category({
        name: deCamelCase(resource.type),
        summary: ctx.description || `Management of ${resource.type} resource`,
    });

    const collectionEndpoint = openapi.getPath(ctx.path) || {};

    if (collectionEndpoint) {
        if (collectionEndpoint.post) {
            cmd.addCommand(
                makeOperationCommand({
                    ...ctx,
                    name: 'create',
                    method: 'post',
                    endpoint: collectionEndpoint,
                })
            );
        }
        if (collectionEndpoint.get) {
            cmd.addCommand(
                makeOperationCommand({
                    ...ctx,
                    name: 'list',
                    method: 'get',
                    endpoint: collectionEndpoint,
                })
            );
        }
        if (collectionEndpoint.patch) {
            cmd.addCommand(
                makeOperationCommand({
                    ...ctx,
                    name: 'update',
                    method: 'patch',
                    endpoint: collectionEndpoint,
                })
            );
        }
    }

    for (const { path, endpoint } of openapi.getDetail(ctx.path)) {
        if (endpoint.get) {
            cmd.addCommand(
                makeOperationCommand({
                    ...ctx,
                    name: 'show',
                    method: 'get',
                    endpoint,
                    path,
                })
            );
        }
        if (endpoint.patch) {
            cmd.addCommand(
                makeOperationCommand({
                    ...ctx,
                    name: 'update',
                    method: 'patch',
                    endpoint,
                    path,
                })
            );
        }

        if (endpoint.delete) {
            cmd.addCommand(
                makeOperationCommand({
                    ...ctx,
                    name: 'delete',
                    method: 'delete',
                    endpoint,
                    path,
                })
            );
        }

        for (const { name, path: actionPath, endpoint } of openapi.getActions(path)) {
            for (const method of ['post', 'get']) {
                if (!endpoint[method]) continue;

                cmd.addCommand(makeOperationCommand({
                    ...ctx,
                    name,
                    method,
                    path: actionPath,
                    endpoint,
                }));
            }
        }

        for (const child of openapi.getChild(path)) {
            cmd.addCommand(makeResourceCommand(child, {
                path: child.path,
                description: `Manage ${pluralize(child.type)} of the ${resource.type}`,
            }));
        }
    }

    return cmd;
};

export const buildNamespaceCommand = (name, spec, ctx) => async () => {
    const cmd = new Category({
        name,
        summary: `Management of ${name} namespace`,
        extensions: [`@hyperone/cli-ext-${name}`],
    });

    const children = openapi.getChild(ctx.path);

    if (name !== 'iam') {
        children.push(
            ...openapi.getChild(`${ctx.path}/project/{projectId}`),
            ...openapi.getChild(`${ctx.path}/{locationId}/project/{projectId}`)
        );
    }

    for (const child of children) {
        cmd.addCommand(makeResourceCommand(child, {
            path: child.path,
            description: `Management of ${child.type} resource`,
        }));
    }

    return cmd;
};


export default {
    name: require('./package.json').name,
    version: require('./package.json').version,
    load: async (parent) => {
        const namespaces = openapi.getNamespaces();
        for (const [name, spec] of Object.entries(namespaces)) {
            await parent.addCommand(buildNamespaceCommand(name, spec, {
                path: `/${name}`,
            }));
        }
    },
};




