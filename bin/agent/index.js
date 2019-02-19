'use strict';
const text = require('lib/text');
const genericDefaults = require('bin/generic/defaults');
const genericResource = require('bin/generic');
const genericAction = require('bin/generic/action');

const resource = {
    name: 'agent',
    defaultQuery: '[].{id:_id,name:name,type:type,state:state,tags:join(\',\',keys(tag || `{}`) ) }',
    url: () => 'agent',
    plugins: genericDefaults.plugins,
    extraCommands: [],
    title: 'Agent',
};

const actionDefault = Object.assign({}, resource, {
    options: {
        vault: {
            description: `${text.toTitleCase(resource.title)} ID or name`,
            type: 'string',
            required: true,
            dest: 'vault',
        },
    },
    url: args => `${resource.url(args)}/${args.vault}`,
    dirname: __dirname,
});
const credential_type = ['certificate'];

const category = genericResource(resource);

category.addChild(require('./create')(resource));

category.addChild(require('../generic/credential')(resource, credential_type));

category.addChild(genericAction(actionDefault, 'suspend'));
category.addChild(genericAction(actionDefault, 'start'));

module.exports = category;
