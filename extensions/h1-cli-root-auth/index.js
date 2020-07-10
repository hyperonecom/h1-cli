'use strict';

const { Category, Command } = require('../../lib/cli/entity');

module.exports = {
    name: __dirname.split('/').pop(),
    load: async (parent) => {

        const cmd = new Category({
            name: 'auth',
            summary: 'Authenticate to use CLI',
        });

        parent.addCommand(cmd);

        cmd.addCommand(new Command({
            name: 'user',
            summary: 'Authenticate as user of Platform',
            options: [
                { name: 'username', required: true },
                { name: 'password', required: true },
            ],
            handler: async (opts) => {
                const openid_configuration = await opts.api.get(opts.openapi.getUrl('/.well-known/openid-configuration'));
                const token = await opts.http.post(openid_configuration.token_endpoint, {
                    grant_type: 'password',
                    username: opts._all.username,
                    password: opts._all.password,
                    scope: 'offline_access',
                });
                opts.api.updateToken(token);
                console.error('Token successfully updated.');
            },
        }));
    },
};
