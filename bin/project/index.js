'use strict';

const genericResource = require('bin/generic');

const resource = {
    name: 'project',
    defaultQuery: '[].{id:_id,name:name,billing:billing.company,active:active,processing:processing}',
    url: () => 'tenant',
    plugins: [
        require('bin/_plugins/loginRequired'),
        require('bin/_plugins/outputFormat'),
        require('bin/_plugins/api')
    ],
    title: 'project'
};

const category = genericResource(resource);
category.addChild(require('./list')(resource));

const childDefaults = Object.assign({}, resource, {
    options: {
        project: {
            description: 'Project ID or name'
          , type: 'string'
          , required: true
          , dest: 'id'
        }
    }
  , url: args => `${resource.url(args)}/${args.id}`
});

category.addChild(require('./access')(childDefaults));
category.addChild(require('./token')(childDefaults));

category.addChild(require('./select')(childDefaults));
category.addChild(require('./limits')(childDefaults));

category.addChild(require('bin/generic/credentials')(Object.assign(
    {}
  , childDefaults
  , { url: args => `${childDefaults.url(args)}/credentialStore`}
)));

module.exports = category;
