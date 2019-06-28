'use strict';

const genericDefaults = require('bin/generic/defaults');
const genericResource = require('bin/generic/root');

const text = require('lib/text');

const resource = {
    name: 'container',
    defaultQuery: '[].{id:_id,name:name,image:image,state:state}',
    url: () => 'container',
    plugins: genericDefaults.plugins,
    earlyAdoptersOnly: true,
    dirname: __dirname,
    title: 'Container',
    extraCommands: ['log'],
};

const category = genericResource(resource);

category.addChild(require('./create')(resource));

const childDefault = Object.assign({}, resource, {
    options: {
        [resource.name]: {
            description: `${text.toTitleCase(resource.title)} ID or name`,
            type: 'string',
            required: true,
        },
    },
    url: args => `${resource.url(args)}/${args[resource.name]}`,
    // dirname: __dirname,
});

category.addChild(require('./attach')(childDefault));
category.addChild(require('./process')(childDefault));

module.exports = category;
