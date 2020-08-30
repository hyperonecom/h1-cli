
import pluralize from 'pluralize';
import { Category, Command } from '@hyperone/cli-framework';
import { openapi } from '@hyperone/cli-core';

import request from './request';

const printCommand = (name, content) => new Command({
    name,
    summary: 'Print specification of context',
    handler: () => content,
});

export const makeOperationCommand = ({ name, endpoint, method, path }) => () => {
    const operation = endpoint[method];
    const parameters = [
        ...operation.parameters || [],
        ...endpoint.parameters || [],
    ];
    const options = request.renderOptions(operation, parameters);

    return new Command({
        name,
        summary: `${operation.summary} [${operation.operationId}]`,
        options,
        tags: [operation.operationId],
        handler: async (opts) => {
            const optsAll = opts._all || opts;
            const url = openapi.getUrl(request.renderPath(path, operation, optsAll));
            const body = request.renderBody(operation, optsAll, options);
            opts.defaultQuery = request.renderQuery(path, operation, optsAll);
            const resp = await opts.api[method](url, body);
            return opts.format(opts, resp);
        },
    });
};

export const makeResourceCommand = (resource, ctx) => () => {
    const cmd = new Category({
        name: resource.type,
        summary: ctx.description || `Management of ${resource.type} resource`,
    });

    cmd.addCommand(() => printCommand('spec', ctx));

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

    cmd.addCommand(printCommand('spec', spec, ctx));

    const children = [
        ...openapi.getChild(ctx.path),
    ];

    if (name !== 'iam') {
        children.push(
            ...openapi.getChild(`${ctx.path}/project/{projectId}`),
            ...openapi.getChild(`${ctx.path}/{locationId}/project/{projectId}`),
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




