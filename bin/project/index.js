'use strict';

const genericResource = require('bin/generic');

const config = require('lib/config');

const schema = {
    name: {
        description: 'ISO name',
        type: 'string',
        required: true,
        onCreate: true,
    },
    organisation: {
        description: 'Organisation ID or name',
        type: 'string',
        required: true,
        onCreate: true,
    },
    tags: {
        virtual: true,
        onCreate: true,
        onUpdate: true,
    },
};

const resource = {
    name: 'project',
    defaultQuery: '[].{id:_id,name:name,tags:join(\',\',keys(tag || `{}`) ), active: active, organisation:organisation }',
    url: () => 'project',
    plugins: [
        require('bin/_plugins/loginRequired'),
        require('bin/_plugins/outputFormat'),
        require('bin/_plugins/api'),
    ],
    priority: 15,
    schema,
    dirname: __dirname,
    title: 'project',
    commands: ['show', 'delete', 'access/user', 'history', 'rename', 'tag', 'service', 'payment', 'create'],
};
const category = genericResource(resource);

const active_project = config.get_active_project();

const childDefaults = Object.assign({}, resource, {
    options: {
        project: {
            description: 'Project ID or name. Active project by default',
            type: 'string',
            required: !active_project,
            defaultValue: active_project,
        },
    },
    url: args => `${resource.url(args)}/${args.project}`,
});

category.addChild(require('./list')(resource));
category.addChild(require('./transfer')(childDefaults));
category.addChild(require('./token')(childDefaults));
category.addChild(require('./notification')(childDefaults));
category.addChild(require('./select')(childDefaults));
category.addChild(require('./limits')(childDefaults));
category.addChild(require('./logging')(childDefaults));

category.addChild(require('bin/generic/credentials')(Object.assign(
    {}
    , childDefaults
    , {
        url: args => `${childDefaults.url(args)}/credentialStore`,
        context: {
            addParams: '--project my-project',
            deleteParams: '--project my-project',
            listParams: '--project my-project',
            renameParams: '--project my-project',
        },
    }
)));

module.exports = category;
