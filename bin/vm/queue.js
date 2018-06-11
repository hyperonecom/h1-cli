'use strict';

const Cli = require('structured-cli');

module.exports = resource => Cli.createCommand('queue', {
    description: `History of ${resource.title}`
  , plugins: resource.plugins
  , options: resource.options
  , params: resource.params
  , handler: args => {

        args.query = '[].{id:_id,name:name,createdBy:createdBy,queued:queued,state:state}';

        return args.helpers.api
            .get(`vm/${args.vm}/queue`)
            .then(result => args.helpers.sendOutput(args, result));
    }
});
