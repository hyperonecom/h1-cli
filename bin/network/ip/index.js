'use strict';

const genericResource = require('bin/generic');
const defaults = require('bin/generic/defaults');

const options = {
    'network-id': {
        description: 'network id'
      , type: 'string'
      , required: true
    }
};

const resource = {
    name: 'ip'
  , defaultQuery: require('bin/ip').config.defaultQuery
  , url: args => `network/${args['network-id']}/ip`
  , plugins: defaults.plugins
  , options: options
};

const category = genericResource(resource);

category.addChild(require('./create')(resource));

module.exports = category;
