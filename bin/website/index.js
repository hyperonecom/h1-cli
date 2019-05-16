'use strict';
const text = require('lib/text');
const genericDefaults = require('bin/generic/defaults');
const genericResource = require('bin/generic');
const genericAction = require('bin/generic/action');

const resource = {
    name: 'website',
    defaultQuery: '[].{id:_id,name:name,image:image,domains:join(\',\',domain), state:state,tags:join(\',\',keys(tag || `{}`) ) }',
    url: () => 'website',
    plugins: genericDefaults.plugins,
    earlyAdoptersOnly: true,
    title: 'website',
};

const actionDefault = Object.assign({}, resource, {
    options: {
        website: {
            description: `${text.toTitleCase(resource.title)} ID or name`,
            type: 'string',
            required: true,
            dest: 'website',
        },
    },
    url: args => `${resource.url(args)}/${args.website}`,
    dirname: __dirname,
});
const credential_type = ['certificate', 'password'];

const category = genericResource(resource);

category.addChild(require('./create')(resource));
category.addChild(require('./sftp')(resource));

category.addChild(require('../generic/credential')(resource, credential_type));

category.addChild(genericAction(actionDefault, 'stop'));
category.addChild(genericAction(actionDefault, 'start'));

module.exports = category;
