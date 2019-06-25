'use strict';
const genericDefaults = require('bin/generic/defaults');
const genericResource = require('bin/generic');
<<<<<<< HEAD
const text = require('lib/text');
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
const genericAction = require('bin/generic/action');
>>>>>>> 7d954de... Added registry folder and files
=======
const genericAction = require('bin/generic/action');
>>>>>>> a4b3c86... Added genericAction import to /registry/repository
=======
const genericAction = require('bin/generic/action');
>>>>>>> ac2db78... Added genericAction import to /registry/repository
const text = require('lib/text');
=======
>>>>>>> 96a4e54... Deleted imports in 'repository/index.js'
=======
=======
>>>>>>> abb9874... Small changes in registry and repository
const text = require('lib/text');
>>>>>>> f08f70c... Added text const to /respository/index.js
=======
const genericAction = require('bin/generic/action');
const text = require('lib/text');
>>>>>>> c102012... Added registry folder and files
=======
>>>>>>> 65b9c15... Deleted imports in 'repository/index.js'
=======
=======
>>>>>>> 8c044d2... Small changes in registry and repository
const text = require('lib/text');
>>>>>>> 0feacac... Added text const to /respository/index.js
>>>>>>> e07ff18bc55568aed33ee59b4d978fe817f11a2d

module.exports = (parent) => {

    const resource = {
        name: 'repository',
<<<<<<< HEAD
        defaultQuery: '[].{id:id}',
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        defaultQuery: '[].{id:id}',
        url: args => `${parent.url(args)}/repository`,
        options: parent.options,
        plugins: genericDefaults.plugins,
        dirname: __dirname,
        commands: ['list'],
        extraCommands: [],
        title: `Repository of ${parent.title}`,
    };

    const childDefaults = Object.assign({}, resource, {
        options: Object.assign(
            {},
            parent.options,
            {
                [resource.name]: {
                    description: `${text.toTitleCase(resource.title)} ID`,
                    type: 'string',
                    required: true,
                },
            }
        ),
        url: args => `${resource.url(args)}/${args[resource.name]}`,
    });

    const category = genericResource(resource);

    category.addChild(require('./tag')(childDefaults));

=======
        defaultQuery: '[].{id:_id,name:name,project:project,state:state }',
=======
        defaultQuery: '[].{id:_id,name:name,registry:registry,state:state}',
>>>>>>> abb9874... Small changes in registry and repository
=======
        defaultQuery: '[].{id:id}',
>>>>>>> 6979b02... Changes in registry and generic delete
        url: args => `${parent.url(args)}/repository`,
        options: parent.options,
        plugins: genericDefaults.plugins,
        dirname: __dirname,
        commands: ['list'],
        extraCommands: [],
        title: `Repository of ${parent.title}`,
    };

<<<<<<< HEAD
>>>>>>> 7d954de... Added registry folder and files
=======
    const childDefaults = Object.assign({}, resource, {
        options: Object.assign(
            {},
            parent.options,
            {
                [resource.name]: {
                    description: `${text.toTitleCase(resource.title)} ID`,
                    type: 'string',
                    required: true,
                },
            }
        ),
        url: args => `${resource.url(args)}/${args[resource.name]}`,
    });

    const category = genericResource(resource);

    category.addChild(require('./tag')(childDefaults));

>>>>>>> 6a6f326... Modified /registry/repository/index.js
=======
        defaultQuery: '[].{id:_id,name:name,project:project,state:state }',
=======
        defaultQuery: '[].{id:_id,name:name,registry:registry,state:state}',
>>>>>>> 8c044d2... Small changes in registry and repository
=======
        defaultQuery: '[].{id:id}',
>>>>>>> 8bb94c7... Changes in registry and generic delete
>>>>>>> e07ff18bc55568aed33ee59b4d978fe817f11a2d
        url: args => `${parent.url(args)}/repository`,
        options: parent.options,
        plugins: genericDefaults.plugins,
        dirname: __dirname,
        commands: ['list'],
        extraCommands: [],
        title: `Repository of ${parent.title}`,
    };

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c102012... Added registry folder and files
=======
>>>>>>> e07ff18bc55568aed33ee59b4d978fe817f11a2d
    const childDefaults = Object.assign({}, resource, {
        options: Object.assign(
            {},
            parent.options,
            {
                [resource.name]: {
                    description: `${text.toTitleCase(resource.title)} ID`,
                    type: 'string',
                    required: true,
                },
            }
        ),
        url: args => `${resource.url(args)}/${args[resource.name]}`,
    });

    const category = genericResource(resource);

    category.addChild(require('./tag')(childDefaults));

<<<<<<< HEAD
=======
>>>>>>> 8b25992... Modified /registry/repository/index.js
>>>>>>> e07ff18bc55568aed33ee59b4d978fe817f11a2d
    return category;
};
