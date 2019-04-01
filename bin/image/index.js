'use strict';
const text = require('lib/text');

const genericDefaults = require('bin/generic/defaults');
const genericResource = require('bin/generic');

const resource = {
    name: 'image',
    defaultQuery: '[].{id:_id,name:name,fileSize:ceil(fileSize),created:createdOn,state:state,tags:join(\',\',keys(tag || `{}`) ) }',
    commands: ['show', 'delete', 'rename', 'history', 'tag', 'transfer', 'service', 'access/project'],
    plugins: genericDefaults.plugins,
    url: () => 'image',
    title: 'image',
};

const category = genericResource(resource);

category.addChild(require('./create')(resource));
category.addChild(require('./list')(resource));

const childDefaults = Object.assign({}, resource, {
    options: {
        [resource.name]: {
            description: `${text.toTitleCase(resource.title)} ID or name`,
            type: 'string',
            required: true,
        },
    },
    url: args => `${resource.url(args)}/${args[resource.name]}`,
    dirname: __dirname,
    context: {
        downloadParams: `--${resource.name} my-${resource.name}`,
    },
});

category.addChild(require('./disk')(childDefaults));

module.exports = category;
