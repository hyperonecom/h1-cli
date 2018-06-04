'use strict';

const genericResource = require('bin/generic');
const genericDefaults = require('bin/generic/defaults');

const resource = {
    name: 'dvd'
  , defaultQuery: '[].{id:_id,iso:iso._id,isoname:iso.name}'
  , url: args => `vm/${args.vm}/dvddrive`
  , commands: ['list']
  , plugins: genericDefaults.plugins
  , options: {
        vm: {
            description: 'VM name or ID'
          , type: 'string'
          , required: true
        }
    }
};

const category = genericResource(resource);

category.addChild(require('./insert')(resource));
category.addChild(require('./eject')(resource));

module.exports = category;
