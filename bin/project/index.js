'use strict';

const genericResource = require('bin/generic');

const config = require('lib/config');

const resource = {
    name: 'project',
    defaultQuery: '[].{id:_id,name:name,billing:billing.company,active:active,processing:processing}',
    url: () => 'tenant',
    plugins: [
        require('bin/_plugins/loginRequired'),
        require('bin/_plugins/outputFormat'),
        require('bin/_plugins/api'),
    ],
    title: 'project',
    commands: ['show', 'delete', 'history', 'rename'],
};

const category = genericResource(resource);
category.addChild(require('./list')(resource));

const active_project = config.get('profile.project._id');

const childDefaults = Object.assign({}, resource, {
    options: {
        project: {
            description: 'Project ID or name',
            type: 'string',
            required: !active_project,
            defaultValue: active_project,
            dest: 'id',
        },
    },
    url: args => `${resource.url(args)}/${args.id}`,
});

category.addChild(require('./access')(childDefaults));
category.addChild(require('./token')(childDefaults));

category.addChild(require('./select')(childDefaults));
category.addChild(require('./limits')(childDefaults));

category.addChild(require('bin/generic/credentials')(Object.assign(
    {}
    , childDefaults
    , {
        url: args => `${childDefaults.url(args)}/credentialStore`,
        context: {
            addParams: '--project my-project',
            deleteParams:  '--project my-project',
            listParams: '--project my-project',
        },
    }
)));

module.exports = category;
