'use strict';

const genericResource = require('bin/generic');

const resource = {
    name: 'tenant',
    defaultQuery: '[].{id:_id,name:name,billing:billing.company,active:active,processing:processing}',
    url: () => 'tenant',
    plugins: [
        require('bin/_plugins/loginRequired'),
        require('bin/_plugins/outputFormat'),
        require('bin/_plugins/api')
    ]
};

const category = genericResource(resource);

const childDefaults = Object.assign({}, resource, {
    params: {
        id: {
            description: 'Tenant id',
            type: 'string',
            required: true
        }
    }
});

category.addChild(require('./access')(childDefaults));

category.addChild(require('./select')(childDefaults));
category.addChild(require('./limits')(childDefaults));

category.addChild(require('bin/generic/credentials')(Object.assign(
    {}
  , childDefaults
  , { url: args => `tenant/${args.id}/credentialStore`}
)));

module.exports = category;
