'use strict';
const text = require('lib/text');
const genericDefaults = require('bin/generic/defaults');
const genericResource = require('bin/generic');

const schema = {
    name: {
        description: 'Registry name',
        type: 'string',
        required: true,
        onCreate: true,
    },
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 17ef869... Added type to schema in 'registry/index.js'
    type: {
        description: 'Registry type name or ID',
        type: 'string',
        required: true,
        onCreate: true,
        destBody: 'service',
    },
<<<<<<< HEAD
=======
>>>>>>> 7d954de... Added registry folder and files
=======
>>>>>>> 17ef869... Added type to schema in 'registry/index.js'
};

const resource = {
    name: 'registry',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    defaultQuery: '[].{id:_id,name:name,service:flavour,size:sizeUsed,created:createdOn,state:state,tags:join(\',\',keys(tag || `{}`) ) }',
    url: () => 'registry',
    plugins: genericDefaults.plugins,
    extraCommands: ['create', 'start', 'stop', 'transfer', 'credential'],
=======
    defaultQuery: '[].{id:_id,name:name,type:type,state:state,tags:join(\',\',keys(tag || `{}`) ) }',
=======
    defaultQuery: '[].{id:_id,name:name,type:type,size:size,state:state,tags:join(\',\',keys(tag || `{}`) ) }',
>>>>>>> a59707c... Added size to defaultQuery in 'registry/index.js'
    url: () => 'registry',
    plugins: genericDefaults.plugins,
    extraCommands: ['create', 'start', 'stop', 'transfer'],
>>>>>>> 7d954de... Added registry folder and files
=======
    defaultQuery: '[].{id:_id,name:name,type:type,sizeUsed:sizeUsed,state:state,tags:join(\',\',keys(tag || `{}`) ) }',
=======
    defaultQuery: '[].{id:_id,name:name,service:flavour,size:sizeUsed,created:createdOn,state:state,tags:join(\',\',keys(tag || `{}`) ) }',
>>>>>>> 6979b02... Changes in registry and generic delete
    url: () => 'registry',
    plugins: genericDefaults.plugins,
    extraCommands: ['create', 'start', 'stop', 'transfer', 'credential'],
>>>>>>> abb9874... Small changes in registry and repository
    dirname: __dirname,
    earlyAdoptersOnly: true,
    title: 'Registry',
    schema,
<<<<<<< HEAD
<<<<<<< HEAD
    credential_types: ['sha512'],
};

const childDefaults = Object.assign({}, resource, {
<<<<<<< HEAD
=======
    credential_types: ['password'],
=======
    credential_types: ['sha512'],
>>>>>>> 9248f35... Changed credential type in resource for 'registry/index.js'
};

const actionDefault = Object.assign({}, resource, {
>>>>>>> 7d954de... Added registry folder and files
=======
>>>>>>> 6979b02... Changes in registry and generic delete
    options: {
        [resource.name]: {
            description: `${text.toTitleCase(resource.title)} ID or name`,
            type: 'string',
            required: true,
        },
    },
    url: args => `${resource.url(args)}/${args[resource.name]}`,
<<<<<<< HEAD
<<<<<<< HEAD
=======
    dirname: __dirname,
>>>>>>> 7d954de... Added registry folder and files
=======
>>>>>>> 6979b02... Changes in registry and generic delete
});

const category = genericResource(resource);

<<<<<<< HEAD
<<<<<<< HEAD
category.addChild(require('./repository')(childDefaults));

module.exports = category;
=======
category.addChild(require('./repository')(actionDefault));
=======
category.addChild(require('./repository')(childDefaults));
>>>>>>> 6979b02... Changes in registry and generic delete

module.exports = category;
<<<<<<< HEAD
>>>>>>> 7d954de... Added registry folder and files
=======
>>>>>>> 2b20f16... Added newline to 'registry/index.js'
