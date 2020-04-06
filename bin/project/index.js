'use strict';

const genericResource = require('bin/generic');

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
    defaultQuery: '[].{id:id, name:name, type:flavour, organisation:organisation, state:state, tags:join(\',\',keys(tag || `{}`) ) }',
    url: () => 'iam/project',
    plugins: [
        require('bin/_plugins/loginRequired'),
        require('bin/_plugins/outputFormat'),
        require('bin/_plugins/api'),
    ],
    priority: 15,
    schema,
    dirname: __dirname,
    title: 'Project',
    commands: ['show', 'delete', 'access/resource', 'list', 'history', 'rename', 'tag', 'service', 'payment', 'create'],
};
const category = genericResource(resource);

const childDefaults = Object.assign({}, resource, {
    url: args => `${resource.url(args)}/${args.project}`,
    options: {
        [resource.name]: {
            description: 'Project ID or name',
            type: 'string',
            required: true,
        },
    },
});

category.addChild(require('./list')(resource));
category.addChild(require('./transfer')(childDefaults));
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
