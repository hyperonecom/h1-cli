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
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 17ef869... Added type to schema in 'registry/index.js'
=======
>>>>>>> 37034cd... Added type to schema in 'registry/index.js'
>>>>>>> e07ff18bc55568aed33ee59b4d978fe817f11a2d
    type: {
        description: 'Registry type name or ID',
        type: 'string',
        required: true,
        onCreate: true,
        destBody: 'service',
    },
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 7d954de... Added registry folder and files
=======
>>>>>>> 17ef869... Added type to schema in 'registry/index.js'
=======
>>>>>>> c102012... Added registry folder and files
=======
>>>>>>> 37034cd... Added type to schema in 'registry/index.js'
>>>>>>> e07ff18bc55568aed33ee59b4d978fe817f11a2d
};

const resource = {
    name: 'registry',
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> e07ff18bc55568aed33ee59b4d978fe817f11a2d
    defaultQuery: '[].{id:_id,name:name,service:flavour,size:sizeUsed,created:createdOn,state:state,tags:join(\',\',keys(tag || `{}`) ) }',
    url: () => 'registry',
    plugins: genericDefaults.plugins,
    extraCommands: ['create', 'start', 'stop', 'transfer', 'credential'],
<<<<<<< HEAD
=======
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
=======
    defaultQuery: '[].{id:_id,name:name,type:type,state:state,tags:join(\',\',keys(tag || `{}`) ) }',
=======
    defaultQuery: '[].{id:_id,name:name,type:type,size:size,state:state,tags:join(\',\',keys(tag || `{}`) ) }',
>>>>>>> df65550... Added size to defaultQuery in 'registry/index.js'
    url: () => 'registry',
    plugins: genericDefaults.plugins,
    extraCommands: ['create', 'start', 'stop', 'transfer'],
>>>>>>> c102012... Added registry folder and files
=======
    defaultQuery: '[].{id:_id,name:name,type:type,sizeUsed:sizeUsed,state:state,tags:join(\',\',keys(tag || `{}`) ) }',
=======
    defaultQuery: '[].{id:_id,name:name,service:flavour,size:sizeUsed,created:createdOn,state:state,tags:join(\',\',keys(tag || `{}`) ) }',
>>>>>>> 8bb94c7... Changes in registry and generic delete
    url: () => 'registry',
    plugins: genericDefaults.plugins,
    extraCommands: ['create', 'start', 'stop', 'transfer', 'credential'],
>>>>>>> 8c044d2... Small changes in registry and repository
>>>>>>> e07ff18bc55568aed33ee59b4d978fe817f11a2d
    dirname: __dirname,
    earlyAdoptersOnly: true,
    title: 'Registry',
    schema,
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> e07ff18bc55568aed33ee59b4d978fe817f11a2d
    credential_types: ['sha512'],
};

const childDefaults = Object.assign({}, resource, {
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
    credential_types: ['password'],
=======
    credential_types: ['sha512'],
>>>>>>> 9248f35... Changed credential type in resource for 'registry/index.js'
=======
    credential_types: ['sha512'],
>>>>>>> 65656a0... Changed credential type in resource for 'registry/index.js'
};

const actionDefault = Object.assign({}, resource, {
>>>>>>> 7d954de... Added registry folder and files
=======
>>>>>>> 6979b02... Changes in registry and generic delete
=======
    credential_types: ['password'],
};

<<<<<<< HEAD
const actionDefault = Object.assign({}, resource, {
>>>>>>> c102012... Added registry folder and files
=======
const childDefaults = Object.assign({}, resource, {
>>>>>>> 8bb94c7... Changes in registry and generic delete
>>>>>>> e07ff18bc55568aed33ee59b4d978fe817f11a2d
    options: {
        [resource.name]: {
            description: `${text.toTitleCase(resource.title)} ID or name`,
            type: 'string',
            required: true,
        },
    },
    url: args => `${resource.url(args)}/${args[resource.name]}`,
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
    dirname: __dirname,
>>>>>>> 7d954de... Added registry folder and files
=======
>>>>>>> 6979b02... Changes in registry and generic delete
=======
    dirname: __dirname,
>>>>>>> c102012... Added registry folder and files
=======
>>>>>>> 8bb94c7... Changes in registry and generic delete
>>>>>>> e07ff18bc55568aed33ee59b4d978fe817f11a2d
});

const category = genericResource(resource);

<<<<<<< HEAD
category.addChild(require('./repository')(childDefaults));

module.exports = category;
=======
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
category.addChild(require('./repository')(actionDefault));
=======
category.addChild(require('./repository')(childDefaults));
>>>>>>> 8bb94c7... Changes in registry and generic delete

module.exports = category;
<<<<<<< HEAD
>>>>>>> c102012... Added registry folder and files
=======
>>>>>>> 734c3c7... Added newline to 'registry/index.js'
>>>>>>> e07ff18bc55568aed33ee59b4d978fe817f11a2d
