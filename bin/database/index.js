'use strict';
const text = require('lib/text');
const genericDefaults = require('bin/generic/defaults');
const genericResource = require('bin/generic');
const genericAction = require('bin/generic/action');

const resource = {
    name: 'database',
    defaultQuery: '[].{id:_id,name:name,type:type,state:state,tags:join(\',\',keys(tag || `{}`) ) }',
    url: () => 'database',
    plugins: genericDefaults.plugins,
    earlyAdoptersOnly: true,
    title: 'database',
};

const actionDefault = Object.assign({}, resource, {
    options: {
        database: {
            description: `${text.toTitleCase(resource.title)} ID or name`,
            type: 'string',
            required: true,
            dest: 'database',
        },
    },
    url: args => `${resource.url(args)}/${args.database}`,
    dirname: __dirname,
});
const credential_type = ['password'];

const category = genericResource(resource);

category.addChild(require('./create')(resource));

category.addChild(require('../generic/credential')(resource, credential_type));

category.addChild(genericAction(actionDefault, 'stop'));
category.addChild(genericAction(actionDefault, 'start'));

module.exports = category;
