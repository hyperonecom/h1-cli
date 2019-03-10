'use strict';

const genericDefaults = require('bin/generic/defaults');
const genericResource = require('bin/generic');
const genericAction = require('bin/generic/action');

const text = require('lib/text');

const resource = {
    name: 'container',
    defaultQuery: '[].{id:_id,name:name,image:image,state:state }',
    url: () => 'container',
    plugins: genericDefaults.plugins,
    earlyAdoptersOnly: true,
    title: 'container',
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

// category.addChild(require('./ps')(childDefault));
// category.addChild(require('./attach')(childDefault));
category.addChild(require('./log')(childDefault));
const actionDefault = Object.assign({}, resource, childDefault, {
    dirname: `${__dirname}/action`,
});

category.addChild(genericAction(actionDefault, 'stop'));
category.addChild(genericAction(actionDefault, 'start'));
category.addChild(genericAction(actionDefault, 'restart'));

module.exports = category;
