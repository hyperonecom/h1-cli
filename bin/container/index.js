'use strict';

const genericDefaults = require('bin/generic/defaults');
const genericAction = require('bin/generic/action');
const genericResource = require('bin/generic');

const resource = {
    name: 'container',
    defaultQuery: '[].{id:_id,name:name,state:state,processing:processing}',
    url: () => 'container',
    plugins: genericDefaults.plugins,
    title: 'container',
};

const childDefaults = Object.assign({}, resource, {
    options: {
        container: {
            description: `${resource.title} ID or name`,
            type: 'string',
            required: true,
            dest: 'id',
        },
    },
    url: args => `${resource.url(args)}/${args.id}`,
    dirname: `${__dirname}/action`,
});

const actionDefault = Object.assign({}, childDefaults, {
    dirname: `${__dirname}/action`,
});

const category = genericResource(resource);

category.addChild(require('./create')(resource));
category.addChild(genericAction(actionDefault, 'stop'));
category.addChild(genericAction(actionDefault, 'start'));
category.addChild(require('./logs')(childDefaults));

module.exports = category;
