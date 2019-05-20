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
    earlyAdoptersOnly: true,
    title: 'Agent',
    credential_types: ['certificate'],
};


const actionDefault = Object.assign({}, resource, {
    options: {
        [resource.name]: {
            description: `${text.toTitleCase(resource.title)} ID or name`,
            type: 'string',
            required: true,
        },
    },
    url: args => `${resource.url(args)}/${args[resource.name]}`,
    dirname: __dirname,
});

const category = genericResource(resource);

category.addChild(require('./create')(resource));
category.addChild(require('bin/generic/inspect')(resource));
category.addChild(require('./resource')(actionDefault));
category.addChild(require('../generic/credential')(resource));

category.addChild(require('bin/generic/set-update')(Object.assign({}, actionDefault, {
    url: args => `${actionDefault.url(args)}/enabledServices`,
    title: 'enabled service',
    name: 'enabled-service',
    update_name: 'service',
    context: {
        addParams: `--${resource.name} my-${resource.name}`,
        listParams: `--${resource.name} my-${resource.name}`,
        deleteParams: `--${resource.name} my-${resource.name}`,
    },
})));

category.addChild(genericAction(actionDefault, 'suspend'));
category.addChild(genericAction(actionDefault, 'start'));

module.exports = category;
