'use strict';

const Cli = require('structured-cli');

const options = {
    recommended: {
        description: 'display recommended images'
      , type: 'boolean'
    }
  , all: {
        description: 'display all images'
      , type: 'boolean'
    }
};

module.exports = resource => Cli.createCommand('list', {
    description: 'Resource list'
  , plugins: resource.plugins
  , options: options
  , handler: args => {
        let path = '';
        if (args.recommended) {
            path = '/recommended';
        } else  if (args.all) {
            path = '/all';
        }

        if (args.recommended && args.output !== 'json') {
            args.query = args.query || '[].{id:_id,name:name,distro:description.distro,release:description.release,codename:description.codename,arch:description.arch,fileSize:ceil(fileSize),created:createdOn}';
        }

        return args.helpers.api
            .get(`${resource.url()}${path}`)
            .then(result => args.helpers.sendOutput(args, result));
    }
});
