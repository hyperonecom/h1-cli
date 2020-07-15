'use strict';

const { Category, Command } = require('h1-cli-framework');

module.exports = {
    name: require('./package.json').name,
    version: require('./package.json').version,
    load: async (parent) => parent.loadHook.push(() => {

        const cmd = new Category({
            name: 'auth',
            summary: 'Authenticate to use CLI',
        });

        parent.addCommand(cmd);

        cmd.addCommand(() => new Command({
            name: 'user',
            summary: 'Authenticate as user of Platform',
            options: [
                {
                    name: 'username', required: true, use: {
                        in: 'body',
                        field: '/username',
                    },
                },
                {
                    name: 'password', required: true, use: {
                        in: 'body',
                        field: '/password',
                    },
                },
            ],
            handler: async (opts) => {
                const openid_configuration = await opts.http.get(opts.openapi.getUrl('/.well-known/openid-configuration'));
                const token_endpoint = openid_configuration.token_endpoint;
                // const token_endpoint = openid_configuration.token_endpoint;
                const token = await opts.http.post(token_endpoint, {
                    grant_type: 'password',
                    username: opts._all.username,
                    password: opts._all.password,
                    scope: 'offline_access',
                });
                opts.auth.updateToken(token);
                return 'Token successfully updated.';
            },
        }));
    }),
};
